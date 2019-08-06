$(function(){

   $('.main_header form').find('button').prop("disabled", true);

   $('.search_toggle').click(function(){
      $('.main_header form').toggleClass('active');
      
      if( $('.main_header form').hasClass('active')){
         $('.main_header form').find('button').prop("disabled", false);
      }else{
         $('.main_header form').find('button').prop("disabled", true);
      }
    
   });

$('.fa-bars').click(function(){
   $('body').addClass('aside_open');
});

$('.aside_bg').click(function(){
   $('body').removeClass('aside_open');
});




});

