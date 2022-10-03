<?php
defined('ABSPATH') or die();
/**
 *  Only functions also required on front-end here
 */


/**
 * Get a Really Simple SSL option by name
 *
 * @param string $name
 * @param mixed  $default
 *
 * @return mixed
 */

function rsssl_get_option( string $name, $default=false ) {
	$name = sanitize_title($name);
	if ( is_multisite() && rsssl_is_networkwide_active() ) {
		$options = get_site_option( 'rsssl_options', [] );
	} else {
		$options = get_option( 'rsssl_options', [] );
	}

	//fallback, will be removed after 6.2
	//because we only check if the option is not saved in the new style, this if should normally never get executed.
//	if (
//		!isset($options[$name]) &&
//		($name === 'ssl_enabled' || $name === 'redirect' || $name === "mixed_content_fixer")
//	) {
//		$options = rsssl_get_legacy_option($options, $name);
//	}

	$value = $options[ $name ] ?? false;
	if ( $value===false && $default!==false ) {
		$value = $default;
	}

	return apply_filters("rsssl_option_$name", $value, $name);
}

/**
 * Check if we should treat the plugin as networkwide or not.
 * Note that this function returns false for single sites! Always use icw is_multisite()
 *
 * @return bool
 */

function rsssl_is_networkwide_active(){
	if ( !is_multisite() ) {
		return false;
	}
	if ( !function_exists('is_plugin_active_for_network') )
		require_once(ABSPATH . '/wp-admin/includes/plugin.php');

	if ( is_plugin_active_for_network(rsssl_plugin) ) {
		return true;
	} else {
		return false;
	}
}

/**
 * if the option is does not exist in our new array, check if it's available in the old option. If so, use that one, and drop it from the old options.
 * @deprecated to be used until 6.2, as fallback for failed upgrades
 * @param array  $options
 * @param string $name
 *
 * @return array
 */
function rsssl_get_legacy_option( array $options, string $name): array {
	$old_options = is_multisite() ? get_site_option('rlrsssl_network_options') : get_option( 'rlrsssl_options' );
	if ( $old_options ) {
		$can_update = is_admin() && rsssl_user_can_manage();
		if ( $name === 'ssl_enabled' && isset( $old_options['ssl_enabled']) ) {
			$val                    = $old_options['ssl_enabled'];
			$options['ssl_enabled'] = $val;
			if ( $can_update ) {
				rsssl_update_option( 'ssl_enabled', $val );
				unset( $old_options['ssl_enabled'] );
				update_option( 'rlrsssl_options', $old_options, false );
			}
		} else if ( $name === 'dismiss_all_notices' && isset( $old_options['dismiss_all_notices']) ) {
			$val = $old_options['dismiss_all_notices'];
			$options['dismiss_all_notices'] = $val;
			if ( $can_update ) {
				rsssl_update_option( 'dismiss_all_notices', $val );
				unset( $old_options['dismiss_all_notices'] );
				update_option( 'rlrsssl_options', $old_options, false );
			}
		} else if ( $name === 'mixed_content_fixer' && isset($old_options['autoreplace_insecure_links']) ) {
			$val = $old_options['autoreplace_insecure_links'];
			$options['mixed_content_fixer'] = $val;
			if ( $can_update ) {
				rsssl_update_option( $name, $val );
				unset( $old_options['autoreplace_insecure_links'] );
				update_option( 'rlrsssl_options', $old_options, false );
			}
		} else if ( $name === 'redirect' ){
			if ( isset($old_options['htaccess_redirect']) && $old_options['htaccess_redirect'] ) {
				$options['redirect'] = 'htaccess';
				if ( $can_update ) {
					rsssl_update_option( 'redirect', 'htaccess' );
					unset( $old_options['htaccess_redirect'] );
					update_option( 'rlrsssl_options', $old_options, false );
				}
			} else if (isset($old_options['wp_redirect']) && $old_options['wp_redirect']) {
				$options['redirect'] = 'wp_redirect';
				if ( $can_update ) {
					rsssl_update_option( $name, 'wp_redirect' );
					unset( $old_options['wp_redirect'] );
					update_option( 'rlrsssl_options', $old_options, false );
				}
			}
		}
	}
	return $options;
}
