//****************************************************************************************
// MANCA - Cool YT PLayer 1.0 - 24/03/2020 - /js/app.js
//****************************************************************************************

//Function executed when YT-API is loaded
function onYouTubeIframeAPIReady() {
  //Executes when all page is loaded
  jQuery( document ).ready( function() {
    //for each coolyt-container
    jQuery( "div.coolyt-container" ).each( function() {

      //Video Container
      coolyt_container = this;

      //fullscreen parent
      var coolyt_container_parent = jQuery( coolyt_container ).parent();

      jQuery( coolyt_container ).css( 'display', 'none' );

      //Get div IFRAME data
      iframe_id = jQuery( coolyt_container ).find( ".yt-player-iframe" ).attr( 'id' );
      ytid = jQuery( coolyt_container ).find( ".yt-player-iframe" ).attr( 'data-ytid' );

      //Quality List Flag
      var qualityListLoaded = false;

      //Create YT Player
      var player;
      player = new YT.Player( iframe_id, {
          videoId: ytid,
          playerVars: { enablejsapi     : 1,
                        fs              : 0,
                        iv_load_policy  : 3,
                        modestbranding  : 1,
                        rel             : 0,
                        showinfo        : 0,
                        controls          : 0,
                        color             : 'transparent',
                      },
          events: {
            'onReady': onPlayerReady,
          //'onStateChange' : onStateChange
          }
      });

      // Update the value of our progress bar accordingly.
      function updateProgressBar() {
        jQuery( coolyt_container ).find( ".coolyt-progress-bar input" ).val( ( player.getCurrentTime() / player.getDuration()) * 100 );
      }

      // Update current time text display.
      function updateTimerDisplay() {
        jQuery( coolyt_container ).find( ".coolyt-control.coolyt-control-timerdisplay span" ).text( formatTime( player.getCurrentTime() ) + " / " + formatTime( player.getDuration() ) );
      }

      function formatTime( time ) {
        time = Math.round( time );
        var minutes = Math.floor( time / 60 ),
        seconds = time - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ":" + seconds;
      }

      function onPlayerReady( event ) {
        jQuery( coolyt_container ).css( 'display', 'block' );

        updateProgressBar();
        updateTimerDisplay();

        // isMuted
        // TODO: check parameter if should be muted or not
        if( false ) {
          player.mute();
          jQuery( coolyt_container ).attr( 'soundstatus', 'muted' );
        } else {
          player.unMute();
          jQuery( coolyt_container ).attr( 'soundstatus', 'unmuted' );
        }

        // Set volume
        jQuery( coolyt_container ).find( '.coolyt-control.coolyt-control-volume input' ).val( player.getVolume() );


        //AutoPlay
        /*if( player.getPlayerState() == -1 ) {
          event.target.playVideo();
          jQuery( coolyt_container ).attr( 'videostatus', 'playing' );
        }*/
        jQuery( coolyt_container ).attr( 'videostatus', 'paused' );

        // Start interval to update elapsed time display and
        // the elapsed part of the progress bar every second.
        time_update_interval = setInterval( function () {
          updateProgressBar();
          updateTimerDisplay();
        }, 1000 );

		       //player.stopVideo();
      }

      //TODO: Quality
      /*
        function onStateChange( event ) {
          if ( event.data == YT.PlayerState.BUFFERING || event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.CUED || event.data == YT.PlayerState.PAUSED) {
            // Quality Levels
            setQualityList();
            }
        }

        function setQualityList() {
          console.log(" Set Quality List " + player.getAvailableQualityLevels());
          if(!qualityListLoaded) {
            var actualQualityLevel =   player.getPlaybackQuality();
            var availableQualityLeves =   player.getAvailableQualityLevels();
            if ( availableQualityLeves ) {
              jQuery( coolyt_container ).find( '.coolyt-control-settings li' ).each( function() {
                if( availableQualityLeves.includes( jQuery( this ).attr( "data" ) ) ) {
                  if( jQuery( this ).attr( 'data' ) == actualQualityLevel){
                    jQuery( this ).addClass( 'active' );
                  } else {
                    jQuery( this ).removeClass( 'active' );
                  }
                } else {
                  jQuery( this ).remove();
                }
              });
              qualityListLoaded = true;
            }
          }
        }

        jQuery( coolyt_container ).find( '.coolyt-control-settings li' ).each( function() {
          jQuery( this ).on( 'click' , function(){
            jQuery( coolyt_container ).find('.coolyt-control-settings li.active' ).each( function() {
              jQuery( this ).removeClass( 'active' );
            });
            jQuery( this ).addClass( 'active' );
            var newQuality = jQuery( this ).attr( 'data' );
            // TODO: Quality is not working as supposed
            ///*if( player.getPlayerState() == 1 ){
            //  player.pauseVideo();
            //}
            player.setPlaybackQuality( newQuality );
            //if( player.getPlayerState() == 1 ){
            //  player.playVideo();
            //}

          });
        });
        */

        jQuery( coolyt_container ).find( ".coolyt-progress-bar input" ).on( 'mouseup touchend', function (e) {
          // Calculate the new time for the video.
          // new time in seconds = total duration in seconds * ( value of range input / 100 )
          var newTime = player.getDuration() * ( e.target.value / 100 );
          // Skip video to new time.
          player.seekTo( newTime );
        });

        jQuery( coolyt_container ).find( '.coolyt-control.coolyt-control-play-pause' ).each( function() {
          jQuery( this ).on( 'click' , function() {
            switch( player.getPlayerState() ) {
              case YT.PlayerState.ENDED:
                // code block
                break;
              case YT.PlayerState.PLAYING:
                player.pauseVideo();
                jQuery( coolyt_container ).attr( 'videostatus', 'paused' );
                break;
              case YT.PlayerState.PAUSED:
                player.playVideo();
                jQuery( coolyt_container ).attr( 'videostatus', 'playing' );
              break;
              case YT.PlayerState.BUFFERING:
                // code block
              break;
              case YT.PlayerState.CUED:
                player.playVideo();
                jQuery( coolyt_container ).attr( 'videostatus', 'playing' );
              break;
              case -1:
                // NOT INITIATED
              break;
              default:
                // code block
            }
          });
        });

        jQuery( coolyt_container ).find( '.coolyt-control.coolyt-control-mute-unmute' ).each( function() {
          jQuery( this ).on( 'click' , function() {
              if( player.isMuted() ) {
                  player.unMute();
                  jQuery( coolyt_container ).attr( 'soundstatus', 'unmuted' );
              }
              else{
                  player.mute();
                  jQuery(coolyt_container).attr( 'soundstatus', 'muted' );
              }
          });
        });

      jQuery( coolyt_container ).find( '.coolyt-control.coolyt-control-volume input' ).each( function() {
        jQuery( this ).change( function () {
          player.setVolume( jQuery( this ).val() );
        });
      });


      jQuery( coolyt_container ).find( '.coolyt-control.coolyt-control-restart' ).each( function() {
        jQuery( this ).on( 'click' , function() {
            player.stopVideo();
            updateProgressBar();
            updateTimerDisplay();
            player.playVideo();
            jQuery( coolyt_container ).attr( 'videostatus', 'playing' );
        });
      });

      /* View in fullscreen */
      function openFullscreen( elem ) {
        if ( elem.requestFullscreen ) {
          elem.requestFullscreen();
        } else if ( elem.mozRequestFullScreen ) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if ( elem.webkitRequestFullscreen ) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if ( elem.msRequestFullscreen ) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }

      /* Close fullscreen */
      function closeFullscreen( elem ) {
        if ( document.exitFullscreen ) {
          document.exitFullscreen();
        } else if ( document.mozCancelFullScreen ) { /* Firefox */
          document.mozCancelFullScreen();
        } else if ( document.webkitExitFullscreen ) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if ( document.msExitFullscreen ) { /* IE/Edge */
          document.msExitFullscreen();
        }
      }

      //Fullscreen
      jQuery( coolyt_container ).find( '.coolyt-control.coolyt-control-fullscreen' ).each( function() {
        jQuery( this ).on( 'click' , function() {
          if( jQuery( coolyt_container ).hasClass( 'fullscreen' ) ) {
            jQuery( coolyt_container ).removeClass( 'fullscreen' );
            closeFullscreen( coolyt_container );
          }else{
            jQuery( coolyt_container ).addClass( 'fullscreen' );
            openFullscreen( coolyt_container );
          }
        });
      });

    });
  });
};
