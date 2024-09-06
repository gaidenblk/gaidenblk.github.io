const input = document.querySelector("input");
const botao = document.querySelector("button");
const numeroOculto = document.getElementById("numeroOculto");

function exibeTexto() {
  let numeroConvertido = Number(input.value);
  numeroOculto.innerText = numeroConvertido.toFixed(2);
}
botao.addEventListener("click", exibeTexto);
