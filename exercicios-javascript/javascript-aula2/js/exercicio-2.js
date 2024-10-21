(function () {
    // IIFE adicionado para evitar redeclaração de variavel na SPA
    const paragrafo = document.getElementById("paragrafo");
    let incremento = 0;

    function trocaTexto() {
        incremento++;
        if (incremento >= 10) {
            paragrafo.innerText = `Já clicou umas ${incremento} vezes, chega!`;
            paragrafo.style.borderColor = "red";
            return;
        }
        if (incremento >= 5) {
            paragrafo.innerText = `Já clicou umas ${incremento} vezes`;
            paragrafo.style.borderColor = "yellow";
            return;
        }
        paragrafo.innerText = "Você clicou em Mim";
    }

    paragrafo.addEventListener("click", trocaTexto);
})();
