$(document).ready(function() {
$('.submenu-calcados').hide();
    
    $(".btn-calcados, .submenu-calcados").mouseenter(function() {
        $('.submenu-calcados').show();
    }) 
    $(".btn-calcados, .submenu-calcados").mouseleave(function() {
        $('.submenu-calcados').hide();
    });
    
$('#newsletterButtonOK').val('CADASTRAR');
    
    var text = document.querySelector("#NewsLetter_3e500739_4c49_4c6a_a2be_4a6050e6c6d1 > fieldset:nth-child(2) > p:nth-child(1)");
    
    text.textContent = ("ASSINE NOSSA NEWSLETTER");
    $(text).append("<p>Recebe nossas ofertas exclusivas!</p>");
});
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
      '<a class="seta-left"></a>',
      '<a class="seta-right"></a>'
    ],
    itemsTablet: false,
    itemsMobile: false

  });

  $('.owl-carousel-2').owlCarousel({
    loop: true,
    margin: 10,
    navigation: true,
    navigationText: [
      '<a class="seta-carousel-2-left"></a>',
      '<a class="seta-carousel-2-right"></a>'
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
      '<a class="seta-carousel-3-left"></a>',
      '<a class="seta-carousel-3-right"></a>'
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
      '<a class="seta-prat-home-left"></a>',
      '<a class="seta-prat-home-right"></a>'
    ],
          loop:true,
          autoPlay      : true,
          stopOnHover     : true,
          pagination      : false,
          itemsDesktop    : [1199,4],
          itemsDesktopSmall   : [980,4],
          itemsTablet     : [768,3],
          itemsMobile     : [479,1],
          navigation      : true
      });
        
});