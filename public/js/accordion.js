$(function(){
  $('.js-fotter-menu-item-link').each(function(){
      $(this).on('click',function(){
          $("+.submenu", this).slideToggle();
          return false;
      });
  });
  $(window).on('resize', function() {
    if( 'none' == $('.submenu').css('display') ){
      $('.submenu').attr('style','block');
    };
  });
});
