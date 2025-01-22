(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const inptInicio = document.querySelector("#inptInicio");
	const inptFim = document.querySelector("#inptFim");
	const btnListar = document.querySelector("#btnListar");
	const body = document.querySelector("body");

	btnListar.addEventListener("click", () => {
		const inicioNumero = Number(inptInicio.value);
		const fimNumero = Number(inptFim.value);
		if (
			isNaN(inicioNumero) ||
			isNaN(fimNumero) ||
			inicioNumero % 1 != 0 ||
			fimNumero % 1 != 0 ||
			inicioNumero == "" ||
			fimNumero == ""
		) {
			alert("Digite numeros Inteiros");
			inptInicio.value = "";
			inptFim.value = "";
			return;
		}
		if (inicioNumero >= fimNumero) {
			alert("Numero inicial não pode Ser maior que o Final");
			inptInicio.value = "";
			inptFim.value = "";
			return;
		}
		body.removeChild(body.lastChild);
		const novaUl = document.createElement("ul");
		for (let i = inicioNumero; i < fimNumero; i++) {
			const novaLi = document.createElement("li");
			novaLi.innerText = i;
			novaUl.appendChild(novaLi);
		}
		document.querySelector("body").appendChild(novaUl);
	});
})();
