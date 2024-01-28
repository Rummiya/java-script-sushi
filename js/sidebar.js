const shoppingIcon = document.querySelector('.cart-shopping');
const sidebar = document.getElementById('sidebar');
const xmarkIcon = document.getElementById('xmark');
const listIcon = document.querySelector('.fa-list');
const submenu = document.querySelector('.header-submenu');

shoppingIcon.addEventListener('click', () => {
    sidebar.style.right = '0px';
});

xmarkIcon.addEventListener('click', () => {
    sidebar.style.right = '-400px'
}); 

listIcon.addEventListener('click', () => {
    if (submenu.classList.contains('is-active') == true) {
        submenu.classList.remove('is-active');
    } else {
        submenu.classList.add('is-active');
    }
});