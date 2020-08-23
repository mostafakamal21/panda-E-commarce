/**
* Template Name: iPortfolio - v1.3.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";
  // menu active
$(document).on('click', 'ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})


// nvabar sckity
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 30) {
    $("#sticky-nav").removeClass("sticky");
   }else{
    $("#sticky-nav").addClass("sticky");
   }
  });


})(jQuery);
