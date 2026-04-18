(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const container = document.querySelector("#container");
	const btnSortear = document.querySelector("#btnSortear");

	btnSortear.addEventListener("click", () => {
		const arrayAleatorio = [];
		for (let i = 0; i < 6; i++) {
			const nmroAleatorio = Math.floor(Math.random() * 30);
			arrayAleatorio.push(nmroAleatorio);
		}
		console.log(arrayAleatorio);
		container.innerHTML = "";
		const inptChutar = document.createElement("input");
		const btnChutar = document.createElement("button");
		btnChutar.innerText = "Chutar";
		btnChutar.addEventListener("click", () => {
			const target = Number(inptChutar.value);
			for (let i = 0; i < arrayAleatorio.length; i++) {
				const chute = arrayAleatorio[i];
				if (chute === target) {
					document.querySelector("p").innerText = "Acertou";
					return;
				}
			}
			document.querySelector("p").innerText = "Errou";
		});
		container.appendChild(inptChutar);
		container.appendChild(btnChutar);
	});
})();
