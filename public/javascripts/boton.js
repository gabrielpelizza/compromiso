const bntMenu = document.querySelector('#menu')
const menuContent = document.querySelector('.menu-content')

bntMenu.addEventListener('click', () => {
    menuContent.classList.toggle('menu-active');
})