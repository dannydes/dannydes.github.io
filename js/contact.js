(function ( $ ) {
	$( '#contact-form' ).submit(function () {
		$.post( 'myurl', {
			name: $( '#name' ).val(),
			email: $( '#email' ).val(),
			message: $( '#message' ).val()
		}, function ( data ) {
			if ( data === '1' ) {
				$( '#success' ).modal( 'show' );
			}
		});
		return false;
	});
})( jQuery );