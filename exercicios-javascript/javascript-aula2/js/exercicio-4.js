(function () {
    // IIFE adicionado para evitar redeclaração de variavel na SPA
    const button = document.querySelector("button");
    function printText() {
        const inputValue = document.querySelector("input").value;
        if (!inputValue) {
            return alert("Insira algum texto na Caixa!");
        }
        alert(inputValue);
    }
    button.addEventListener("click", printText);
})();
