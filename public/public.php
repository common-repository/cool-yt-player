<?php
/*****************************************************************************************
*
* MANCA - Cool YT PLayer 1.0 - 02/06/2020 - public/public.php
* Public Plugin Hooks
*
*****************************************************************************************/

if ( ! defined( 'ABSPATH' ) ) {
  die( '-1' );
};

//Add CSS + JS -> Front End
function mcytp_add_theme_scripts() {
  wp_enqueue_style( 'style-mcsfl-css', CYTP_PLUGIN_URL . '/public/css/mcytp.css' );
  wp_enqueue_script( 'jquery' );
  wp_enqueue_script( 'mcytp-app-js',  CYTP_PLUGIN_URL . '/public/js/app.js', array( 'jquery' ) , null, true );
  wp_enqueue_script( 'yt-api-js', 'https://www.youtube.com/iframe_api', array( 'mcytp-app-js' ) );
};

add_action( 'wp_enqueue_scripts', 'mcytp_add_theme_scripts' );

?>
