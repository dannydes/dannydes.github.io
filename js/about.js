(function ( $ ) {
	
	$( '#about-me' ).hide();

	$( '#about-me-btn' ).show().click(function () {
		$( '#about-me' ).show();
		$( '#about-me-btn' ).hide();
	});
	
})( jQuery );