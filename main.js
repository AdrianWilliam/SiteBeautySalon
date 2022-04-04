const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
// ESTUDAR ESTE TIPO DE 'FOR'
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

// ESTUDAR ESTE TIPO DE 'FOR'
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

//testimonials, caroulsel slider, swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true,
      breakpoints:{
        992:{
          slidesPerView: 2
        
        }
      }
    }
  }
})

//ScrollReveal: Mostrar elementos quando der scroll na pagina
const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #service header, #services .card,
  #testimonials header, testimonials .testimonials,
  #contact .text, contact .links,
  
`,
  { interval: 100 }
)

//back to top
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/*Menu ativo conforme a seção da página*/
const sections = document.querySelectorAll('main section[id]')
window.addEventListener('scroll', function () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
})

/*
ESSE CODIGO SUBSTITUI A CLASSE CONTAINER PELA CLASSE SHOW E QUANDO ABRE E FECHA O MENU, O LAYOUT QUEBRA PORQUE A CLASSE CONTAINER DESAPARECE.
--- codigo errado(quebrado) ---
let open = document.getElementsByClassName('icon-menu')[0];
let close = document.getElementsByClassName('icon-close')[0];
let nav = document.getElementsByTagName('nav')[0];

open.addEventListener('click', function () {
  nav.setAttribute('class', 'show');
});

close.addEventListener('click', function () {
  nav.removeAttribute('class', 'show');
});
*/
