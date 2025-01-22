(function () {
    // IIFE adicionado para evitar redeclaração de variavel na SPA
    const input = document.querySelector("input");
    const botao = document.querySelector("button");
    const numeroOculto = document.getElementById("numeroOculto");
    numeroOculto.textContent = "Digite um numero na caixa acima!";

    function exibeTexto() {
        if (!input.value) {
            numeroOculto.textContent = "Por favor, digite um número!";
            return;
        }

        if (isNaN(Number(input.value))) {
            numeroOculto.textContent = "Precisa que seja um número!";
            return;
        }
        numeroOculto.innerText = Number(input.value).toFixed(2);
    }
    botao.addEventListener("click", exibeTexto);
})();
