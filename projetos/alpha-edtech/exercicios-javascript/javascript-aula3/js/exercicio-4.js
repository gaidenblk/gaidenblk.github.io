(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const peso = document.querySelector("#peso");
	const altura = document.querySelector("#altura");
	const botaoCalcula = document.querySelector("#botaoCalcula");
	const imc = document.querySelector("#imc");
	const classificacao = document.querySelector("#classificacao");

	function calcImc() {
		if (!peso.value || !altura.value) {
			alert("Os Inputs não devem estar vazios!");
			return;
		}
		const valorPeso = Number(peso.value);
		const valorAltura = parseFloat(altura.value / 100);
		const valorImc = valorPeso / (valorAltura * valorAltura);

		if (isNaN(valorImc)) {
			valorImc = "-";
		}

		imc.innerText = `Seu IMC é: ${valorImc.toFixed(2)}`;
		if (valorImc >= 30) {
			console.log(valorImc);
			classificacao.innerText = "Obesidade";
		} else if (valorImc >= 25 && valorImc < 30) {
			classificacao.innerText = "Sobrepeso";
		} else if (valorImc >= 18.5 && valorImc < 25) {
			classificacao.innerText = "Peso normal";
		} else {
			classificacao.innerText = "Abaixo do Peso";
		}
	}
	botaoCalcula.addEventListener("click", calcImc);
})();
