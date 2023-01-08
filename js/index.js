import App from "./app.js"

const d = document;

d.addEventListener(`DOMContentLoaded`, (e)=> {
    App("button",".linea", ".bob");
})

//Image Efects

if (ScrollReveal().noop) {
    console.log('ScrollReveal is non-operational!');
}



let slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 800,
    reset: true,
    duration: 1000
};

let slideDown = {
    distance: '150%',
    origin: 'top',
    opacity: 0,
    delay: 1000,
    reset: true,
    duration: 1000
};

let slideLeft = {
    distance: '100%',
    origin: 'left',
    opacity: 0,
    delay: 800,
    reset: true,
    duration: 3000
  };

ScrollReveal().reveal('.imagen-uno-a', slideUp);
ScrollReveal().reveal('.imagen-uno-b', slideDown);
ScrollReveal().reveal('.imagen-dos-a', slideUp);
ScrollReveal().reveal('.imagen-dos-b', slideDown);
ScrollReveal().reveal('.imagen-tres-a', slideUp);
ScrollReveal().reveal('.imagen-tres-b', slideDown);
ScrollReveal().reveal('.abaut-me-moving', slideLeft);
ScrollReveal().reveal('#contact-me-moving', slideLeft);

ScrollReveal().reveal('.nav');
ScrollReveal().reveal('.nombre', { delay: 500 });
ScrollReveal().reveal('.subtitulo', { delay: 100,  duration: 3000 });
