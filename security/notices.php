<?php defined( 'ABSPATH' ) or die();

function rsssl_general_security_notices( $notices ) {
	$code = get_site_option('rsssl_htaccess_rules');
	if (strpos($code, "\n")===0) {
		$code = 	preg_replace('/\n/', '', $code, 1);
	}
	$code = '<br><code style="white-space: pre-line">' . esc_html($code) . '</code><br>';

	$notices['application-passwords'] = array(
		'callback' => 'rsssl_wp_is_application_passwords_available',
		'score' => 5,
		'output' => array(
			'true' => array(
				'msg' => __("Disable application passwords", "really-simple-ssl"),
				'icon' => 'premium',
				'url' => 'https://really-simple-ssl.com/definition/what-are-application-passwords/',
				'dismissible' => true,
			),
		),
	);

	$notices['htaccess_status'] = array(
		'callback' => 'rsssl_htaccess_status',
		'score' => 5,
		'output' => array(
			'not-writable' => array(
				'title' => __(".htaccess not writable", "really-simple-ssl"),
				'msg' => __("An option that requires the .htaccess file is enabled, but the file is not writable.", "really-simple-ssl").' '.__("Please add the following lines to your .htaccess, or set it to writable:", "really-simple-ssl").$code,
				'icon' => 'warning',
				'dismissible' => true,
				'url' => 'https://really-simple-ssl.com/manual/editing-htaccess/',
			),
			'not-exists' => array(
				'title' => __(".htaccess does not exist", "really-simple-ssl"),
				'msg' => __("An option that requires the .htaccess file is enabled, but the file does not exist.", "really-simple-ssl").' '.__("Please add the following lines to your .htaccess, or set it to writable:", "really-simple-ssl").$code,
				'icon' => 'warning',
				'dismissible' => true,
				'url' => 'https://really-simple-ssl.com/manual/editing-htaccess/',
			),
			'not-writable-uploads' => array(
				'title' => __(".htaccess not writable", "really-simple-ssl"),
				'msg' => __("An option was enabled which requires the .htaccess in the uploads directory to get written, but the .htaccess or directory is not writable.", "really-simple-ssl").' '.__("Please add the following lines to your .htaccess, or set it to writable:", "really-simple-ssl").$code,
				'icon' => 'warning',
				'dismissible' => true,
				'url' => 'https://really-simple-ssl.com/manual/editing-htaccess/',
			),
		),
		'show_with_options' => [
			'block_code_execution_uploads',
			'disable_indexing,',
			'redirect,'
		]
	);

	$notices['block_display_is_login_enabled'] = array(
		'condition' => ['NOT option_block_display_is_login'],
		'callback' => '_true_',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'block_display_is_login',
				'msg' => __("It is currently possible to create an administrator user with the same login and display name.", "really-simple-ssl"),
				'icon' => 'open',
				'dismissible' => true,
			),
		),
	);

	$notices['display_name_is_login_exists'] = array(
		'condition' => ['rsssl_get_users_where_display_name_is_login'],
		'callback' => '_true_',
		'score' => 5,
		'output' => array(
			'true' => array(
				'url' =>admin_url('users.php?role=administrator'),
				'msg' => __("We have detected administrator roles where the login and display names are the same.", "really-simple-ssl") . "&nbsp;<b>" . rsssl_list_users_where_display_name_is_login_name() . "</b>",
				'icon' => 'open',
				'dismissible' => true,
			),
		),
	);

	$notices['debug_log'] = array(
		'condition' => ['rsssl_debug_log_file_exists_in_default_location'],
		'callback' => 'rsssl_is_debugging_enabled',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'change_debug_log_location',
				'title' => __("Debugging", "really-simple-ssl"),
				'msg' => __("Your site logs information to a public debugging file.", "really-simple-ssl"),
				'icon' => 'premium',
				'dismissible' => true,
			),
		),
		'show_with_options' => [
			'change_debug_log_location',
		],
	);

	$notices['user_id_one'] = array(
		'condition' => ['rsssl_id_one_no_enumeration'],
		'callback' => '_true_',
		'score' => 5,
		'output' => array(
			'true' => array(
				'msg' => __("Your site is vulnerable to user enumeration attacks.", "really-simple-ssl"). rsssl_read_more('https://really-simple-ssl.com/what-are-user-enumeration-attacks/'),
				'icon' => 'warning',
				'title' => 'Prevent user enumeration',
				// 'url' => 'https://really-simple-ssl.com/what-are-user-enumeration-attacks/',
				'dismissible' => true,
				'highlight_field_id' => 'disable_user_enumeration',
			),
		),
		'show_with_options' => [
			'disable_user_enumeration',
		],
	);

	$notices['admin_user_renamed_user_enumeration_enabled'] = array(
		'condition' => ['check_admin_user_renamed_and_enumeration_disabled'],
		'callback' => '_true_',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'disable_user_enumeration',
				'msg' => __("To prevent attackers from identifying the renamed administrator, activate the 'Disable User Enumeration' setting.", "really-simple-ssl"),
				'url' => 'https://really-simple-ssl.com/what-are-user-enumeration-attacks/',
				'icon' => 'open',
				'dismissible' => true,
			),
		),
		// 'show_with_options' => [
		// 	'disable_user_enumeration',
		// ],
	);

	$notices['username_admin_exists'] = array(
		'condition' => ['rsssl_has_admin_user'],
		'callback' => '_true_',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'rename_admin_user',
				'title' => __("Username'.", "really-simple-ssl"),
				'msg' => __("Your site registered a user with the name 'admin'.", "really-simple-ssl"),
				'icon' => 'warning',
				'dismissible' => true,
			),
		),
		'show_with_options' => [
			'rename_admin_user',
		],
	);
	$notices['code-execution-uploads-allowed'] = array(
		'callback' => 'rsssl_code_execution_allowed',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'block_code_execution_uploads',
				'msg' => __("Code execution is allowed in the public 'Uploads' folder", "really-simple-ssl"),
				'icon' => 'open',
				'dismissible' => true,
			),
		),
	);
	$notices['db-prefix-notice'] = array(
		'callback' => 'rsssl_is_default_wp_prefix',
		'score' => 5,
		'output' => array(
			'false' => array(
				'msg' => __("Your database prefix is renamed and randomized. Awesome!", "really-simple-ssl"),
				'icon' => 'success',
				'dismissible' => true,
			),
			'true' => array(
				'msg' => __("Your database prefix is set to the default 'wp_'.", "really-simple-ssl"),
				'icon' => 'premium',
				'dismissible' => true,
				'url' => 'https://really-simple-ssl.com/instructions/about-hardening-features/'
			),
		),
	);

