const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

// btnMenu.addEventListener('click', () => {

//     ligne.classList.toggle('active')
//     nav.classList.toggle('menu-visible')

// })

// if(window.matchMedia('(max-width: 1300px)')) {

//     allItemNav.forEach(item => {
//         item.addEventListener('click', () => {
//             nav.classList.toggle('menu-visible')
//             ligne.classList.toggle('active');
//         })
//     })

// }

// Animation écriture

const txtAnim = document.querySelector(".txt-animation");

let typewriter = new Typewriter(txtAnim, {
  loop: false,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(1800)
  .changeDelay(20)
  .typeString("Moi c'est Mustapha Ait Oumghar")
  .pauseFor(300)
  .typeString("<strong>, <br />Développeur Web</strong> !")
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #f7df1e;"> JavaScript</span> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #61dafb;"> React</span> !')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('<span style="color: #96bd50;"> NodeJS</span> !')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString(
    '<span style="color: #346e9e;"> Py</span><span style="color: #ffdc52;">thon</span> !'
  )
  .pauseFor(1000)
  .deleteChars(9)
  .typeString("<strong style='color: black;'> Full-Stack</strong> !")
  .start();

// Animation Contact

const input_fields = document.querySelectorAll("input");

for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];

  field.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add("animation");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("animation");
    }
  });
}

// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".pres-gauche");
const listePres = document.querySelectorAll(".item-liste");

const tlpres = new TimelineMax();

tlpres
  .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
  .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5")
  .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, "-=0.5");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlpres)
  // .addIndicators()
  .addTo(controller);

// Anim portfolio

const portfolioContainer = document.querySelector(".portfolio");
const titrePortfolio = document.querySelector(".titre-port");
const itemPortfolio = document.querySelectorAll(".panneau");

const tlPortfolio = new TimelineMax();

tlPortfolio
  .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene2 = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlPortfolio)
  // .addIndicators()
  .addTo(controller);

// // Vague 2

// const itemPortfolio2 = document.querySelectorAll(".vague2");

// const tlPortfolio2 = new TimelineMax();

// tlPortfolio2.staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, "-=0.5");

// const scene3 = new ScrollMagic.Scene({
//   triggerElement: itemPortfolio,
//   triggerHook: 0.2,
//   reverse: false,
// })
//   .setTween(tlPortfolio2)
//   // .addIndicators()
//   .addTo(controller);

// // Vague 3

// const itemPortfolio3 = document.querySelectorAll(".vague3");

// const tlPortfolio3 = new TimelineMax();

// tlPortfolio3.staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, "-=0.5");

// const scene4 = new ScrollMagic.Scene({
//   triggerElement: itemPortfolio2,
//   triggerHook: 0.2,
//   reverse: false,
// })
//   .setTween(tlPortfolio3)
//   // .addIndicators()
//   .addTo(controller);

// Animation Panneau
const allBlocs = document.querySelectorAll(".panneau");

allBlocs.forEach((bloc) => {
  bloc.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.classList.add("grow");

    for (let i = 0; i < allBlocs.length; i++) {
      if (allBlocs[i] !== e.target) {
        allBlocs[i].classList.remove("grow");
      }
    }
  });
});
