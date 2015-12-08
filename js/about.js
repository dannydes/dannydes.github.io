(function ( $ ) {
	
	$( '#about-me' ).hide();

	$( '#about-me-btn' ).click(function () {
		$( '#about-me' ).show();
		$( '#about-me-btn' ).hide();
	});
	
})( jQuery );