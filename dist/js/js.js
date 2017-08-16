//$(document).ready(function() {
//$('.submenu-calcados').hide();
    
  //  $(".btn-calcados, .submenu-calcados").mouseenter(function() {
   //     $('.submenu-calcados').show();
  //  }) 
  //  $(".btn-calcados, .submenu-calcados").mouseleave(function() {
 //       $('.submenu-calcados').hide();
 //   });
//Menu Pagina Categoria

//$('.search-multiple-navigator ul').hide();
//$('.search-multiple-navigator h3').addClass('toggle-click'); 
//$('.search-multiple-navigator h4').addClass('toggle-click');
//$('.search-multiple-navigator h5').addClass('toggle-click');
//$('.toggle-click').on('click',function(e) {
//  e.preventDefault();
  // $('.search-multiple-navigator ul').hide('slow');
  // if ($(this).hasClass('open'))
  // {
  //  $(this).next('ul').slideUp();
  //  $(this).removeClass('open');
  // }
  // else 
  // {
  //  $(this).addClass('open');
  //  $(this).next('ul').slideDown();
  // }
//});
$(document).ready(function() {
  // Filtros categoria e busca
  $(".search-multiple-navigator").css('display','block');
  $(".search-multiple-navigator>fieldset>h5").append('<i class="fa fa-plus"></i>');
  $(".search-multiple-navigator>fieldset>h5").append('');
    $('.search-multiple-navigator>fieldset>div').slideToggle();
      $(".search-multiple-navigator>fieldset>h5>i").click(function() {
         if($(this).hasClass('fa-minus')) 
          {   $(this).removeClass('fa-minus');
             $(this).addClass('fa-plus');  
           } 
           else 
           {
              $(this).removeClass('fa-plus');
              $(this).addClass('fa-minus');
            }  
              $(this).parents('fieldset').find('div').slideToggle();
            }); 
      $(".fa-plus").css("cursor","pointer"); 
      $(".fa-minus").css("cursor","pointer");

//Menu flutuante e hamburger
  $(function(){
  $(".burger-wrapper").click(function(){
    $(".show-nav").toggleClass("active");
  })
})

  //Oculta e esconde menu hamburger
  $(".burger-wrapper").click(function(){
      $(".menuHamburger").toggle( "slow", function() {
  });
});

//Menu flutuante
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#headerFlow').addClass('fixed');
    } else {
        $('#headerFlow').removeClass('fixed');
        $(".menuHamburger").trigger('click');
    }
});
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