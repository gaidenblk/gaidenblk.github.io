(function () {
    // IIFE adicionado para evitar redeclaração de variavel na SPA

    const bomba = document.querySelector("#bomba");
    const pneuCheio = document.querySelector("#pneuCheio");

    bomba.addEventListener("click", function () {
        pneuCheio.style.display = "block";
    });
    pneuCheio.addEventListener("click", function () {
        alert("VROOOOOMMMM");
    });
})();