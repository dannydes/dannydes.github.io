$( document ).ready(function () {
  if ( $( window ).height() < 641 || $( window ).width() < 361 ) {
    $( '.lowerInnerDiv' ).css({
      overflowY: 'auto'
    });
  }
});