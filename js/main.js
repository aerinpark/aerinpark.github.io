const toggleBtn = document.querySelector('.nav_toggle');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');
const title = document.querySelector('.nav_title');


toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    title.classList.toggle('active');
});
