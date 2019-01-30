// Hamburgarmeny
const nav = document.querySelector('nav');
const menyknapp = document.querySelector('.hamburger');

menyknapp.addEventListener('click', () => {
    nav.classList.toggle('show-nav');          
    menyknapp.innerHTML = (menyknapp.innerHTML == '☰') ? '&#10761;' : '&#9776'; 
});