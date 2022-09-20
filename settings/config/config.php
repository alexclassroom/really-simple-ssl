<?php
defined('ABSPATH') or die();

function rsssl_menu(){
	$menu_items = [
		[
			"id"    => "dashboard",
			"title" => __( "Dashboard", 'really-simple-ssl' ),
			'default_hidden' => false,
			'menu_items' => [],
		],
		[
			"id"    => "settings",
			"title" => __( "Settings", 'really-simple-ssl' ),
			'default_hidden' => false,
			'menu_items' => [
				[
					'id' => 'general',
					'group_id' => 'general',
					'title' => __('General', 'really-simple-ssl'),
					'helpLink'  => 'https://really-simple-ssl.com',
					'groups' => [
						[
							'id' => 'general',
							'title' => __('General', 'really-simple-ssl'),
							'helpLink'  => 'https://really-simple-ssl.com',
						],
						[
							'id' => 'support',
							'title' => __('Premium support', 'really-simple-ssl'),
							'intro' => __('When you send this form, we will attach the following information: license key, scan results, your domain,.htaccess file, debug log and a list of active plugins.', 'really-simple-ssl'),
							'premium' => true,
							'premium_text' => __("Get Premium support, and more with %sReally Simple SSL pro%s", 'really-simple-ssl'),
							'helpLink'  => 'https://really-simple-ssl.com',
							'helpLink_text'  => __('Debugging with Really Simple SSL',"really-simple-ssl"),
						],
					],
				],
				[
					'id' => 'hardening',
					'title' => __('Hardening', 'really-simple-ssl'),
					'featured' => true,
					'groups' => [
						[
							'id' => 'hardening_basic',
							'helpLink'  => 'https://really-simple-ssl.com',
							'title' => __('Hardening features', 'really-simple-ssl'),
						],
						[
							'id' => 'hardening_extended',
							'premium' => true,
							'helpLink'  => 'https://really-simple-ssl.com',
							'title' => __('Advanced hardening features', 'really-simple-ssl'),
						],
						[
							'id' => 'hardening_xml',
							'premium' => true,
							'helpLink'  => 'https://really-simple-ssl.com',
							'title' => __('XML RPC', 'really-simple-ssl'),
						],
					],
				],
				[
					'id' => 'mixed_content_scan',
					'title' => __('Mixed Content Scan', 'really-simple-ssl'),
					'premium' => true,
					'premium_text' => __("Learn more about the %sMixed Content Scan Pro%s", 'really-simple-ssl'),
					'groups' => [
						[
							'id' => 'mixedcontentscan',
							'title' => __('Mixed Content Scan', 'really-simple-ssl'),
							'premium' => true,
							'premium_text' => __("Learn more about %sHSTS%s", 'really-simple-ssl'),
						],
					],
					//example of submenu
//						'menu_items' => [
//							[
//								'id' => 'sub_mixed_content_1',
//								'title' => __('Sub mixed content 1', 'really-simple-ssl'),
//							],
//							[
//								'id' => 'sub_mixed_content_2',
//								'title' => __('Sub mixed content 2', 'really-simple-ssl'),
//							],
//						],
				],
				[
					'id' => 'recommended_security_headers',
					'title' => __('Recommended Security Headers', 'really-simple-ssl'),
					'premium' => true,
					'groups' => [
						[
							'id' => 'recommended_security_headers',
							'networkwide_required' => true,
							'premium' => true,
							'premium_text' => __("Get recommended security headers and more, with %sReally Simple SSL Pro%s", 'really-simple-ssl'),
							'upgrade' => 'https://really-simple-ssl.com/pro',
							'title' => __('Recommended Security Headers ', 'really-simple-ssl'),
							'helpLink'  => 'https://really-simple-ssl.com',
						],
					],
				],
				[
					'id' => 'hsts',
					'title' => __('HTTP Strict Transport Security', 'really-simple-ssl'),
					'intro' => __("Intro HSTS", "really-simple-ssl"),
					'premium' => true,
					'groups' => [
						[
							'id' => 'hsts',
							'premium' => true,
							'networkwide_required' => true,
							'premium_text' => __("Learn more about %sHSTS%s", 'really-simple-ssl'),
							'upgrade' => 'https://really-simple-ssl.com/pro',
							'title' => __('HSTS ', 'really-simple-ssl'),
							'helpLink'  => 'https://really-simple-ssl.com',
						],
					],
				],
				[
					'id' => 'permissions_policy',
					'title' => __('Permissions Policy', 'really-simple-ssl'),
					'intro' => __("Permissions Policy", "really-simple-ssl"),
					'premium' => true,
					'groups' => [
						[
							'id' => 'permissions_policy',
							'networkwide_required' => true,
							'premium' => true,
							'title' => __('Permissions Policy', 'really-simple-ssl'),
						],
					],
				],
				[
					'id' => 'content_security_policy',
					'title' => __('Content Security Policy', 'really-simple-ssl'),
					'intro' => __("Content Security Policy intro", "really-simple-ssl"),
					'premium' => true,
					'groups' => [
						[
							'id' => 'upgrade_insecure_requests',
							'networkwide_required' => true,
							'premium' => true,
							'helpLink'  => 'https://really-simple-ssl.com',
							'title' => __('Upgrade Insecure Requests', 'really-simple-ssl'),
						],
						[
							'id' => 'frame_ancestors',
							'networkwide_required' => true,
							'premium' => true,
							'helpLink'  => 'https://really-simple-ssl.com',
							'title' => __('Frame Ancestors', 'really-simple-ssl'),
						],
						[
							'id' => 'content_security_policy',
							'networkwide_required' => true,
							'helpLink'  => 'https://really-simple-ssl.com',
							'premium' => true,
							'title' => __('Source Directives', 'really-simple-ssl'),
						]
					],
				],
				[
					'id' => 'cross_origin_policy',
					'networkwide_required' => true,
					'premium' => true,
					'premium_text' => __('Get Cross Origin Policy Headers and more, with %sReally Simple SSL pro%s', 'really-simple-ssl'),
					'title' => __('Cross Origin Policy', 'really-simple-ssl'),
					'helpLink'  => 'https://really-simple-ssl.com',

				],
			],
		],
		[
			"id"    => "letsencrypt",
			'default_hidden' => true,
			"title" => __( "Let's Encrypt", 'really-simple-ssl' ),
			'intro' => sprintf(__('We have tried to make our Wizard as simple and fast as possible. Although these questions are all necessary, if there’s any way you think we can improve the plugin, please let us %sknow%s!', 'really-simple-ssl'),'<a target="_blank" href="https://really-simple-ssl.com/contact">', '</a>').
			           sprintf(__(' Please note that you can always save and finish the wizard later, use our %sdocumentation%s for additional information or log a %ssupport ticket%s if you need our assistance.', 'really-simple-ssl'),'<a target="_blank" href="https://really-simple-ssl.com/knowledge-base/generate-your-free-ssl-certificate/">', '</a>','<a target="_blank" href="https://wordpress.org/support/plugin/really-simple-ssl/">', '</a>'),

			'menu_items' => [
				[
					'id' => 'le-system-status',
					'title' => __('System Status', 'really-simple-ssl'),
					'intro' => __( 'Letʼs Encrypt is a free, automated and open certificate authority brought to you by the nonprofit Internet Security Research Group (ISRG).', 'really-simple-ssl' ),
					'helpLink'  => 'https://really-simple-ssl.com/about-lets-encrypt/',
					'tests_only' => true,
				],
				[
					'id' => 'le-general',
					'title' => __('General Settings', 'really-simple-ssl'),
				],
				[
					'id' => 'le-hosting',
					'title' => __( 'Hosting', 'really-simple-ssl' ),
					'intro' => __( 'Below you will find the instructions for different hosting environments and configurations. If you start the process with the necessary instructions and credentials the next view steps will be done in no time.', 'really-simple-ssl'),
				],
				[
					'id' => 'le-directories',
					'title' => __( 'Directories', 'really-simple-ssl' ),
//					'intro' => __( 'Below you will find the instructions for different hosting environments and configurations. If you start the process with the necessary instructions and credentials the next view steps will be done in no time.', 'really-simple-ssl'),
					'tests_only' => true,
				],
				[
					'id' => 'le-dns-verification',
					'title' => __( 'DNS verification', 'really-simple-ssl' ),
//					'intro' => __( 'Below you will find the instructions for different hosting environments and configurations. If you start the process with the necessary instructions and credentials the next view steps will be done in no time.', 'really-simple-ssl'),
					'tests_only' => true,
				],
				[
					'id' => 'le-generation',
					'title' => __( 'Generation', 'really-simple-ssl' ),
//					'intro' => __( 'Below you will find the instructions for different hosting environments and configurations. If you start the process with the necessary instructions and credentials the next view steps will be done in no time.', 'really-simple-ssl'),
					'tests_only' => true,
				],
				[
					'id' => 'le-installation',
					'title' => __( 'Installation', 'really-simple-ssl' ),
//					'intro' => __( 'Below you will find the instructions for different hosting environments and configurations. If you start the process with the necessary instructions and credentials the next view steps will be done in no time.', 'really-simple-ssl'),
					'tests_only' => true,
				],
				[
					'id' => 'le-activate_ssl',
					'title' => __( 'Activate', 'really-simple-ssl' ),
//					'intro' => __( 'Below you will find the instructions for different hosting environments and configurations. If you start the process with the necessary instructions and credentials the next view steps will be done in no time.', 'really-simple-ssl'),
					'tests_only' => true,

				],
			],
		],
	];
	return $menu_items;
}

