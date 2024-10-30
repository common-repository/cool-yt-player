<?php
/*****************************************************************************************
*
* MANCA - Cool YT PLayer 1.0 - 02/06/2020 - includes/includes.php
* Calling Shortcodes
*
*****************************************************************************************/

if ( ! defined( 'ABSPATH' ) ) {
  die( '-1' );
};

require_once CYTP_PLUGIN_DIR . '/includes/youtube_video_wrapper.php';

add_shortcode( 'coolyt', 'cytp_yt_video_wrapper_shortcode' );

?>
