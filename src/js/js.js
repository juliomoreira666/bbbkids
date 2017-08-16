//$(document).ready(function() {
//$('.submenu-roupas').hide();
//$('.submenu-calcados').hide();
//$('.submenu-enxoval').hide();    
//$('.submenu-quarto-banho').hide();
//$('.submenu-passeio').hide();

//$(".btn-calcados, .submenu-calcados").mouseenter(function() {
//  $('.submenu-calcados').show();
//}) 
//$(".btn-calcados, .submenu-calcados").mouseleave(function() {
//  $('.submenu-calcados').hide();
//});

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
     
      $("#owl-demo").owlCarousel({
          pagination: false,
          navigation : true,
          autoplay : true,
          autoplayTimeout : 5000,
          autoplayHoverPause : false,
          slideSpeed : 300,
          paginationSpeed : 400,
          items : 1, 
          itemsDesktop : false,
          itemsDesktopSmall : false,
          navigationText: [
    '<button class="fa fa-chevron-left"></button>',
    '<button class="fa fa-chevron-right"></button>'
  ],
          itemsTablet: false,
          itemsMobile : false
     
      });
     
   $('.owl-carousel-2').owlCarousel({
  loop: true,
  margin: 10,
  navigation : true,
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
    loop:true,
    navigation : true,
  navigationText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:5
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
})

$('.owl-carousel-4').owlCarousel({
    loop:true,
    navigation : true,
  navigationText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
   $( "#cage" ).click(function() {
$('img').attr('src', 'http://www.placecage.com/gif/200/300');
}); 

    });








