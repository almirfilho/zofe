$(document).ready( function(){

  // funcao para menu responsivo
  $('#mobile-menu-btn').toggle( function( event ){
    event.preventDefault();
    $('#mobile-menu').fadeIn();
  }, function( event ){
    event.preventDefault();
    $('#mobile-menu').fadeOut();
  });

});
