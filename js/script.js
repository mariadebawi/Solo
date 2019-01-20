/*================================
    | | | Preloader | | |
==================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*================================
    | | | Team owl-carousel | | |
==================================*/
$(document).ready(function(){
    $('#team-members').owlCarousel({
        items:2 ,
        loop : true ,
        autoplay:true ,
        SmartSpeed : 700 ,
        autoplayHoverPause: true,
        nav: true, /* <> */
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
  });
});

/*================================
    | | | Progress Bars | | |
==================================*/
$(function(){
    $("#progress-elements").waypoint(function(){
       // alert("hiiiii") ;
       $(".progress-bar").each(function(){
        $(this).animate({
          width: $(this).attr("aria-valuenow") + "%"
       } ,1000) ;
      });
        this.destroy() ;
    } , {
        offset : "bottom-in-view"
    });
   
});