/* abre e fecha o menu quando clicar no ícone hamburguer e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, escondê-lo */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudança do header ao scrollar */
function changeHeaderWhencroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS CAROUSEL / SLIDER SWIPER */
const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* SCROLLREVEAL: MOSTRAR ELEMENTOS AO DAR SCROLL NA PÁGINA */
const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* BOTÃO DE RETORNAR AO TOPO DA PÁGINA */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
}

/* QUANDO SCROLL */
window.addEventListener('scroll', function () {
  changeHeaderWhencroll()
  backToTop ()
})