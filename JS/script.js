// saudação por horário

var now = new Date()
var hora = now.getHours()

var oi = window.document.getElementById('text')
var satelite = window.document.getElementById('moon')
var estrela = window.document.getElementById('stars')

if (hora >= 5 && hora < 15) {
  oi.innerHTML = 'Bom dia!'
  satelite.src = './Imagens/parallax/sol.png'
  satelite.style.height = '100px'
  satelite.style.marginTop = '100px'
  satelite.style.zIndex = '0'
  document.body.style.background = '#2fb3eb'
  //estrela.style.display = "none";
  estrela.src = './Imagens/parallax/nuvens.png'
  estrela.style.height = '90%'
  estrela.style.zIndex = '1'
} else if (hora >= 15 && hora < 21) {
  oi.innerHTML = 'Boa tarde!'
  satelite.src = './Imagens/parallax/sol.png'
  satelite.style.height = '100px'
  satelite.style.marginTop = '100px'
  satelite.style.zIndex = '0'
  document.body.style.background = '#2fb3eb'
  //estrela.style.display = "none";
  estrela.src = './Imagens/parallax/nuvens.png'
  estrela.style.height = '90%'
  estrela.style.zIndex = '1'
} else {
  oi.innerHTML = 'Boa noite!'
  satelite.style.zIndex = '1'
  estrela.style.zIndex = '0'
}

//movimentação paralax

let paralax = () => {
  let stars = document.getElementById('stars')
  let moon = document.getElementById('moon')
  let mountains_behind = document.getElementById('mountains_behind')
  let mountains_between = document.getElementById('mountains_between')
  let mountains_front = document.getElementById('mountains_front')
  let marco = document.getElementById('marco')
  let grama = document.getElementById('grama')
  let text = document.getElementById('text')
  let header = document.querySelector('header')

  window.addEventListener('scroll', () => {
    let value = window.scrollY
    stars.style.left = `${value * 0.25}px`
    stars.style.top = `${-value * 0.25}px`
    moon.style.top = `${value * 1.05}px`
    mountains_behind.style.top = `${value * 0.5}px`
    mountains_between.style.top = `${value * 0.75}px`
    mountains_front.style.top = `${value * 1}px`
    text.style.marginLeft = `${value * 3.5}px`
    text.style.marginTop = `${value * 0.75}px`
    header.style.top = `${value * 0.5}px`
  })
}

paralax()

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// Quando clicar em um item, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// Sombra no Header qdo for dado o scroll na pagina
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

var changeHeaderWhenScroll = () => {
  if (window.scrollY >= navHeight) {
    // O scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // O scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

//Back to top button
const backToTopButton = document.querySelector('.back-to-top')

var backToTop = () => {
  if (scrollY >= 360) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu ativo conforme seção visível na página
const sections = document.querySelectorAll('main section[id]')

var activateMenuAtCurrentSection = () => {
  /* divide a alura da tela em 8, multiplica por 4 e soma com o deslocamento do eixo Y */
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  /* Para cada item na lista de sessões seção */
  for (let section of sections) {
    /* Ele cria uma variável */
    const sectionTop = section.offsetTop /* define o topo da seção */
    const sectionHeight = section.offsetHeight /* define a altura da seção */
    const sectionId =
      section.getAttribute('id') /* seleciona as IDs das seções */

    /* Cria o ponto de controle inicial da função */
    /* que deve ser o checkpoin desde que ele seja maior ou igual ao topo da seção */
    const checkpointStart = checkpoint >= sectionTop
    /* cria o ponto de controle final da função */
    /* que será quando o checkpoint for menor que o tamanho do topo mais a altura da seção, pegando a parte bem de baixo */
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    /* Se o checkpoint estiver entre o checkpoint Start e o checkpointEnd */
    /* ou seja, com a seção visível */
    if (checkpointStart && checkpointEnd) {
      /* seleciona especificamente, na barra de navegação e dentro das listas, o link que tiver como referencia a id da seção visivel */
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')
    }
  }
}

//When scroll
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
