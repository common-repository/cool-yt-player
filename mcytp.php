<?php
/*
* Plugin Name: Cool  YT Player
* Plugin URI: https://manca.com.ar/coolytplayer
* Description: Cool YT player
* Author: MANCA
* Autho URI: https://www.manca.com
* Version: 1.0
* Requires at least: 5.3.2
* Tested up to: 5.3.2
*/

define( 'CYTP_VERSION', '1.0' );

define( 'CYTP_REQUIRED_WP_VERSION', '5.3.2' );

define( 'CYTP_PLUGIN', __FILE__ );

define( 'CYTP_PLUGIN_BASENAME', plugin_basename( CYTP_PLUGIN ) );

define( 'CYTP_PLUGIN_NAME', trim( dirname( CYTP_PLUGIN_BASENAME ), '/' ) );

define( 'CYTP_PLUGIN_DIR', untrailingslashit( dirname( CYTP_PLUGIN ) ) );

define( 'CYTP_PLUGIN_URL', plugins_url() . '/' . CYTP_PLUGIN_NAME );

require_once CYTP_PLUGIN_DIR . '/settings.php';
?>
