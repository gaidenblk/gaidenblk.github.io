const cadastrarProduto = document.querySelector("#cadastrarProduto");
const selecionaProduto = document.querySelector("#selecionaProduto");
const exibirProduto = document.querySelector("#exibirProduto");
const produtoSelecionado = document.querySelector("#produtoSelecionado");
const objProduto = {};

cadastrarProduto.addEventListener("click", function () {
  const nomeProduto = document.querySelector("#nomeProduto").value;
  const imagemProduto = document.querySelector("#imagemProduto").value;
  const novaOpcao = document.createElement("option");
  novaOpcao.value = nomeProduto;
  novaOpcao.text = nomeProduto;
  if (nomeProduto == "") {
    return;
  }

  selecionaProduto.add(novaOpcao);
  objProduto[nomeProduto] = imagemProduto;
});

exibirProduto.addEventListener("click", function () {
  if (selecionaProduto.value == "Selecione") {
    return;
  }
  const produtoSelecionadoNome = selecionaProduto.value;
  const produtoSelecionadoImagem = objProduto[produtoSelecionadoNome];

  produtoSelecionado.innerHTML = `
                <h3>${produtoSelecionadoNome}</h3>
                <img src="${produtoSelecionadoImagem}" alt="${produtoSelecionadoNome}">`;
});
