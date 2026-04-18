(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const container = document.querySelector("#container");
	const inptLembrete = document.querySelector("#inptLembrete");
	const inptData = document.querySelector("#inptData");
	const btnAdicionar = document.querySelector("#btnAdicionar");
	const btnMostrar = document.querySelector("#btnMostrar");
	const dataHoje = new Date().setHours(0, 0, 0, 0);

	inptData.value = "";
	inptLembrete.value = "";

	let lembretes = {};

	if (localStorage.getItem("lembretes") != null) {
		const dataString = localStorage.getItem("lembretes");
		lembretes = JSON.parse(dataString);
	}
	btnAdicionar.addEventListener("click", function () {
		if (inptData.value == "") {
			alert("Escolha uma Data!");
			return;
		}
		if (inptLembrete.value == "") {
			alert("Digite um Lembrete!");
			return;
		}
		let dataInput = new Date(inptData.value + "T00:00:00").getTime();

		if (!lembretes[dataInput]) {
			lembretes[dataInput] = inptLembrete.value + "\n";
		} else {
			lembretes[dataInput] += inptLembrete.value + "\n";
		}
		localStorage.setItem("lembretes", JSON.stringify(lembretes));
	});
	btnMostrar.addEventListener("click", function () {
		if (lembretes[dataHoje] == null) {
			container.innerText = "Não há lembretes para hoje";
		} else {
			container.innerText = lembretes[dataHoje];
		}
	});
})();
