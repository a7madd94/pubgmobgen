/*!
*  Fortnite Niche
 * Main.js - Hearth of Application
 * Copyright 2013-2018 CPACodex.com, Inc.
 * Licensed under the MIT license
 */

$( document ).ready( function() {
	$("[name='my-checkbox']").bootstrapSwitch();

    $('[data-toggle="tooltip"]').tooltip();

    setInterval( newActivity, 2000 );

    function newActivity() {

        var flags   = [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var mod_hack = [ '<li><span class="text-green">Mod Hack Enabled</span></li>', '<li><span class="text-disabled">Mod Hack Disabled</span></li>' ];

        var vbucksRand 	 = Math.floor( ( Math.random() * 100000 ) + 10000 );;
        var flag         = flags[ Math.floor( Math.random() * flags.length ) ];
        var user         = users[ Math.floor( Math.random() * users.length ) ];
        var mode         = mod_hack[ Math.floor( Math.random() * mod_hack.length ) ];

        $( '.live-stats' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="live-stats">' +
           '<ul>' +
           		'<li><div class="flag"><img src="img/flags/'+flag+'.png" alt="" /></div><b>'+user+'</b></li>' +
           		'<li><img src="img/rs.png" alt="" /><span class="text-blue">' + vbucksRand + ' BP</span></li>' + '<span class="text-red">' + vbucksRand + ' UC</span></li>'+
                mode +
           '</ul>' +

        '</div>').fadeIn();
    }

    $('#hack-mode').on('switchChange.bootstrapSwitch', function () {

        if( $('#hack-mode').bootstrapSwitch('state') == true ) {

            $( '.mode-text' ).html( 'Mod Hack Enabled' );

            $( '.mode-text' ).addClass( 'text-green' );
            $( '.mode-text' ).removeClass( 'text-disabled' );

        } else {

            $( '.mode-text' ).html( 'Mod Hack Disabled' );

            $( '.mode-text' ).addClass( 'text-disabled' );
            $( '.mode-text' ).removeClass( 'text-green' );

        }

    });

	$( '.platforms li' ).click( function() {

		$( '.platforms li' ).removeClass( "active" );
	    $( this ).addClass("active");

	});		


	/* V-Bucks */
    var $gen_robux = $( '.robux-input' );
        $gen_robux.updown ({

        	step: 10000,
            min: 0,
            max: 99999

        });

    var $change_robux = $gen_robux.data( 'updown');
        $( '.plus-robux' ).click( function( event ) {

            $change_robux.increase( event );
            $change_robux.triggerEvents();

        });
        $( '.minus-robux' ).click( function( event ) {

            $change_robux.decrease( event );
            $change_robux.triggerEvents();

        });

    function goToByScroll( id ) {

        $( 'html, body' ).animate({
            scrollTop: $( "."+id ).offset().top },
           'slow' );

    }
	/* bux */
	var $gen_bux = $( '.bux-input' );
        $gen_bux.updown ({

        	step: 10000,
            min: 0,
            max: 99999

        });
		var $change_bux = $gen_bux.data( 'updown');
        $( '.plus-bux' ).click( function( event ) {

            $change_bux.increase( event );
            $change_bux.triggerEvents();

        });
        $( '.minus-bux' ).click( function( event ) {

            $change_bux.decrease( event );
            $change_bux.triggerEvents();

        });

    function goToByScroll( id ) {

        $( 'html, body' ).animate({
            scrollTop: $( "."+id ).offset().top },
           'slow' );

    }

    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0200 );

        goToByScroll( 'step-3' );

        function frame() {

            if( width == 20 ) $( '.load-textJS' ).html( 'Connecting' );
            if( width == 30 ) $( '.load-textJS' ).html( 'Fetching data' );
            if( width == 40 ) $( '.load-textJS' ).html( 'GET -> Variables' );
            if( width == 50 ) $( '.load-textJS' ).html( 'GET -> <span class="text-blue">V-Bucks</span>' );
            if( width == 60 ) $( '.load-textJS' ).html( 'INSERT -> Hack Generator' );
            if( width == 70 ) $( '.load-textJS' ).html( 'FINISH -> ' + $( '.usernameInput' ).val() );
            if( width == 80 ) $( '.load-textJS' ).html( 'POST => DATA' );

            if ( width >= 100 ) {

                clearInterval( intervalProgress );

                $( '.step-3' ).fadeOut( function () {

                    $( '.step-4' ).fadeIn();
                    goToByScroll( 'step-4' );

                }); 

                $( '.userJS' ).html( $( '.usernameInput' ).val() );
                $( '.platformJS' ).addClass( 'fa-'+$( '.active' ).attr( 'data-name' ) );

                setTimeout( function() { 

                   $( '.box-1' ).fadeIn();

                   $('.robuxJS').countTo({

                        from: 10,
                        to: $( '.robux-input' ).val(),
                        speed: 1000,
                        refreshInterval: 1,
                        onComplete: function ( value) {

                            $( '.box-2' ).fadeIn();

                            $( '.gunbJSthick' ).css('opacity', '1');

                            setTimeout( function () {

                                $( '.step-4' ).fadeOut( function() {

                                    $( '.step-5' ).fadeIn();
                                    goToByScroll( 'step-5' );

                                });

                            }, 2000);
                            
                        }

                  });  

                }, 1000 );             
				setTimeout( function() { 

                   $( '.box-1' ).fadeIn();

                   $('.buxJS').countTo({

                        from: 10,
                        to: $( '.bux-input' ).val(),
                        speed: 1000,
                        refreshInterval: 1,
                        onComplete: function ( value) {

                            $( '.box-2' ).fadeIn();

                            $( '.gunbJSthick' ).css('opacity', '1');

                            setTimeout( function () {

                                $( '.step-4' ).fadeOut( function() {

                                    $( '.step-5' ).fadeIn();
                                    goToByScroll( 'step-5' );

                                });

                            }, 2000);
                            
                        }

                  });  

                }, 1000 );  

            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }   


    /* Buttons Starts Here */

    $( ".btnFirst" ).click( function() {

    	var platformName	= $( '.active' ).attr( 'data-name' );
    	var usernameInput 	= $( '.usernameInput' ).val();

    	if( usernameInput == "" ) {

    		$( '.usernameAlert' ).fadeIn();

    	} else {

    		$( '.step-1' ).fadeOut( function () {

    			$( '.step-2' ).fadeIn();
                goToByScroll( 'step-2' );

    		});

    	}

    });		

    /* Generator Starts Here */

    $( ".btnGenerate" ).click( function() {	

        $( '.step-2' ).fadeOut( function () {

            $( '.step-3' ).fadeIn();

            progressBar();

        });	

    });															
					

});
