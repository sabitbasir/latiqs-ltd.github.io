/**
 * Created by EZAZ on 11/26/2016.
 */
(function ($) {
    "use strict";

    $(window).load(function(){
        $('#loading').fadeOut(1500);
        $('#into-logo').addClass('animated fadeInDown');

    });
    $(document).ready(function() {



  /* activate jquery isotope */
  $('.portfolio_items').isotope({
    itemSelector : '.item',
    layoutMode:'fitRows'
  });

  

    // filter items on button click
  $('.portfolio_filter li').click(function() {

    $('.portfolio_filter li').removeClass("active");

    $(this).addClass("active");

    var selector=$(this).attr('data-filter');

    $(".portfolio_items").isotope({

        filter:selector,
        animationOptions:{

          duration:750,
          easing:'linear',
          queue:false
        }
    });

    return false;
  

  });

});


/* Scrolling Smoothly
--------------------------------------------------------------------------------*/

    $(document).ready(function(){

      $('a[href*=#]').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return true;
          }
        }



  });

    });

})(jQuery);