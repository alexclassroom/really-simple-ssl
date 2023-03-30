<?php
if ( ! defined( 'ABSPATH' ) ) exit;
if (!function_exists('is_plugin_active')) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
}
/**
 * Install suggested plugins
 */

if ( !class_exists('rsssl_installer') ){
    class rsssl_installer {
        private $slug = '';
        public function __construct($slug) {
            if ( !current_user_can('install_plugins') ) return;

            $this->slug = $slug;
        }

        /**
         * Check if plugin is downloaded
         * @return bool
         */

        public function plugin_is_downloaded(){
            return file_exists(trailingslashit (WP_PLUGIN_DIR).$this->get_activation_slug() );
        }
        /**
         * Check if plugin is activated
         * @return bool
         */
        public function plugin_is_activated(){
            return is_plugin_active($this->get_activation_slug());
        }

        /**
         * Install plugin
         * @param string $step
         *
         * @return void
         */
        public function install($step){
            if ( !current_user_can('install_plugins') ) return;

            if ( $step === 'download' ) {
                $this->download_plugin();
            }
            if ( $step === 'activate' ) {
                $this->activate_plugin();
            }
        }

        /**
         * Get slug to activate plugin with
         * @return string
         */
        public function get_activation_slug(){
            $slugs = [
                'burst-statistics' => 'burst-statistics/burst.php',
                'complianz-gdpr' => 'complianz-gdpr/complianz-gpdr.php',
                'complianz-terms-conditions' => 'complianz-terms-conditions/complianz-terms-conditions.php',
            ];
            return $slugs[$this->slug];
        }

        /**
         * Cancel shepherd tour
         * @return void
         */
        public function cancel_tour(){
            $prefixes = [
                'burst-statistics' => 'burst',
                'complianz-gdpr' => 'cmplz',
                'complianz-terms-conditions' => 'cmplz_tc',
            ];
            $prefix = $prefixes[$this->slug];
            update_site_option( $prefix.'_tour_started', false );
            update_site_option( $prefix.'_tour_shown_once', true );
	        delete_transient($prefix.'_redirect_to_settings');
        }

        /**
         * Download the plugin
         * @return bool
         * @todo restore
         */
        public function download_plugin() {
            error_log("Entering download_plugin function");

            if (!current_user_can('install_plugins')) {
                error_log("User doesn't have permission to install plugins");
                return false;
            }

            if (get_transient("rsssl_plugin_download_active") !== $this->slug) {
                set_transient("rsssl_plugin_download_active", $this->slug, MINUTE_IN_SECONDS);
                $info = $this->get_plugin_info();

                if (!$info) {
                    error_log("Failed to get plugin info");
                }

                $download_link = esc_url_raw($info->versions['trunk']);
                error_log("Download link: " . $download_link);

                require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
                require_once ABSPATH . 'wp-admin/includes/file.php';
                include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

                if (!is_writable(WP_PLUGIN_DIR)) {
                    error_log("Plugin directory is not writable");
                    return false;
                }

                $skin = new WP_Ajax_Upgrader_Skin();
                $upgrader = new Plugin_Upgrader($skin);

                // Run the installation and store the result
                $result = $upgrader->run(array(
                    'package' => $download_link,
                    'destination' => WP_PLUGIN_DIR,
                    'clear_destination' => false, // Do not overwrite an existing plugin
                    'clear_working' => true, // Remove the temporary files after installation
                    'hook_extra' => array()
                ));

                if (is_wp_error($result)) {
                    error_log("Plugin installation failed: " . $result->get_error_message());
                    return false;
                }

                // Log the content of the temporary file created during the plugin installation
                $temp_package = $result['source_files'][0];
                error_log("Temporary package content: " . file_get_contents($temp_package));

                // Log the content of the temporary folder after the plugin is extracted
                $temp_plugin_folder = $result['remote_destination'];
                error_log("Temporary plugin folder content: " . print_r(scandir($temp_plugin_folder), true));

                delete_transient("rsssl_plugin_download_active");
            }

            $downloaded_plugin_path = trailingslashit(WP_PLUGIN_DIR) . $upgrader->plugin_info();
            error_log("Plugin download successful, located at: " . $downloaded_plugin_path);

            $plugin_directory = scandir(WP_PLUGIN_DIR);
            error_log("Plugin directory after installation: " . print_r($plugin_directory, true));

            return true;
        }



        /**
         * Activate the plugin
         *
         * @return bool
         */
        public function activate_plugin() {
            if (!current_user_can('install_plugins')) {
                return false;
            }

            $slug = $this->get_activation_slug();
            $plugin_file_path = trailingslashit(WP_PLUGIN_DIR) . $slug;

            // Make sure the plugin file exists before trying to activate it
            if (!file_exists($plugin_file_path)) {
                return false;
            }

            // Use plugin_basename to generate the correct slug, considering the WP_PLUGIN_DIR
            $plugin_slug = plugin_basename($plugin_file_path);

            $networkwide = is_multisite() && rsssl_is_networkwide_active();
            if (!defined('DOING_CRON')) {
                define('DOING_CRON', true);
                define('DOING_CRON', true);
            }

            $result = activate_plugin($plugin_slug, '', $networkwide);
            if (is_wp_error($result)) {
                return false;
            }

            $this->cancel_tour();
            return true;
        }

        /**
         * Get plugin info
         * @return array|WP_Error
         */
        public function get_plugin_info()
        {
            require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
            $plugin_info = get_transient('rsssl_'.$this->slug . '_plugin_info');
            if ( empty($plugin_info) ) {
                $plugin_info = plugins_api('plugin_information', array('slug' => $this->slug));
                if ( !is_wp_error($plugin_info) ) {
                    set_transient('rsssl_'.$this->slug . '_plugin_info', $plugin_info, WEEK_IN_SECONDS);
                }
            }
            return $plugin_info;
        }
    }

}