<?php
defined('ABSPATH') or die();

/**
 * @param $fields
 *
 * @return mixed
 */
function rsssl_remove_fields($fields){
	if ( !rsssl_uses_htaccess() ){
		$index = array_search('redirect', array_column($fields, 'id') );
		unset($fields[$index]['options']['htaccess']);
	}
	if ( is_multisite() && !rsssl_is_networkwide_active() ){
		$index = array_search('redirect', array_column($fields, 'id') );
		unset($fields[$index]['options']['htaccess']);
	}
	return $fields;
}
add_filter('rsssl_fields', 'rsssl_remove_fields', 10, 1);


