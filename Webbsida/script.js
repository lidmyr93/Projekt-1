/* Hamburgarmeny */
const nav = document.querySelector('nav');
const menyknapp = document.querySelector('.hamburger');
const menylinks = document.querySelectorAll('.menu-under a');

menyknapp.addEventListener('click', toggleMenu);
nav.addEventListener('transitionend',() => { if (nav.classList.contains('show-nav')) nav.style.overflowY = 'auto' }); // Lägger till scroll på menyn om det behövs
menyknapp.addEventListener('click',() => nav.style.removeProperty('overflow-y')); // Tar bort scroll vid klick på burgare
menylinks.forEach(link => link.addEventListener('click', toggleMenu));

function toggleMenu() {
    nav.classList.toggle('show-nav');
    menyknapp.innerHTML = (menyknapp.innerHTML == '☰') ? '&#10761;' : '&#9776';
}
/* Hamburgarmeny end */

/* Scrolla tillbaka när man går till en "hash anchor" så att header inte döljer rubriken. */
window.addEventListener('load', scrollUp);
window.addEventListener('DOMContentLoaded', scrollUp);
menylinks.forEach(link => link.addEventListener('mouseup', () => setTimeout(scrollUp, 1)));
const header = document.querySelector('header');
// Funktionen kontrollerar headers höjd, och sektionens startposition och scrollar sedan tillbaka sidan så att header inte döljer sektionen
function scrollUp() { 
    const scrollBack = header.offsetHeight;   
    const id = (window.location.hash) ? document.querySelector(window.location.hash) : document.querySelector('main :first-child');
    const idPos = id.getBoundingClientRect().top;
    scrollBy(0, idPos-scrollBack);
}
/* Scrollback end */

/* Bildbytare */
const switchers = document.querySelectorAll('.switcher');
switchers.forEach(switcher => {
    const switcherLeft = switcher.children[0];
    const switcherRight = switcher.children[2];
    switcherLeft.addEventListener('click', switchImage);
    switcherRight.addEventListener('click', switchImage);
    switcher.addEventListener('mouseover', showArrows);
    switcher.addEventListener('mouseout', showArrows);
});

function switchImage() {
    const switcher = this.parentElement.children[1];
    // imgs hänvisar till switcherns bilder och vänder på ordningen i förhållande till höger/vänster-klick
    const imgs = (this.classList.contains('switcher-right')) ? switcher.children : [...switcher.children].reverse();
    // itererar genom switcherns bilder och sätter nästa bild som aktiv
    let nextImg = false;
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].classList.contains('switcher-active')) {
            imgs[i].classList.toggle('switcher-active');
            if (!imgs[i + 1]) i = -1; // om vi nåt slutet av bilderna, gå tillbaka till första.
            nextImg = !nextImg;
        }
        else if (nextImg) {
            imgs[i].classList.toggle('switcher-active');
            nextImg = !nextImg;
        }
    }
}

function showArrows() {
    this.children[0].classList.toggle('switcher-active-left');
    this.children[2].classList.toggle('switcher-active-right');
}
/* Bildbytare end */