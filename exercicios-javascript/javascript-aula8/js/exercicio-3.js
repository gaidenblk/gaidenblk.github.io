(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const inptDataGuarda = document.querySelector("#inptDataGuarda");
	const inptDataMostra = document.querySelector("#inptDataMostra");
	const btnAdicionar = document.querySelector("#btnAdicionar");
	const btnMostra = document.querySelector("#btnMostra");
	const container = document.querySelector("#container");
	inptDataMostra.value = "";
	inptDataGuarda.value = "";

	let lembretes = {};
	let listaLembretes = [];

	if (localStorage.getItem("lembretes") != null) {
		const dataString = localStorage.getItem("lembretes");
		lembretes = JSON.parse(dataString);
	}

	btnAdicionar.addEventListener("click", () => {
		if (inptDataGuarda.value == "") {
			alert("Selecione uma Data!");
			return;
		}
		let dataInput = new Date(inptDataGuarda.value + "T00:00:00").getTime();
		if (localStorage.getItem("lembretes") != null && lembretes[dataInput] != undefined) {
			listaLembretes = lembretes[dataInput];
		}
		listaLembretes.push(document.querySelector("#inptLembrete").value);
		lembretes[dataInput] = listaLembretes;

		localStorage.setItem("lembretes", JSON.stringify(lembretes));
		console.log(lembretes);
	});
	inptDataGuarda.addEventListener("change", () => {
		let dataInput = new Date(inptDataGuarda.value + "T00:00:00").getTime();
		if (lembretes[dataInput] == undefined) {
			listaLembretes = [];
		} else {
			listaLembretes = lembretes[dataInput];
		}
	});
	btnMostra.addEventListener("click", () => {
		if (inptDataMostra.value == "") {
			alert("Selecione uma Data!");
			return;
		}
		let dataInput = new Date(inptDataMostra.value + "T00:00:00").getTime();
		if (lembretes[dataInput] == undefined) {
			container.innerHTML = "<p>Não há Lembretes para este Dia!</p>";
			return;
		} else {
			listaLembretes = lembretes[dataInput];
		}
		if (container.hasChildNodes()) {
			container.removeChild(container.firstChild);
		}
		const ul = document.createElement("ul");
		for (let i = 0; i < listaLembretes.length; i++) {
			const li = document.createElement("li");
			li.innerText = listaLembretes[i];
			ul.appendChild(li);
		}
		container.appendChild(ul);
	});
})();
