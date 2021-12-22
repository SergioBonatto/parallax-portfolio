// saudação por horário

var now = new Date
var hora = now.getHours()

var oi = window.document.getElementById('text');
var satelite = window.document.getElementById('moon')
var estrela = window.document.getElementById('stars');

if (hora >= 5 && hora < 12){
    oi.innerHTML = 'Bom dia!'
    satelite.src = './Imagens/parallax/sol.png'
    satelite.style.height = '100px'
    satelite.style.marginTop = '100px'
    satelite.style.zIndex = '0'
    document.body.style.background = '#4896D3'
    estrela.style.display = "none";
} else if (hora >= 12 && hora < 18){
    oi.innerHTML = 'Boa tarde!'
    satelite.src = './Imagens/parallax/sol.png'
    satelite.style.height = '100px'
    satelite.style.marginTop = '100px'
    satelite.style.zIndex = '0'
    document.body.style.background = '#4896D3'
    estrela.style.display = "none";
} else {
    oi.innerHTML = 'Boa noite!'
}



/*


$(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }


//movimentação paralax


*/