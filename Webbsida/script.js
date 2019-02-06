/* Hamburgarmeny */
const nav = document.querySelector('nav');
const menyknapp = document.querySelector('.hamburger');
const menylinks = document.querySelectorAll('.menu-under a');

menyknapp.addEventListener('click', toggleMenu);
menylinks.forEach(link => link.addEventListener('click', toggleMenu));

function toggleMenu() {
    nav.classList.toggle('show-nav');
    menyknapp.innerHTML = (menyknapp.innerHTML == '☰') ? '&#10761;' : '&#9776';
}
/* Hamburgarmeny end */

// Scrolla tillbaka när man går till en "hash anchor" så att header inte döljer rubriken.
window.addEventListener('hashchange', scrollUp);
window.addEventListener('load', scrollUp);
function scrollUp() { scrollBy(0, -100); }

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

// återställ switcharnas höjd vid storleksändring av fönster
let resizeEnd;
window.addEventListener('resize', () => {
    switchers.forEach(switcher => switcher.style.height = '100%');
    clearTimeout(resizeEnd);
    resizeEnd = setTimeout(resetHeight, 250);
    function resetHeight() {
        switchers.forEach(switcher => switcher.removeAttribute('style'));
    }
});
/* Bildbytare end */