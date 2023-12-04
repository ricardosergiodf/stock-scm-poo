const menuItens = document.querySelector('.menuItens');
const btn_menuLateral = document.querySelector('#btn_menuLateral');
const btn_fecharMenuLateral = document.querySelector('#btn_fecharMenuLateral');
const btn_menuItem = document.querySelectorAll('.btn_menuItem');
const estoque_num = document.querySelector('#estoque_num');
const btn_addProduto = document.querySelector('.btn_addProduto');
const tela_central = document.querySelector('.tela_central');
const form_adicionarProduto = document.querySelector('.form_adicionarProduto');
const btn_cancelarAdd = document.querySelector('.btn_cancelarAdd');
const input_addProdutoNome = document.querySelector('.input_addProdutoNome');
const input_addProdutoId = document.querySelector('.input_addProdutoId');
const btn_adicionarProduto = document.querySelector('.btn_adicionarProduto');
const btn_removerProduto = document.querySelector('.btn_removerProduto');
const produto = document.querySelector('.produto');
const produtos = document.querySelector('.produtos');

form_adicionarProduto.addEventListener('submit', function(event) {
    event.preventDefault();
});

// ERRO ABAIXO: ENTENDER O PQ DO ERRO, ARRUMAR E IMPLEMENTAR
// produtos.forEach((produto) => {
//     btn_removerProduto.addEventListener('click', () => {
//         console.log("teste");
//     });
// });

btn_adicionarProduto.addEventListener('click', () => {
    const elementoNomeProduto = document.createElement('p');
    const elementoIdProduto = document.createElement('p');
    const elementoBtn_removerProduto = document.createElement('button');

    elementoNomeProduto.textContent = input_addProdutoNome.value;
    elementoIdProduto.textContent = input_addProdutoId.value;
    elementoBtn_removerProduto.textContent = "Remover";

    const classesBtnRemover = 'btn btn-danger btn_removerProduto'; // cria uma string com o nome das classes
    const classesBtnRemoverArray = classesBtnRemover.split(' '); // cria um array com as classes
    elementoBtn_removerProduto.classList.add(...classesBtnRemoverArray); // adiciona o array de classes no btn passando as classes como argumentos separados usando o operador de propagação ('...')

    produto.appendChild(elementoNomeProduto);
    produto.appendChild(elementoIdProduto);
    produto.appendChild(elementoBtn_removerProduto);
});

btn_addProduto.addEventListener('click', () => {
    form_adicionarProduto.classList.remove('ocultar');
    form_adicionarProduto.style.display = 'flex';
    btn_addProduto.classList.add('ocultar')
});

btn_cancelarAdd.addEventListener('click', () => {
    form_adicionarProduto.style.display = '';
    btn_addProduto.classList.remove('ocultar');
    form_adicionarProduto.classList.add('ocultar');
});

btn_menuItem.forEach(estoque => {
    estoque.addEventListener('click', () => {
        console.log(estoque);
        estoque_num.innerHTML = estoque.textContent;
    });
});

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
