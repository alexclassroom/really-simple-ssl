<?php
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class to send an e-mail
 */

if ( !class_exists('rsssl_mailer') ) {
	class rsssl_mailer {

		public $to;
		public $headers;
		public $message;
		public $subject;
		public $warning_blocks;

		public function __construct() {

		}

		/**
		 * Send an e-mail with the correct login URL
		 * @return bool
		 */
		public function send_mail() {

			if (empty($this->to) || empty($this->message) || empty($this->subject) ) {
				return false;
			}

			if ( !is_email($this->to) ){
				return false;
			}

			// Prevent spam
			if ( get_transient('rsssl_email_recently_sent') ) {
				return false;
			}

			$template = '<div>{message}</div><div>{warnings}</div>';

			$block_html = '';
			if (count($this->warning_blocks)>0) {
				$block_template = '<div>{message}</div><div>{url}</div>';
				foreach ($this->warning_blocks as $warning_block){
					$block_html .= str_replace(
						['{message}','{url}'],
						[ wp_kses_post($warning_block['mail']), esc_url_raw($warning_block['url']) ],
						$block_template);
				}
			}

			$body = str_replace(
				['{message}','{warnings}'],
				[ wp_kses_post($this->message), $block_html ],
				$template);

			$success = wp_mail( $this->to, sanitize_text_field($this->subject), $body, array('Content-Type: text/html; charset=UTF-8') );
			set_transient('rsssl_email_recently_sent', true, 15 * MINUTE_IN_SECONDS );
			return $success;
		}

	}
}