$(document).ready(function() {
$('#newsletterButtonOK').val('CADASTRAR');
    
    var text = document.querySelector(".newsletter p");
    var textPublique = document.querySelector("#lnkPubliqueResenha");
    var textAvaliacoes = document.querySelector("#resenha .user-review h4");

    text.textContent = ("ASSINE A NOSSA NEWSLETTER");
    $(text).append("<p>Receba nossas ofertas exclusivas!</p>");

    textAvaliacoes.textContent = ("AVALIAÇÕES");
    textPublique.textContent = ("FAZER UMA AVALIAÇÃO");
});
