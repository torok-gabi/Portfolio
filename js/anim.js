const overlay = document.querySelector(".js-overlay");
var closeMenu = document.querySelector(".close-btn");

document.querySelector(".menu-btn").addEventListener('click', () => {
    overlay.classList.add('show-menu');
});
document.querySelector(".close-btn").addEventListener('click', () => {
    overlay.classList.remove('show-menu');
});