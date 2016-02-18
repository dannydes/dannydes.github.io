(function ( $ ) {
	$( '#contact-form' ).submit(function () {
		$.post( 'myurl', {
			name: $( '#name' ).val(),
			email: $( '#email' ).val(),
			message: $( '#message' ).val()
		});
		return false;
	});
})( jQuery );