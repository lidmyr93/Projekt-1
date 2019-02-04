// Hamburgarmeny
const nav = document.querySelector('nav');
const menyknapp = document.querySelector('.hamburger');
const menylinks = document.querySelectorAll('.menu-under a');

menyknapp.addEventListener('click', toggleMenu);
menylinks.forEach(link => link.addEventListener('click', toggleMenu));

function toggleMenu() {
    nav.classList.toggle('show-nav');
    menyknapp.innerHTML = (menyknapp.innerHTML == '☰') ? '&#10761;' : '&#9776';
}

// Scrolla tillbaka när man går till en "hash anchor" så att header inte döljer rubriken.
window.addEventListener('hashchange', scrollUp);
window.addEventListener('load', scrollUp);
function scrollUp() { scrollBy(0, -100); }

// Bildbytare
const switchers = document.querySelectorAll('.switcher');
switchers.forEach(switcher => {
    const switcherLeft = switcher.children[0];
    const switcherRight = switcher.children[2];
    switcherLeft.addEventListener('click', switchImage);
    switcherRight.addEventListener('click', switchImage);
    switcher.addEventListener('mouseover', showArrows);
    switcher.addEventListener('mouseout', showArrows);
});

function switchImage(e) {

}

function showArrows() {
    this.children[0].classList.toggle('switcher-active-left');
    this.children[2].classList.toggle('switcher-active-right');
}