<?php
class REALLY_SIMPLE_SECURITY
{
	private static $instance;
	public $firewall;

	private function __construct()
	{

	}

	public static function instance()
	{
		if (!isset(self::$instance) && !(self::$instance instanceof REALLY_SIMPLE_SECURITY)) {
			self::$instance = new REALLY_SIMPLE_SECURITY;
			self::$instance->includes();

			if ( rsssl_is_logged_in_rest() || is_admin() || wp_doing_cron() || defined('RSSSL_DOING_CSP') ) {
				self::$instance->firewall = new rsssl_firewall();
			}
			self::$instance->hooks();
		}
		return self::$instance;
	}

	private function includes()
	{
		$path = rsssl_path.'security/';
		require_once( $path . 'functions.php' );
		require_once( $path . 'cron.php' );
		require_once( $path . 'deactivate-integration.php' );
		require_once( $path . 'integrations.php');

		/**
		 * Load only on back-end
		 */
		if ( rsssl_is_logged_in_rest() || is_admin() || wp_doing_cron() ) {
			require_once( $path . 'firewall.php' );
			require_once( $path . 'tests.php' );
			require_once( $path . 'notices.php' );
			require_once( $path . 'sync-settings.php' );
		}

	}

	private function hooks()
	{
	}
}

function RSSSL_SECURITY()
{
	return REALLY_SIMPLE_SECURITY::instance();
}
add_action('plugins_loaded', 'RSSSL_SECURITY', 9);