<?php

class rsssl_change_login_url {

	private $wp_login_php;

	function __construct() {

		//send login mail if user uses this parameter
		if ( isset( $GET['rssslgetlogin'] ) ) {

			$args = [
				'to' => get_bloginfo('admin_email'),
				'headers' => array('Content-Type: text/html; charset=UTF-8'),
				'body' => trailingslashit( site_url() ) . $this->new_login_slug(),
				'subject' => '<div>' . __("[Really Simple SSL] You can log in to your site via", "really-simple-ssl") . "</div>",
			];

			new rsssl_mailer( $args );
		}

		remove_action( 'template_redirect', 'wp_redirect_admin_locations', 1000 );
		add_action( 'plugins_loaded', array( $this, 'plugins_loaded' ), 9999 );
		add_action( 'wp_loaded', array( $this, 'wp_loaded' ) );
		add_filter( 'site_url', array( $this, 'site_url' ), 10, 4 );
		add_filter( 'network_site_url', array( $this, 'network_site_url' ), 10, 3 );
		add_filter( 'wp_redirect', array( $this, 'wp_redirect' ), 10, 2 );
		add_action( 'template_redirect', array( $this, 'redirect_export_data' ) );
		add_filter( 'login_url', array( $this, 'login_url' ), 10, 3 );
	}

	/**
	 * Test if the new login page result in a successful status code. Do not load integration otherwise.
	 * @return bool
	 */

