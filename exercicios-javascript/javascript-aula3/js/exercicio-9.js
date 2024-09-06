const sorteia = document.querySelector("#sorteia");

const minInput = document.querySelector("#min");
const maxInput = document.querySelector("#max");
const resultado = document.querySelector("#resultado");
const erro = document.querySelector("#erro");

sorteia.addEventListener("click", function () {
  let min = parseInt(minInput.value);
  let max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max)) {
    erro.innerHTML = "Os valores inseridos não são numéricos.";
    resultado.innerHTML = "";
    return;
  }

  if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
    erro.innerHTML =
      "Os valores inseridos devem ser inteiros maiores ou iguais a zero.";
    resultado.innerHTML = "";
    return;
  }

  if (min >= max) {
    erro.innerHTML = "O valor mínimo deve ser menor que o valor máximo.";
    resultado.innerHTML = "";
    return;
  }

  let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  resultado.innerHTML = "Número sorteado: " + numeroSorteado;
  erro.innerHTML = "";
});
