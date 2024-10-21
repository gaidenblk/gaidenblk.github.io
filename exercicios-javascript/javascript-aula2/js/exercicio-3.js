(function () {
    // IIFE adicionado para evitar redeclaração de variavel na SPA
    const button = document.querySelector("button");
    console.log(1);
    console.log(2);
    button.addEventListener("click", function () {
        console.log(3);
        console.log(4);
    });
    console.log(5);
})();