//	$notices['xmlrpc'] = array(
//		'callback' => 'rsssl_xmlrpc_allowed',
//		'score' => 10,
//		'output' => array(
//			'true' => array(
//				'highlight_field_id' => 'xmlrpc',
//				'msg' => __("XMLRPC is enabled on your site.", "really-simple-ssl"),
//				'icon' => 'warning',
//				'plusone' => true,
//			),
//		),
//		'show_with_options' => [
//			'xmlrpc',
//		],
//	);

	$notices['file-editing'] = array(
		'callback' => 'rsssl_file_editing_allowed',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'disable_file_editing',
				'msg' => __("The built-in file editors are accessible to others.", "really-simple-ssl"),
//					'url' => 'https://wordpress.org/support/article/editing-wp-config-php/#disable-the-plugin-and-theme-editor',
				'icon' => 'open',
				'dismissible' => true,
			),
		),
	);

	$notices['registration'] = array(
		'callback' => 'rsssl_user_registration_allowed',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'disable_anyone_can_register',
				'msg' => __("Anyone can register an account on your site. Consider disabling this option in the WordPress general settings.", "really-simple-ssl"),
				'icon' => 'open',
				'plusone' => false,
			),
		),
	);

	$notices['hide-wp-version'] = array(
		'callback' => 'rsssl_src_contains_wp_version',
		'score' => 5,
		'output' => array(
			'true' => array(
				'highlight_field_id' => 'hide_wordpress_version',
				'msg' => __("Your WordPress version is visible to others.", "really-simple-ssl"),
				'icon' => 'open',
				'dismissible' => true,
			),
		),
	);

	return $notices;
}
add_filter('rsssl_notices', 'rsssl_general_security_notices');
