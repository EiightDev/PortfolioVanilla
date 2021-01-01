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


// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre-pres");
const presTxt = document.querySelector(".pres-txt");
const listePres = document.querySelectorAll(".item-list");

const tlpres = new TimelineMax();

tlpres
  .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
  .from(presTxt, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5")
  .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, "-=0.5");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlpres)
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
  .addTo(controller);

// const skillContainer = document.querySelector(".skill-container");
// const titreSkill = document.querySelector(".titre-skill");
// const itemSkill = document.querySelectorAll(".panneau");

// const tlSkill = new TimelineMax();

// tlSkill
//   .from(titreSkill, { y: -50, opacity: 0, duration: 0.5 })
//   .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, "-=0.5");

// const scene2 = new ScrollMagic.Scene({
//   triggerElement: portfolioContainer,
//   triggerHook: 0.5,
//   reverse: false,
// })
//   .setTween(tlSkill)
//   .addTo(controller);







// Animation Panneau
const allBlocs = document.querySelectorAll(".panneau");

allBlocs.forEach((bloc) => {
  bloc.addEventListener("click", (e) => {
    e.target.classList.add("grow");

    for (let i = 0; i < allBlocs.length; i++) {
      if (allBlocs[i] !== e.target) {
        allBlocs[i].classList.remove("grow");
      }
    }
  });
});
const allRonds = document.querySelectorAll(".rond-exp");
const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach((box) => {
  for (i = 0; i < allRonds.length; i++) {
    if (
      allRonds[i].getAttribute("data-anim") === box.getAttribute("data-anim")
    ) {
      let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 });

      let scene = new ScrollMagic.Scene({
        triggerElement: allRonds[i],
        reverse: true,
      })
        .setTween(tween)
        .addTo(controller);
    }
  }
});






// Animation Contact pour les labels

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