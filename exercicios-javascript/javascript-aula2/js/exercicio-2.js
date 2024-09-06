const paragrafo = document.getElementById("paragrafo");
let incremento = 0;
function trocaTexto() {
  incremento++;
  if (incremento >= 10)
    return (paragrafo.innerText = `Já clicou umas ${incremento} vezes, chega!`);
  if (incremento >= 5)
    return (paragrafo.innerText = `Já clicou umas ${incremento} vezes`);
  paragrafo.innerText = "Você clicou em Mim";
}
paragrafo.addEventListener("click", trocaTexto);
