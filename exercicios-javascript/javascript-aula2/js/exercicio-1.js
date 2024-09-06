const executa = document.querySelector("#executa");
executa.addEventListener("click", function () {
  let visitante = {};
  visitante.nome = prompt("Diga o seu Nome");
  visitante.idade = prompt("Diga a sua idade");
  console.log(visitante);
});
