$(document).ready(function() {

var $showCaseOwlPrincipal = $('#owl-demo');
var $showCaseOwlMarcas = $(".owl-carousel-2");
var $showCaseOwlCat = $(".owl-carousel-3");
var $showCaseOwl = $(".prat-home > ul");

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

// Menu flutuante e hamburger
  $(function(){
  $(".burger-wrapper").click(function(){
    $(".show-nav").toggleClass("active");
  })
})

// Oculta e esconde menu hamburger
  $(".burger-wrapper").click(function(){
      $(".menuHamburger").toggle( "slow", function() {
  });
});

// Menu flutuante
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#headerFlow').addClass('fixed');
    } else {
        $('#headerFlow').removeClass('fixed');
        $(".menuHamburger").trigger('click');
    }
});

// Carosel Home principais e prateleira 

    if( $showCaseOwlPrincipal.length ){
      $showCaseOwlPrincipal.find('.helperComplement').remove();
      $showCaseOwlPrincipal.owlCarousel({
          items         : 1,
          autoPlay      : true,
          stopOnHover     : true,
          pagination      : false,
          itemsDesktop    : [1199,1],
          itemsDesktopSmall   : [980,1],
          itemsTablet     : [768,1],
          itemsMobile     : [479,1],
          navigation      : true,
          navigationText    : ['<a class="seta-left"></a>','<a class="seta-right"></a>']
      });
    }

    if( $showCaseOwlMarcas.length ){
      $showCaseOwlMarcas.find('.helperComplement').remove();
      $showCaseOwlMarcas.owlCarousel({
          items         : 6,
          autoPlay      : true,
          stopOnHover     : true,
          pagination      : false,
          itemsDesktop    : [1199,6],
          itemsDesktopSmall   : [980,6],
          itemsTablet     : [768,6],
          itemsMobile     : [479,1],
          navigation      : true,
          navigationText    : ['<a class="seta-carousel-2-left"></a>','<a class="seta-carousel-2-right"></a>']
      });
    }

    if( $showCaseOwlCat.length ){
      $showCaseOwlCat.find('.helperComplement').remove();
      $showCaseOwlCat.owlCarousel({
          items         : 4,
          autoPlay      : true,
          stopOnHover     : true,
          pagination      : false,
          itemsDesktop    : [1199,4],
          itemsDesktopSmall   : [980,4],
          itemsTablet     : [768,3],
          itemsMobile     : [479,1],
          navigation      : true,
          navigationText    : ['<a class="seta-carousel-3-left"></a>','<a class="seta-carousel-3-right"></a>']
      });
    } 

    if( $showCaseOwl.length ){
      $showCaseOwl.find('.helperComplement').remove();
      $showCaseOwl.owlCarousel({
          items         : 4,
          autoPlay      : true,
          stopOnHover     : true,
          pagination      : false,
          itemsDesktop    : [1199,4],
          itemsDesktopSmall   : [980,4],
          itemsTablet     : [768,3],
          itemsMobile     : [479,1],
          navigation      : true,
          navigationText    : [ '<a class="seta-prat-home-left"></a>','<a class="seta-prat-home-right"></a>']
      });
    }    
});



