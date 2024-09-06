const paragrafo = document.getElementById("paragrafo");
let contador = 0;

function trocaTexto() {
  contador++;
  if (contador === 1) {
    paragrafo.innerText = "Você clicou 1 vez";
  } else if (contador > 1 && contador <= 10) {
    paragrafo.innerText = `Você clicou ${contador} vezes!`;
  } else if (contador > 10) {
    paragrafo.innerText = "Já chega não?";
  }
}
paragrafo.addEventListener("click", trocaTexto);
