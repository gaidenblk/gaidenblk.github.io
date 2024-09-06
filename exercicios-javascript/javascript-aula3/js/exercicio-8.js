const senha1 = document.querySelector("#senha1");
const senha2 = document.querySelector("#senha2");
const senha3 = document.querySelector("#senha3");
const senha4 = document.querySelector("#senha4");

const desativaAlarme = document.querySelector("#desativaAlarme");
const senha = "114241";
let verificador = "";

senha1.addEventListener("click", function () {
  verificador += "1";
});
senha2.addEventListener("click", function () {
  verificador += "2";
});
senha3.addEventListener("click", function () {
  verificador += "3";
});
senha4.addEventListener("click", function () {
  verificador += "4";
});

desativaAlarme.addEventListener("click", function () {
  if (verificador === senha) {
    alert("Alarme Desarmado");
  } else {
    alert("Senha Incorreta");
    verificador = "";
  }
});
