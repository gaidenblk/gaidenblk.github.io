(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const sorteia = document.querySelector("#sorteia");

	const minInput = document.querySelector("#min");
	const maxInput = document.querySelector("#max");
	const resultado = document.querySelector("#resultado");

	sorteia.addEventListener("click", function () {
		let min = parseInt(minInput.value);
		let max = parseInt(maxInput.value);

		if (isNaN(min) || isNaN(max)) {
			resultado.innerHTML = "Os valores inseridos não são numéricos.";
			return;
		}

		if (
			!Number.isInteger(min) ||
			!Number.isInteger(max) ||
			min < 0 ||
			max < 0
		) {
			resultado.innerHTML =
				"Os valores inseridos devem ser inteiros maiores ou iguais a zero.";
			return;
		}

		if (min >= max) {
			resultado.innerHTML =
				"O valor mínimo deve ser menor que o valor máximo.";
			return;
		}

		let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
		resultado.innerHTML = "Número sorteado: " + numeroSorteado;
	});
})();
