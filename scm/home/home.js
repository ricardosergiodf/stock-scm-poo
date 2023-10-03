const menuItens = document.querySelector('.menuItens');
const btn_menuLateral = document.querySelector('#btn_menuLateral');
const btn_fecharMenuLateral = document.querySelector('#btn_fecharMenuLateral');
const btn_menuItem = document.querySelectorAll('.btn_menuItem');
const estoque_num = document.querySelector('#estoque_num');

btn_menuItem.forEach(estoque => {
    estoque.addEventListener('click', () => {
        console.log(estoque);
        estoque_num.innerHTML = estoque.textContent;
    })
})

btn_menuLateral.addEventListener('click', () => {
    btn_menuLateral.classList.add('ocultar');
    btn_fecharMenuLateral.classList.remove('ocultar');
    menuItens.classList.remove('ocultar');
});

btn_fecharMenuLateral.addEventListener('click', () => {
    btn_fecharMenuLateral.classList.add('ocultar');
    btn_menuLateral.classList.remove('ocultar');
    menuItens.classList.add('ocultar');
});
