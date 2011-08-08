/*
* jQuery Mobile Framework : "fixHeaderFooter" plugin - on-demand positioning for headers,footers
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/


/*

WHAO STOP THERE THIS FILE IS EMPTIED OUT FOR PROTOTYPING PURPOSES. :)

*/

(function( $, undefined ) {



$.fn.fixHeaderFooter = function( options ) {

	if ( !$.support.scrollTop ) {
		return this;
	}

	return this.each(function() {
		var $this = $( this );

		if ( $this.jqmData( "fullscreen" ) ) {
			$this.addClass( "ui-page-fullscreen" );
		}

	});
};

// single controller for all showing,hiding,toggling
$.mobile.fixedToolbars = (function() {


	// Exposed methods
	return {

		show: function( immediately, page ) {

		},

		hide: function( immediately ) {

		},

		startShowTimer: function() {

		},

		clearShowTimer: function() {
		
		},

		toggle: function( from ) {
	
		},

		setTouchToggleEnabled: function( enabled ) {
		}
	};
})();

// TODO - Deprecated namepace on $. Remove in a later release
$.fixedToolbars = $.mobile.fixedToolbars;

//auto self-init widgets
$( document ).bind( "pagecreate create", function( event ) {
	
	if ( $( ":jqmData(role='header')", event.target ).length ) {
		$( event.target ).addClass("ui-fixed-header");
	}

	if ( $( ":jqmData(role='footer')", event.target ).length ) {
		$( event.target ).addClass("ui-fixed-footer");
	}
});

})( jQuery );
