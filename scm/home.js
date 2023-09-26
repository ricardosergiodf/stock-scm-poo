const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal');
const menuPrincipal = document.querySelector('.menuPrincipal');


btn_menuPrincipal.addEventListener('click', (event) => {
    menuPrincipal.classList.toggle('ocultar');
});