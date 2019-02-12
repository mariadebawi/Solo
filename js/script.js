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
$(document).ready(function () {
    $('#team-members').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        SmartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        /* <> */
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
$(function () {
    $("#progress-elements").waypoint(function () {
        // alert("hiiiii") ;
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });

});

/*================================
    | | | Responsive Tabs | | |
==================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide', // The panels will slide up and down
    });
});

/*================================
    | | | Isotop Filters | | |
==================================*/
$(window).on('load', function () {
    //Initialize Isotope
    $('#isotop-container').isotope({});
    //filter items on click button
    $('#isotop-filters').on('click', 'button', function () {
        //alert("you click me") ;
        //get the value name of filter
        var filterValue = $(this).attr('data-filter');
        //alert('you click ' + filterValue) ;
        //filter portfolio 
        $('#isotop-container').isotope({
            filter: filterValue
        });
        //active button
        $('#isotop-filters').find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/*================================
    | | | MAgnific Popup | | |
==================================*/
$(function () {
    /** Initialize  */
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true // displaay all galery 
        },
    });
});