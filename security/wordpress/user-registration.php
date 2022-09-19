<?php
defined( 'ABSPATH' ) or die( "you do not have access to this page!" );

/**
 * Action to disable user registration
 *
 * @return bool
 */
function rsssl_users_can_register($value, $option) {
	return false;
}
add_filter( "option_users_can_register", 'rsssl_users_can_register', 999, 2 );