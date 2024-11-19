(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const textarea = document.querySelector("textarea");
	const btnListar = document.querySelector("button");
	const container = document.querySelector("#container");

	btnListar.addEventListener("click", () => {
		container.innerHTML = "";
		const textArray = textarea.value.split(",");
		const dados = ["Indice", "Nome"];
		const primeiraLinha = document.createElement("tr");
		for (let i = 0; i < dados.length; i++) {
			const novaTd = document.createElement("td");
			novaTd.innerText = dados[i];
			primeiraLinha.appendChild(novaTd);
		}
		container.appendChild(primeiraLinha);
		for (let i = 0; i < textArray.length; i++) {
			const novaTr = document.createElement("tr");
			const td1 = document.createElement("td");
			td1.innerText = i;
			const td2 = document.createElement("td");
			td2.innerText = textArray[i];
			novaTr.appendChild(td1);
			novaTr.appendChild(td2);
			container.appendChild(novaTr);
		}
	});
})();
