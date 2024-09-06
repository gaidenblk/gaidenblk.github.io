const coresFundo = document.querySelector("#caixaCoresFundo");
const corFnd1 = coresFundo.querySelector(":nth-child(1)");
const corFnd2 = coresFundo.querySelector(":nth-child(2)");
const corFnd3 = coresFundo.querySelector(":nth-child(3)");
const corFnd4 = coresFundo.querySelector(":nth-child(4)");

const coresFonte = document.querySelector("#caixaCoresFonte");
const corFnt1 = coresFonte.querySelector(":nth-child(1)");
const corFnt2 = coresFonte.querySelector(":nth-child(2)");
const corFnt3 = coresFonte.querySelector(":nth-child(3)");
const corFnt4 = coresFonte.querySelector(":nth-child(4)");

const texto = document.querySelector("#texto");

function mudaCorFundo(corParametro) {
  texto.style.background = corParametro;
}
function mudaCorFonte(corParametro) {
  texto.style.color = corParametro;
}

corFnd1.addEventListener("click", function () {
  mudaCorFundo("rgb(94, 104, 116)");
});
corFnd2.addEventListener("click", function () {
  mudaCorFundo("rgb(120, 192, 141)");
});
corFnd3.addEventListener("click", function () {
  mudaCorFundo("rgb(52, 127, 212)");
});
corFnd4.addEventListener("click", function () {
  mudaCorFundo("rgb(243, 145, 145)");
});

corFnt1.addEventListener("click", function () {
  mudaCorFonte("rgb(28, 77, 134)");
});
corFnt2.addEventListener("click", function () {
  mudaCorFonte("rgb(165, 37, 133)");
});
corFnt3.addEventListener("click", function () {
  mudaCorFonte("rgb(9, 150, 56)");
});
corFnt4.addEventListener("click", function () {
  mudaCorFonte("rgb(184, 159, 17)");
});