	public function test_new_login_success(): bool {
		$new_login = $this->new_login_url();
		$response = wp_remote_get( $new_login );
		if ( is_array( $response ) && ! is_wp_error( $response ) ) {
			$response_code = wp_remote_retrieve_response_code( $response );
			if ( $response_code != 404 ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Detect known plugins which change WordPress login
	 * @return void
	 */
	public function detect_login_plugins() {

		$plugins = [];



	}

	/**
	 * initialize the template loader
	 *
	 * @return void
	 */

	private function wp_template_loader() {
		global $pagenow;
		$pagenow = 'index.php';

		if ( ! defined( 'WP_USE_THEMES' ) ) {
			define( 'WP_USE_THEMES', true );
		}

		wp();
		require_once( ABSPATH . WPINC . '/template-loader.php' );
		die;
	}

	/**
	 * Override the login slug
	 *
	 * @return string
	 */
	private function new_login_slug(): string {
		return ! empty( rsssl_get_option('change_login_url') ) ? rsssl_get_option('change_login_url') : 'wplogin';
	}

	/**
	 * Redirect to 404
	 * @return void
	 */
	private function redirect_to_404() {
		global $wp_query;
		$wp_query->set_404();
		status_header( 404 );
		get_404_template();
		die();
	}

	/**
	 * Get new login URL
	 *
	 * @return string
	 */
	public function new_login_url(): string {
		$url = home_url();
		if ( get_option( 'permalink_structure' ) ) {
			return trailingslashit( $url ) . $this->new_login_slug();
		} else {
			return $url . '?' . $this->new_login_slug();
		}
	}

	public function redirect_export_data() {
		if ( ! empty( $_GET ) && isset( $_GET['action'] ) && 'confirmaction' === $_GET['action'] && isset( $_GET['request_id'] ) && isset( $_GET['confirm_key'] ) ) {
			$request_id = (int) $_GET['request_id'];
			$key        = sanitize_text_field( wp_unslash( $_GET['confirm_key'] ) );
			$result     = wp_validate_user_request_key( $request_id, $key );
			if ( ! is_wp_error( $result ) ) {
				wp_redirect( add_query_arg( array(
					'action'      => 'confirmaction',
					'request_id'  => $request_id,
					'confirm_key' => $key,
				), $this->new_login_url()
				) );
				exit();
			}
		}
	}

	public function plugins_loaded() {

		global $pagenow;
		if ( ! is_multisite()
		     && ( strpos( rawurldecode( $_SERVER['REQUEST_URI'] ), 'wp-signup' ) !== false
		          || strpos( rawurldecode( $_SERVER['REQUEST_URI'] ), 'wp-activate' ) !== false ) ) {

			wp_die( __( 'This feature is not enabled.', 'wps-hide-login' ) );
		}

		$request = parse_url( rawurldecode( $_SERVER['REQUEST_URI'] ) );
		if ( ( strpos( rawurldecode( $_SERVER['REQUEST_URI'] ), 'wp-login.php' ) !== false
		       || ( isset( $request['path'] ) && untrailingslashit( $request['path'] ) === site_url( 'wp-login', 'relative' ) ) )
		     && ! is_admin() ) {
			$this->wp_login_php = true;
//			$_SERVER['REQUEST_URI'] = $this->user_trailingslashit( '/' . str_repeat( '-/', 10 ) );

			$pagenow = 'index.php';
		} elseif ( ( isset( $request['path'] ) && untrailingslashit( $request['path'] ) === home_url( $this->new_login_slug(), 'relative' ) )
		           || ( ! get_option( 'permalink_structure' )
		                && isset( $_GET[ $this->new_login_slug() ] )
		                && empty( $_GET[ $this->new_login_slug() ] ) ) ) {

			$pagenow = 'wp-login.php';
		} elseif ( ( strpos( rawurldecode( $_SERVER['REQUEST_URI'] ), 'wp-register.php' ) !== false
		             || ( isset( $request['path'] ) && untrailingslashit( $request['path'] ) === site_url( 'wp-register', 'relative' ) ) )
		           && ! is_admin() ) {

			$this->wp_login_php = true;
//			$_SERVER['REQUEST_URI'] = $this->user_trailingslashit( '/' . str_repeat( '-/', 10 ) );

			$pagenow = 'index.php';
		}
	}

	/**
	 *
	 * @return void
	 */

	public function wp_loaded() {
		global $pagenow;
		$request = parse_url( rawurldecode( $_SERVER['REQUEST_URI'] ) );

		if ( $pagenow === 'wp-login.php' ) {
			// These globals should be available on wp-login.php. Do not remove
			global $error, $interim_login, $action, $user_login;

			$redirect_to = admin_url();
			$requested_redirect_to = '';
			if ( isset( $_REQUEST['redirect_to'] ) ) {
				$requested_redirect_to = $_REQUEST['redirect_to'];
			}

			if ( is_user_logged_in() ) {
				$user = wp_get_current_user();
				if ( ! isset( $_REQUEST['action'] ) ) {
					wp_safe_redirect( $redirect_to );
					die();
				}
			}

			@require_once ABSPATH . 'wp-login.php';
			die;
		} elseif ( ! ( isset( $_GET['action'] ) && $_GET['action'] === 'postpass' && isset( $_POST['post_password'] ) ) ) {

			if ( is_admin() && ! is_user_logged_in() && ! defined( 'WP_CLI' ) && ! defined( 'DOING_AJAX' ) && ! defined( 'DOING_CRON' ) && $pagenow !== 'admin-post.php'
			) {
				$this->redirect_to_404();
			}

			if ( ! is_user_logged_in() && isset( $request['path'] ) && $request['path'] === '/wp-admin/options.php' ) {
				$this->redirect_to_404();
			}

			if ( $pagenow === 'wp-login.php' && isset( $request['path'] ) && $request['path'] !== $this->user_trailingslashit( $request['path'] ) && get_option( 'permalink_structure' ) ) {
				wp_safe_redirect( $this->user_trailingslashit( $this->new_login_url() ) . ( ! empty( $_SERVER['QUERY_STRING'] ) ? '?' . $_SERVER['QUERY_STRING'] : '' ) );
				die();
			} elseif ( $this->wp_login_php ) {
				if ( ( $referer = wp_get_referer() )
				     && strpos( $referer, 'wp-activate.php' ) !== false
				     && ( $referer = parse_url( $referer ) )
				     && ! empty( $referer['query'] ) ) {

					parse_str( $referer['query'], $referer );

					@require_once WPINC . '/ms-functions.php';

					if ( ! empty( $referer['key'] )
					     && ( $result = wpmu_activate_signup( $referer['key'] ) )
					     && is_wp_error( $result )
					     && ( $result->get_error_code() === 'already_active'
					          || $result->get_error_code() === 'blog_taken' ) ) {

						wp_safe_redirect( $this->new_login_url() . ( ! empty( $_SERVER['QUERY_STRING'] ) ? '?' . $_SERVER['QUERY_STRING'] : '' ) );
						die;
					}
				}

				$this->wp_template_loader();

			}
		}
	}

	/**
	 * @param string   $url
	 * @param string   $path
	 * @param          $blog_id
	 *
	 * @return string
	 */
	public function site_url( string $url, string $path, $blog_id ): string {
		return $this->filter_wp_login_php( $url );
	}

	/**
	 * @param string $url
	 * @param string $path
	 *
	 * @return string
	 */
	public function network_site_url( $url, $path ): string {
		return $this->filter_wp_login_php( $url );
	}

	/**
	 * @param string $location
	 * @param string $status
	 *
	 * @return string
	 */
	public function wp_redirect( string $location, string $status ): string {
		if ( strpos( $location, 'https://wordpress.com/wp-login.php' ) !== false ) {
			return $location;
		}

		return $this->filter_wp_login_php( $location );
	}

	private function use_trailing_slashes() {
		return ( '/' === substr( get_option( 'permalink_structure' ), - 1, 1 ) );
	}

	private function user_trailingslashit( $string ) {
		return $this->use_trailing_slashes() ? trailingslashit( $string ) : untrailingslashit( $string );
	}

	/**
	 * Adjust the login URL if necessary
	 *
	 * @param string $url
	 *
	 * @return string
	 */

	public function filter_wp_login_php( string $url ): string {
		//don't change login url if we're posting the password
		if ( strpos( $url, 'wp-login.php?action=postpass' ) !== false ) {
			return $url;
		}

		if ( strpos( $url, 'wp-login.php' ) !== false && strpos( wp_get_referer(), 'wp-login.php' ) === false ) {
			$args = explode( '?', $url );
			if ( isset( $args[1] ) ) {
				parse_str( $args[1], $args );
				if ( isset( $args['login'] ) ) {
					$args['login'] = rawurlencode( $args['login'] );
				}
				$url = add_query_arg( $args, $this->new_login_url() );
			} else {
				$url = $this->new_login_url();
			}
		}

		return $url;
	}

	/**
	 *
	 * Update url redirect : wp-admin/options.php
	 *
	 * @param $login_url
	 * @param $redirect
	 * @param $force_reauth
	 *
	 * @return string
	 */
	public function login_url( $login_url, $redirect, $force_reauth ) {

		if ( is_404() ) {
			return '#';
		}

		if ( $force_reauth === false ) {
			return $login_url;
		}

		if ( empty( $redirect ) ) {
			return $login_url;
		}

		$redirect = explode( '?', $redirect );

		if ( $redirect[0] === admin_url( 'options.php' ) ) {
			$login_url = admin_url();
		}

		return $login_url;
	}

}

new rsssl_change_login_url();