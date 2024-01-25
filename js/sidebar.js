const shoppingIcon = document.querySelector('.cart-shopping');
const trash = document.getElementById('trash');
const xmark = document.getElementById('xmark')

shoppingIcon.addEventListener('click', () => {
    trash.style.right = '0px';
});

xmark.onclick = function() {
    trash.style.right = '-400px'
}