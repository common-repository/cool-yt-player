<?php
/*****************************************************************************************
*
* MANCA - Cool YT PLayer 1.0 - 02/06/2020  - settings.php
* Pluggin Settings
*
*****************************************************************************************/

if ( ! defined( 'ABSPATH' ) ) {	die( '-1' ); };

require_once CYTP_PLUGIN_DIR . '/includes/includes.php';

if ( is_admin() ) {
	//require_once CYTP_PLUGIN_DIR . '/admin/admin.php';
} else {
	require_once CYTP_PLUGIN_DIR . '/public/public.php';
}

?>
