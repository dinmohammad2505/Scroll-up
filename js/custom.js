$(document).ready(function(){

   var backToTop = $('.back-to-top');
   var nav = $('nav');
   
   $(window).on('scroll',function(){
var Scrolling = $(this).scrollTop();

if(Scrolling > 500){
   backToTop.slideDown();
}
else{
   backToTop.slideUp();
}


 if(Scrolling > 500){
   nav.addClass('navFix');
 }
 else{
   nav.removeClass('navFix');
 }

 

backToTop.on('click',function(){
   $('html,body').animate({
      scrollTop: 0,
   },2000);
})
   });
});
