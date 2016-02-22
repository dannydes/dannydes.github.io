(function ( $ ) {
	$( '#contact-form' ).submit(function () {
		$.post( 'http://contact-dannyde.byethost32.com/index.php', {
			name: $( '#name' ).val(),
			email: $( '#email' ).val(),
			subject: $( '#subject' ).val(),
			message: $( '#message' ).val(),
			hidden: $( '#hidden' ).val()
		}, function ( data ) {
			if ( data === '1' ) {
				$( '#success' ).modal( 'show' );
			} else {
				$( '#failure' ).model( 'show' );
			}
		});
		return false;
	});
})( jQuery );