const input = document.querySelector("#texto");
const adiciona = document.querySelector("#adiciona");
const listaTarefas = document.querySelector("#listaTarefas");

adiciona.addEventListener("click", function () {
  const textoArrumado = texto.value.trim().toLowerCase();
  listaTarefas.innerHTML += `<li>${textoArrumado}</li>`;
});