function rsssl_fields( $load_values = true ){
	if ( !rsssl_user_can_manage() ) {
		return [];
	}
	$fields = [
        [
            'id'          => 'ssl_enabled',
            'menu_id'     => 'general',
            'group_id'    => 'general',
            'type'        => 'database',
            'label'       => '',
            'disabled'    => false,
            'default'     => false,
        ],
		[
			'id'          => 'site_has_ssl',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'database',
			'label'       => '',
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'review_notice_shown',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'database',
			'label'       => '',
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'redirect',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'select',
			'label'       => __( "Redirect method", 'really-simple-ssl' ),
			'options'     => [
				'none' => __("No redirect", "really-simple-ssl"),
				'wp_redirect' => __("301 PHP redirect", "really-simple-ssl"),
				'htaccess' => __("301 .htaccess redirect", "really-simple-ssl"),
			],
			'help'        => [
				'label' => 'default',
				'text' => __( 'Redirects all requests over HTTP to HTTPS using a PHP 301 redirect. Enable if the .htaccess redirect cannot be used, for example on NGINX servers.', 'really-simple-ssl' ),
			],
			'disabled'    => !rsssl_get_option('ssl_enabled'),
			'default'     => false,
		],
		[
			'id'          => 'mixed_content_fixer',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'checkbox',
			'label'       => __( "Mixed content fixer", 'really-simple-ssl' ),
			'help'        => [
				'label' => 'default',
				'text' => __( 'In most cases you need to leave this enabled, to prevent mixed content issues on your site.', 'really-simple-ssl' ),
			],
			'disabled'    => false,
			'default'     => true,
		],
		[
			'id'          => 'switch_mixed_content_fixer_hook',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'checkbox',
			'label'       => __( "Mixed content fixer - init hook", 'really-simple-ssl' ),
			'help'        => [
				'label' => 'default',
				'title' => __( "Mixed content fixer - init hook", 'really-simple-ssl' ),
				'text'  => __( 'If this option is set to true, the mixed content fixer will fire on the init hook instead of the template_redirect hook. Only use this option when you experience problems with the mixed content fixer.', 'really-simple-ssl' ),
			],
			'disabled'    => false,
			'required'    => true,
			'default'     => false,
			'react_conditions' => [
				'relation' => 'AND',
				[
					'mixed_content_fixer' => 1,
				]
			],
		],
		[
			'id'          => 'admin_mixed_content_fixer',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'checkbox',
			'label'       => __("Mixed content fixer - back-end", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'dismiss_all_notices',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'checkbox',
			'label'       => __( "Dismiss all notices", 'really-simple-ssl' ),
			'help'        => [
				'label' => 'default',
				'text' => __( "Enable this option to permanently dismiss all +1 notices in the 'Your progress' tab'", 'really-simple-ssl' ),
			],
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'download-system-status',
			'menu_id'     => 'general',
			'group_id'    => 'general',
			'type'        => 'button',
			'url'         => trailingslashit(rsssl_url).'system-status.php?download',
			'button_text' => __("System Status", "really-simple-ssl"),
			'label'       => __( "Download system status", 'really-simple-ssl' ),
			'help'        => [
				'label' => 'default',
				'text' => __( "Enable this option to permanently dismiss all +1 notices in the 'Your progress' tab'", 'really-simple-ssl' ),
			],
			'disabled'    => false,
			'default'     => false,
		],
        [
            'id'          => 'do_not_edit_htaccess',
            'menu_id'     => 'general',
            'group_id'    => 'general',
            'type'        => 'checkbox',
            'label'       => __( "Stop editing the .htaccess file", 'really-simple-ssl' ),
            'help'        => [
                'label' => 'default',
                'text' => __( 'If you want to customize the Really Simple SSL .htaccess, you need to prevent Really Simple SSL from rewriting it. Enabling this option will do that.', 'really-simple-ssl' ),
            ],
            'disabled'    => false,
            'default'     => false,
            //on multisite this setting can only be set networkwide
            'networkwide_required' => true,
            'server_conditions' => [
                'relation' => 'AND',
                [
                    'RSSSL()->rsssl_server->uses_htaccess()' => true,
                ]
            ],
        ],
		[
			'id'          => 'premium_support',
			'menu_id'     => 'general',
			'group_id'    => 'support',
			'type'        => 'support',
			'label'       => __( "Premium support", 'really-simple-ssl' ),
			'help'        => [
				'label' => 'default',
				'placeholder' => __( "If enabled, all the Really Simple SSL pages within the WordPress admin will be in high contrast", 'really-simple-ssl' ),
			],
			'disabled'    => false,
			'default'     => false,
		],
        [
            'id'          => 'disable_anyone_can_register',
            'menu_id'     => 'hardening',
	        'group_id'    => 'hardening_basic',
            'type'        => 'checkbox',
            'label'       => __( "Disable \"anyone can register\"", 'really-simple-ssl' ),
            'disabled'    => false,
            'default'     => false,
            'new_features_block' => [
	            'active' => __("User registration is restricted", 'really-simple-ssl'),
	            'inactive' => __("Registration is open to anyone", 'really-simple-ssl'),
	            'readmore' => '#',
            ],
        ],
		[
			'id'          => 'disable_file_editing',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Disable file editing", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
			'new_features_block' => [
				'active' => __("File editing is disabled", 'really-simple-ssl'),
				'inactive' => __("File editing is allowed", 'really-simple-ssl'),
				'readmore' => '#',
			],
		],
		[
			'id'          => 'block_code_execution_uploads',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Disable code execution in uploads folder", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
			'new_features_block' => [
				'active' => __("Code execution in uploads folder is disabled", 'really-simple-ssl'),
				'inactive' => __("Code execution not restricted properly", 'really-simple-ssl'),
				'readmore' => '#',
			],
		],
		[
			'id'          => 'hide_wordpress_version',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Hide WordPress version", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'disable_login_feedback',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Disable login feedback", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'disable_indexing',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Prevent directory browsing", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
			'new_features_block' => [
				'active' => __("Browsing/indexing of folders blocked", 'really-simple-ssl'),
				'inactive' => __("Browsing/indexing of folders possible", 'really-simple-ssl'),
				'readmore' => '#',
			],
		],
		[
			'id'          => 'disable_user_enumeration',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Disable user enumeration", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
			'new_features_block' => [
				'active' => __("User enumeration is restricted", 'really-simple-ssl'),
				'inactive' => __("User enumeration is not restricted", 'really-simple-ssl'),
				'readmore' => '#',
			],
		],
		[
			'id'          => 'rename_admin_user',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Rename user 'admin'", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
			'new_features_block' => [
				'active' => __("Admin username not allowed", 'really-simple-ssl'),
				'inactive' => __("Admin username in use", 'really-simple-ssl'),
				'readmore' => '#',
			],
		],
		[
			'id'          => 'disable_xmlrpc',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Disable xmlrpc", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'block_registration_when_display_name_is_login_name',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_basic',
			'type'        => 'checkbox',
			'label'       => __( "Block user registration when login name equals display name", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
		],
        [
            'id'          => 'disable_http_methods',
            'menu_id'     => 'hardening',
            'group_id'    => 'hardening_extended',
            'type'        => 'checkbox',
            'label'       => __( "Disable HTTP methods", 'really-simple-ssl' ),
            'disabled'    => false,
            'default'     => false,
        ],
        [
            'id'          => 'rename_db_prefix',
            'menu_id'     => 'hardening',
            'group_id'    => 'hardening_extended',
            'type'        => 'checkbox',
            'label'       => __( "Rename your database prefix", 'really-simple-ssl' ),
            'disabled'    => false,
            'default'     => false,
        ],
        [
			'id'          => 'change_debug_log_location',
			'group_id'    => 'hardening_extended',
			'menu_id'     => 'hardening',
			'type'        => 'checkbox',
			'label'       => __( "Change debug.log location", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
			'new_features_block' => [
				'active' => __("Debug log not publicly accessible", 'really-simple-ssl'),
				'inactive' => __("Debugging enabled", 'really-simple-ssl'),
				'readmore' => '#',
			],
        ],
	    [
            'id'          => 'disable_application_passwords',
            'menu_id'     => 'hardening',
            'group_id'    => 'hardening_extended',
            'type'        => 'checkbox',
            'label'       => __( "Disable application passwords", 'really-simple-ssl' ),
            'disabled'    => false,
            'default'     => false,
        ],
		[
			'id'          => 'xmlrpc_status',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_xml',
			'type'        => 'hidden',
			'label'       => '',
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'xmlrpc_allow_list',
			'control_field' => 'xmlrpc_status',
			'menu_id'     => 'hardening',
			'group_id'    => 'hardening_xml',
			'type'        => 'learningmode',
			'label'       => __( "XMLRPC", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
			'data_source' => ['RSSSL', 'placeholder', 'xml_data'],
			'data_endpoint' => "rsssl_xml_update_allowlist",
			'react_conditions' => [
				'relation' => 'AND',
				[
					'disable_xmlrpc' => false,
				]
			],
			'columns'     => [
				[
					'name' => __('Method', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'method',
				],
				[
					'name' => __('Login status', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'login_statusControl',
				],
				[
					'name' => __('Count', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'count',
				],
				[
					'name' => __('Allow/revoke', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'statusControl',
				],
				[
					'name' => __('Delete', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'deleteControl',
				],
			],
		],
		[
			'id'          => 'x_xss_protection',
			'menu_id'     => 'recommended_security_headers',
			'group_id'    => 'recommended_security_headers',
			'type'        => 'checkbox',
			'label'       => __("X XSS protection", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'x_content_type_options',
			'menu_id'     => 'recommended_security_headers',
			'group_id'    => 'recommended_security_headers',
			'type'        => 'checkbox',
			'label'       => __("X-Content-Type options", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'x_frame_options',
			'menu_id'     => 'recommended_security_headers',
			'group_id'    => 'recommended_security_headers',
			'type'        => 'select',
			'options'     => [
				'disabled' => __("Off","really-simple-ssl"),
				'DENY' => 'DENY',
				'SAMEORIGIN' => 'SAMEORIGIN',
			],
			'label'       => __("X-Frame options", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'referrer_policy',
			'menu_id'     => 'recommended_security_headers',
			'group_id'    => 'recommended_security_headers',
			'type'        => 'select',
			'options'     => [
				'disabled' => __("Off","really-simple-ssl"),
				'strict-origin-when-cross-origin' => 'strict-origin-when-cross-origin',
				'no-referrer' => 'no-referrer',
				'origin' => 'origin',
				'no-referrer-when-downgrade' => 'no-referrer-when-downgrade',
				'unsafe-url' => 'unsafe-url',
				'origin-when-cross-origin' => 'origin-when-cross-origin',
				'strict-origin' => 'strict-origin',
				'same-origin' => 'same-origin',
			],
			'label'       => __("Referrer Policy", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => 'strict-origin-when-cross-origin',
		],
		[
			'id'          => 'hsts',
			'menu_id'     => 'hsts',
			'group_id'    => 'hsts',
			'type'        => 'checkbox',
			'label'       => __("HSTS", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'hsts_subdomains',
			'menu_id'     => 'hsts',
			'group_id'    => 'hsts',
			'type'        => 'checkbox',
			'label'       => __("Include subdomains", "really-simple-ssl-pro"),
			'react_conditions' => [
				'relation' => 'AND',
				[
					'hsts' => 1,
				]
			],
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'hsts_max_age',
			'menu_id'     => 'hsts',
			'group_id'    => 'hsts',
			'type'        => 'select',
			'options'     => [
				'86400' => __('One day (for testing only)', 'really-simple-ssl'),
				'31536000' => __('One year', 'really-simple-ssl'),
				'63072000' => __('Two years (required for preload)', 'really-simple-ssl'),
			],
			'label'       => __("Choose the max-age for HSTS", "really-simple-ssl-pro"),
			'react_conditions' => [
				'relation' => 'AND',
				[
					'hsts' => 1,
				]
			],
			'disabled'    => false,
			'default'     => '63072000',
		],
		[
			'id'          => 'hsts_preload',
			'menu_id'     => 'hsts',
			'group_id'    => 'hsts',
			'type'        => 'checkbox',
			'label'       => __("Include preload", "really-simple-ssl-pro"),
			'react_conditions' => [
				'relation' => 'AND',
				[
					'hsts_max_age' => '63072000',
					'hsts_subdomains' => 1,
				]
			],
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'cross_origin_opener_policy',
			'menu_id'     => 'cross_origin_policy',
			'group_id'    => 'cross_origin_policy',
			'type'        => 'select',
			'options'     => [
				'disabled' => __('Off', 'really-simple-ssl'),
				'unsafe-none' => 'unsafe-none',
				'same-origin-allow-popups' => 'same-origin-allow-popups',
				'same-origin' => 'same-origin',
			],
			'label'       => __("Cross Origin Opener Policy", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => 'disabled',
		],
		[
			'id'          => 'cross_origin_resource_policy',
			'menu_id'     => 'cross_origin_policy',
			'group_id'    => 'cross_origin_policy',
			'type'        => 'select',
			'options'     => [
				'disabled' => __('Off', 'really-simple-ssl'),
				'same-site' => 'same-site',
				'same-origin' => 'same-origin',
				'cross-origin' => 'cross-origin',
			],
			'label'       => __("Cross Origin Resource Policy", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => 'disabled',
		],
		[
			'id'          => 'cross_origin_embedder_policy',
			'menu_id'     => 'cross_origin_policy',
			'group_id'    => 'cross_origin_policy',
			'type'        => 'select',
			'options'     => [
				'disabled' => __('Off', 'really-simple-ssl'),
				'require-corp' => 'require-corp',
				'same-origin' => 'same-origin',
			],
			'label'       => __("Cross Origin Embedder Policy", "really-simple-ssl-pro"),
			'disabled'    => false,
			'default'     => 'disabled',
		],
		[
			'id'          => 'mixedcontentscan',
			'menu_id'     => 'mixed_content_scan',
			'group_id'    => 'mixedcontentscan',
			'type'        => 'mixedcontentscan',
			'label'       => __("Mixed content scan", "really-simple-ssl-pro"),
			'data_source' => ['RSSSL', 'placeholder', 'mixed_content_data'],
			'columns'     => [
				[
					'name' => __('Type', 'really-simple-ssl'),
					'sortable' => true,
					'column' =>'warningControl',
					'grow' => 0,
				],
				[
					'name' => __('Description', 'really-simple-ssl'),
					'sortable' => true,
					'column' =>'description',
					'grow' => 10,
				],
				[
					'name' => __('Location', 'really-simple-ssl'),
					'sortable' => true,
					'column' =>'locationControl',
					'grow' => 4,
				],

				[
					'name' => __('Details', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'detailsControl',
					'grow' => 0,
				],
				[
					'name' => __('Fix', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'fixControl',
					'grow' => 0,
					'right' => true,
				],
			],
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'permissions_policy',
			'menu_id'     => 'permissions_policy',
			'group_id'    => 'permissions_policy',
			'type'        => 'permissionspolicy',
			'options'     => ['*' => __("Allow", "really-simple-ssl"), '()' => __("Deny", "really-simple-ssl"), 'self' => __("Own domain only", "really-simple-ssl")],
			'label'       => __( "Permissions Policy", 'really-simple-ssl' ),
			'disabled'    => false,
			'columns'     => [
				[
					'name' => __('Feature', 'really-simple-ssl'),
					'sortable' => true,
					'column' =>'title',
				],
				[
					'name' => __('Options', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'valueControl',
				],
				[
					'name' => __('Allow/Deny', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'statusControl',
				],
			],
			'default' => [
				[
					'id'=> 'accelerometer',
					'title'=> 'Accelerometer',
					'value'=> 'self',
					'status'=> true,
				],
				[
					'id'=> 'autoplay',
					'title'=> 'Autoplay',
					'value'=> 'self',
					'status'=> false,
				],
				[
					'id'=> 'camera',
					'title'=> 'Camera',
					'value'=> 'self',
					'status'=> false,
				],
				[
					'id'=> 'encrypted-media',
					'title'=> 'Encrypted Media',
					'value'=> 'self',
					'status'=> false,
				],
				[
					'id'=> 'fullscreen',
					'title'=> 'Fullscreen',
					'value'=> 'self',
					'status'=> false,
				],
				[
					'id'=> 'geolocation',
					'title'=> 'Geolocation',
					'value'=> '*',
					'status'=> false,
				],
				[
					'id'=> 'microphone',
					'title'=> 'Microphone',
					'value'=> 'self',
					'status'=> false,
				],
				[
					'id'=> 'midi',
					'title'=> 'Midi',
					'value'=> 'self',
					'status'=> false,
				],
				[
					'id'=> 'payment',
					'title'=> 'Payment',
					'value'=> 'self',
					'status'=> false,
				],
				[
					'id'=> 'display-capture',
					'title'=> 'Display Capture',
					'value'=> 'self',
					'status'=> false,
				],
			],
		],
		[
			'id'          => 'enable_permissions_policy',
			'menu_id'     => 'permissions_policy',
			'group_id'    => 'permissions_policy',
			'type'        => 'hidden',
			'label'       => __( "Enable Permissions Policy", 'really-simple-ssl' ),
			'disabled'    => false,
			'default'     => false,
		],
        [
            'id'          => 'upgrade_insecure_requests',
            'menu_id'     => 'content_security_policy',
            'group_id'    => 'upgrade_insecure_requests',
            'type'        => 'checkbox',
            'label'       => __( "Encrypted and authenticated response", 'really-simple-ssl' ),
            'disabled'    => false,
            'default'     => false,
        ],
		[
			'id'          => 'csp_frame_ancestors',
			'menu_id'     => 'content_security_policy',
			'group_id'    => 'frame_ancestors',
			'type'        => 'select',
			'options'     => [
				'disabled' => __("Disabled","really-simple-ssl"),
				'none' => "None",
				'self' => "Self",
			],
			'label'       => __("Frame Ancestors", "really-simple-ssl"),
			'disabled'    => false,
			'default'     => 'self',
		],
		[
			'id'          => 'csp_frame_ancestors_urls',
			'menu_id'     => 'content_security_policy',
			'group_id'    => 'frame_ancestors',
			'type'        => 'textarea',
			'label'       => __("Add domains comma separated if needed", "really-simple-ssl"),
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'csp_status',
			'menu_id'     => 'content_security_policy',
			'group_id'    => 'content_security_policy',
			'type'        => 'hidden',
			'label'       => '',
			'disabled'    => false,
			'default'     => false,
		],
		[
			'id'          => 'content_security_policy',
			'control_field' => 'csp_status',
			'menu_id'     => 'content_security_policy',
			'group_id'    => 'content_security_policy',
			'type'        => 'learningmode',
			'label'       => "Content Security Policy",
			'disabled'    => false,
			'default'     => false,
			'data_source' => ['RSSSL', 'placeholder', 'csp_data'],
			'data_endpoint' => ["RSSSL_PRO", "rsssl_csp_backend", "update"],
			'columns'     => [
				[
					'name' => __('Location', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'documenturi',
				],
				[
					'name' => __('Directive', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'violateddirective',
				],
				[
					'name' => __('Source', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'blockeduri',
				],
				[
					'name' => __('Allow/revoke', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'statusControl',
				],
				[
					'name' => __('Delete', 'really-simple-ssl'),
					'sortable' => false,
					'column' =>'deleteControl',
				],
			],
		],
	];

	$fields = apply_filters('rsssl_fields', $fields);
	foreach ( $fields as $key => $field ) {
		$field = wp_parse_args($field, ['default'=>'', 'id'=>false, 'visible'=> true, 'disabled'=>false, 'new_features_block' => false ]);
		//handle server side conditions
		if (isset($field['server_conditions'])) {
			if ( !rsssl_conditions_apply($field['server_conditions']) ){
				unset($fields[$key]);
				continue;
			}
		}
        if ($load_values) {
            $value = rsssl_sanitize_field( rsssl_get_option($field['id'], $field['default'] ), $field['type'], $field['id']);
            $field['value'] = apply_filters('rsssl_field_value_'.$field['id'], $value, $field );
	        $fields[$key] = apply_filters( 'rsssl_field', $field, $field['id'] );
        }
    }

    $fields = apply_filters('rsssl_fields_values', $fields);
    return array_values($fields);
}

function rsssl_blocks(){
	$blocks = [
		[
			'id'      => 'progress',
			'title'   => __( "Progress", 'really-simple-ssl' ),
			'help'    => __( 'A help text', 'really-simple-ssl' ),
			'controls' => [
				'type' => 'react', 'data' => 'ProgressHeader'
			],
			'content' => ['type'=>'react', 'data' => 'ProgressBlock'],
			'footer'  => ['type'=>'react', 'data' => 'ProgressFooter'],
			'class'    => ' rsssl-column-2',
		],
		[
			'id'      => 'ssllabs',
			'controls' => [
				'type' => 'html', 'data' => __( "Powered by Qualys SSL Labs", 'really-simple-ssl' ),
			],
			'title'   => __( "SSL Labs", 'really-simple-ssl' ),
			'help'    => __( 'A help text', 'really-simple-ssl' ),
			'content' => [ 'type' => 'react', 'data' => 'SslLabs' ],
			'footer'  => ['type'=>'react', 'data' => 'SslLabsFooter'],
			'class'    => '',
		],
		[
			'id'      => 'new-features-block',
			'controls'  => false,
			'title'   => __( "New: Hardening", 'really-simple-ssl' ),
			'help'    => __( 'A help text', 'really-simple-ssl' ),
			'content' => ['type'=>'react', 'data' => 'SecurityFeaturesBlock'],
			'footer' => ['type'=>'react', 'data' => 'SecurityFeaturesFooter'],
			'class'    => '',
		],
		[
			'id'      => 'tips_tricks',
			'controls'  => false,
			'title'   => __( "Tips & Tricks", 'really-simple-ssl' ),
			'help'    => __( 'A help text', 'really-simple-ssl' ),
			'content' => ['type'=>'template', 'data' => 'tips-tricks.php'],
			'footer'  => ['type'=>'template', 'data' => 'tips-tricks-footer.php'],
			'class'    => ' rsssl-column-2',
		],
		[
			'id'      => 'other-plugins',
			'controls'  => ['type' => 'html', 'data' => '<a class="rsp-logo" href="https://really-simple-plugins.com/"><img src="'.rsssl_url.'assets/img/really-simple-plugins.svg" alt="Really Simple Plugins" /></a>'],
			'title'   => __( "Other Plugins", 'really-simple-ssl' ),
			'help'    => __( 'A help text', 'really-simple-ssl' ),
			'content' => ['type'=>'template', 'data' => 'other-plugins.php'],
			'footer'  => ['type'=>'html', 'data' => ''],
			'class'    => ' rsssl-column-2 no-border no-background',
		],
	];

	$blocks = apply_filters('rsssl_blocks', $blocks);
	foreach ($blocks as $index => $block ) {
		if ( $block['content']['type'] === 'template' ) {
			$template = $block['content']['data'];
			$blocks[$index]['content']['type'] = 'html';
			$blocks[$index]['content']['data'] = rsssl_get_template($template);
		}
		if ( $block['footer']['type'] === 'template' ) {
			$template = $block['footer']['data'];
			$blocks[$index]['footer']['type'] = 'html';
			$blocks[$index]['footer']['data'] = rsssl_get_template($template);
		}
	}

	return $blocks;
}
/**
 * Render html based on template
 *
 * @param string $template
 *
 * @return string
 */

function rsssl_get_template($template) {
    if ( !rsssl_user_can_manage() ) {
        return '';
    }
    $html='';
    $file = trailingslashit(rsssl_path) . 'settings/templates/' .$template;
    if ( file_exists($file)  ) {
        ob_start();
        require $file;
        $html = ob_get_clean();
    }

    return $html;
}


