//$('#image').find('#image-main')
// .each(function() {
//  var src = $(this).attr('src');
//  src = src.replace('-292-292/', '-542-545/');

// $(this).attr({src: src,                   
//     width: '545',
// height: '545'
//});
//});
$(document).ready(function() {
  var $btnComprarProduto = $('.buy-button.buy-button-ref');
  if ($btnComprarProduto.length) {
    if ($('#divFlutuante').length) {
      var $comprarFlutuante = $('#divFlutuante');
      var btnComprarTop = $('#divFlutuante .buy-button-ref').offset().top;
      $(window).scroll(function() {
        if ($(window).width() > 300) {
          if ($(this).scrollTop() >= btnComprarTop && !$comprarFlutuante.is(':visible')) {
            $comprarFlutuante.fadeIn(function() {
              var urlImage = ($('#include #image-main').attr('src') != '') ? $('#include #image-main').attr('src') : '/arquivos/sem-foto.gif';
              $('#divFlutuante #image-main').attr('src', urlImage);
              $('body').css('padding-bottom', $comprarFlutuante.height() + 30);
            });
          } else if ($(this).scrollTop() < btnComprarTop && $comprarFlutuante.is(':visible')) {
            $comprarFlutuante.fadeOut(function() {
              $('body').css('padding-bottom', 0);
            });
          }
        }
      });
    }
    $btnComprarProduto.html('Comprar <i class="fa fa-shopping-cart"></i>');

    //$btnComprarProduto.click( function(){
    //var $this = $(this);
    //var url   = $this.attr('href');
    //if( url.indexOf('qty=1') > 0 ){
    //  $this.attr('href', url.replace('qty=1', 'qty='+ parseInt( $('.buy-button-box .box-qtd .qtd').val() ) ) );
    //}
    //});

    var $recebeQtyForm = $btnComprarProduto.parents('.buy-button-box');
    if ($recebeQtyForm.length) {
      $recebeQtyForm.prepend(
        '<div class="pull-left box-qtd">' +
        ' <input type="text" class="qtd pull-left" value="1" />' +
        ' <div class="bts pull-left">' +
        '   <button class="btn btn-mais">+</button>' +
        '   <button class="btn btn-menos">-</button>' +
        '   </div>' +
        '</div>'
      );
      $(document).on('keypress', '.buy-button-box .box-qtd .qtd', function(e) {
        var tecla = (window.event) ? event.keyCode : e.which;
        if ((tecla > 47 && tecla < 58)) {
          return true;
        } else {
          if (tecla == 8 || tecla == 0) {
            return true;
          } else {
            return false;
          }
        }
      });
      $(document).on('keyup', '.buy-button-box .box-qtd .qtd', function(e) {
        $('.buy-button-box .box-qtd .qtd').val($(this).val());
      });
      $(document).on('blur', '.buy-button-box .box-qtd .qtd', function(e) {
        var $this = $(this);
        if ($this.val() === '' || parseInt($this.val()) < 1) {
          $('.buy-button-box .box-qtd .qtd').val(1);
        } else {
          $('.buy-button-box .box-qtd .qtd').val($this.val());
        }
      });
      $(document).on('click', '.buy-button-box .box-qtd .btn', function() {
        var $this = $(this);
        var $qtd = $('.buy-button-box .box-qtd .qtd');
        var valor = parseInt($qtd.val());
        if ($this.hasClass('btn-mais')) {
          $qtd.val(valor + 1);
        } else if ($this.hasClass('btn-menos')) {
          if (valor > 1) {
            $qtd.val(valor - 1);
          }
        }
      });
    }
  }

  if ($.fn.owlCarousel) {

    var $fullbanner = $(".fullbanner");
    if ($fullbanner.length) {
      $fullbanner.owlCarousel({
        items: 1,
        singleItem: true,
        autoPlay: true,
        stopOnHover: true,
        navigation: true,
        autoHeight: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      });
    }

    var $showCaseOwl = $(".showcase-owl .prateleira > ul");
    if ($showCaseOwl.length) {
      $showCaseOwl.find('.helperComplement').remove();
      $showCaseOwl.owlCarousel({
        items: 4,
        autoPlay: true,
        stopOnHover: true,
        pagination: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [768, 3],
        itemsMobile: [479, 1],
        navigation: true,
        navigationText: ['<a class="seta-prat-home-left"></a>','<a class="seta-prat-home-right"></a>'],
      });
    }
  }
  
  // AlteraÃ§Ãµes de textos
  var tamanho = document.querySelector("ul.topic:nth-child(1) > li:nth-child(1)");
  tamanho.textContent = "Escolha o Tamanho:";
  var cor = document.querySelector("ul.topic:nth-child(2) > li:nth-child(1)");
  cor.textContent = "Escolha a Cor:";

  // Abrir e fechar meios de pagamentos
  $("#paymentHidden").click(function() {
    $(".meioPagamento").toggle("slow", function() {});
  });

  //InserÃ§Ã£o tabela de medidas
  $(tamanho).append('<li data-toggle="modal" data-target="#myModal" id="tableMedidas"><img src="http://i.imgur.com/SrDCFxx.png"/></li>');

  // Div flutuante abrir e fechar
  $('#floatFechar').click(function() {
    $('#divFlutuante').toggleClass('divFlutuanteAberta');
  });
  //Simula abertura da div flutuante
  $('#floatFechar').trigger('click');

  //Menu flutuante e hamburger
  $(function(){
  $(".burger-wrapper").click(function(){
    $(".show-nav").toggleClass("active");
  })
})

//Oculta e esconde menu hamburger
  $(".burger-wrapper").click(function(){
      $( ".menuHamburger" ).toggle( "slow", function() {
  });
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#headerFlow').addClass('fixed');
    } else {
        $('#headerFlow').removeClass('fixed');
        $(".menuHamburger").trigger('click');
    }
});
  
});
