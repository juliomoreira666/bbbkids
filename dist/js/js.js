$(document).ready(function() {

  $("#owl-demo").owlCarousel({
    pagination: false,
    navigation: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    navigationText: [
      '<button class="fa fa-chevron-left"></button>',
      '<button class="fa fa-chevron-right"></button>'
    ],
    itemsTablet: false,
    itemsMobile: false

  });

  $('.owl-carousel-2').owlCarousel({
    loop: true,
    margin: 10,
    navigation: true,
    navigationText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 6
      },
      600: {
        items: 6
      },
      1000: {
        items: 2
      }
    }
  })
  $('.owl-carousel-3').owlCarousel({
    loop: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 5
      },
      600: {
        items: 5
      },
      1000: {
        items: 5
      }
    }
  })

 $(".prat-home > ul").owlCarousel({
          items : 4,
          navigationText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
          lazyLoad : true,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:1000,
          navigation : true,
          slideSpeed: 800,
          pagination: true
      });
});