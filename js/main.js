const toggleBtn = document.querySelector('.nav_toggle');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');
const title = document.querySelector('.nav_title');
const header = document.querySelector('header');


toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    title.classList.toggle('active');
    header.classList.toggle('active');
});

const showDialog = id => {
    const dialog = document.getElementById(id);
    
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    
    dialog.showModal();
}

const closeDialog = id => {
    const dialog = document.getElementById(id);
    dialog.close();
}
