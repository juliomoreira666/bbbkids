$(document).ready(function() {
$('#newsletterButtonOK').val('CADASTRAR');
    
    var text = document.querySelector("#NewsLetter_3e500739_4c49_4c6a_a2be_4a6050e6c6d1 > fieldset:nth-child(2) > p:nth-child(1)");
    var textPublique = document.querySelector("#lnkPubliqueResenha");
    var textAvaliacoes = document.querySelector("#resenha .user-review h4");
    
    text.textContent = ("ASSINE NOSSA NEWSLETTER");
    $(text).append("<p>Recebe nossas ofertas exclusivas!</p>");


      textAvaliacoes.textContent = ("AVALIAÇÕES");
      textPublique.textContent = ("FAZER UMA AVALIAÇÃO");
});