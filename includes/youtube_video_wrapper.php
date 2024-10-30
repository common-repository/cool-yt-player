<?php
/*****************************************************************************************
*
* MANCA - Cool YT PLayer 1.0 - 02/06/2020 - includes/youtube_video_wrapper.php
* Youtube Video Wrappers
*
*****************************************************************************************/

if ( ! defined( 'ABSPATH' ) ) {
  die( '-1' );
};


/*
Function: cytp_yt_video_wrapper_shortcode
Description: this function shows the YouTube player

$attr:
videoid => YouTube Video ID

TODO: user URL on Video ID
TODO: Use atts parameters
TODO: Set Quality is not working as supposed
*/

function cytp_yt_video_wrapper_shortcode( $atts ){
  $atts = shortcode_atts(
        array(
          'url'                 =>  '',
          'allowfullscreen'     =>  'allowfullscreen',
          'title'               =>  'Youtube Player',
          'videoid'             =>  '',
          'feature'             =>  'oembed',
          'autoplay'            =>  '1',
          'start'               =>  '',
          'end'                 =>  '',
          'wmode'               =>  'opaque',
          'loop'                =>  0,
          'controls'            =>  1,
          'mute'                =>  0,
          'rel'                 =>  0,
          'modestbranding'      =>  1,
          'frameborder'         =>  0,
          'type'                => 'text/html',
          'width'               =>  0,
          'height'              =>  0,
          'showinfo'            =>  0,
          'autohide'            =>  1,
          'fs'                  =>  1,
          'responsive'          => true
        ), $atts, 'coolyt' );


  $id = uniqid( "coolyt" );
  $src = 'http://www.youtube.com/embed/' . $atts[ 'videoid' ];

  $html  = "<div class='coolyt-container'>";
  $html .= "<div id='" . $id . "'  class='yt-player-iframe' data-ytid='" . $atts[ 'videoid' ] . "'></div>";
  $html .= "<div class='coolyt-layer'>";
  $html .= "<div class='coolyt-control coolyt-control-play-pause coolyt-layer'></div>";
  $html .= "<div class='coolyt-controls'>";
  $html .= "<div class='coolyt-progress-bar'><input type='range' value='0'></div>";
  $html .= "<div class='coolyt-control coolyt-control-play-pause'></div>";
  $html .= "<div class='coolyt-control coolyt-control-mute-unmute'></div>";
  $html .= "<div class='coolyt-control coolyt-control-volume'>";
  $html .= "<input type='range' min='1' max='100' value='0'></input>";
  $html .= "</div>";
  /*$html .= "<div class='coolyt-control coolyt-control-settings'>";
  $html .= "<ul>";
  $html .= "<li data='hd1080'>hd1080</li>";
  $html .= "<li data='hd720'>hd720</li>";
  $html .= "<li data='large'>large</li>";
  $html .= "<li data='medium'>medium</li>";
  $html .= "<li data='small'>small</li>";
  $html .= "<li data='tiny'>tiny</li>";
  $html .= "<li data='auto'>auto</li>";
  $html .= "<li data='sarasa'>sarasa</li>";
  $html .= "</ul>";
  $html .= "</div>";*/
  $html .= "<div class='coolyt-control coolyt-control-restart'></div>";
  $html .= "<div class='coolyt-control coolyt-control-fullscreen'></div>";
  $html .= "<div class='coolyt-control coolyt-control-timerdisplay'><span></span></div>";
  $html .= "</div>";
  $html .= "</div>";
  $html .= "</div>";

  return $html;
}
?>
