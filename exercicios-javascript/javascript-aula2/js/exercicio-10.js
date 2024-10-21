(function () {
    // IIFE adicionado para evitar redeclaração de variavel na SPA

    const input = document.querySelector("#texto");
    const adiciona = document.querySelector("#adiciona");
    const listaTarefas = document.querySelector("#listaTarefas");

    adiciona.addEventListener("click", function () {
        const textoArrumado = texto.value.trim().toLowerCase();
        if (!textoArrumado) {
            alert("Digite um texto na caixa antes");
            return;
        }
        texto.value = "";
        listaTarefas.innerHTML += `<li>${textoArrumado}</li>`;
    });
})();
