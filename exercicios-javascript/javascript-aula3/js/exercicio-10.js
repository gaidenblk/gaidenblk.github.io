const telefone = document.querySelector("#telefone");
const verificar = document.querySelector("#verificar");
const mensagem = document.querySelector("#mensagem");
const verificador = /^\(\d{2}\) \d{4,5}-\d{4}$/;

verificar.addEventListener("click", function () {
  const telefoneValue = telefone.value;
  if (verificador.test(telefoneValue)) {
    mensagem.innerText = "Telefone Aceito";
  } else {
    mensagem.innerText = "Não é um telefone válido";
  }
  console.log(telefone.value);
});
