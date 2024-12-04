// nav sticky
window.addEventListener('scroll', function(){
    let nav = document.querySelector('nav');
    nav.classList.toggle('active', scrollY > 80);
});
window.addEventListener('scroll', function(){
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', scrollY > 80);
});
// menu toggle
const menuToggle = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function (){
    menu.classList.toggle('slide');
});
