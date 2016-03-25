(function ( $ ) {
	$( '#contact-form' ).submit(function () {
		$.post( 'http://danieldesira.site88.net/index.php', {
			name: $( '#name' ).val(),
			email: $( '#email' ).val(),
			subject: $( '#subject' ).val(),
			message: $( '#message' ).val(),
			hidden: $( '#hidden' ).val()
		}, function ( data ) {
			if ( data.charAt( 0 ) === '1' ) {
				$( '#success' ).modal( 'show' );
				
				// Clear form.
				$( '#name, #email, #subject, #message' ).val( '' );
			} else {
				$( '#failure' ).modal( 'show' );
			}
		});
		return false;
	});
})( jQuery );
