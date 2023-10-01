const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal');
const menuPrincipal = document.querySelector('.menuPrincipal');
const todosMenusPrincipais = [...document.querySelectorAll('.btn_menuItem')];
const btn_profile = document.querySelector('#btn_profile');

btn_menuPrincipal.addEventListener('click', (event) => {
    menuPrincipal.classList.toggle('ocultar');
});

todosMenusPrincipais.forEach(element => {
    element.addEventListener('click', (event) => {
        menuPrincipal.classList.add('ocultar');
    });
})