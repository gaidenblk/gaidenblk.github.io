(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const inpt1 = document.querySelector("#inpt1");
	const inpt2 = document.querySelector("#inpt2");
	const btnVerificar = document.querySelector("#btnVerificar");
	const container = document.querySelector("#container");

	btnVerificar.addEventListener("click", () => {
		range(Number(inpt1.value), Number(inpt2.value));
	});
	function range(range1, range2) {
		let array = [];
		if (range1 > 0 && range2 == 0) {
			for (let i = 0; i < range1; i++) {
				array.push(i);
			}
		}
		if (range2 > 0) {
			for (let i = range1; i < range2; i++) {
				array.push(i);
			}
		}

		container.innerText = JSON.stringify(array);
	}
})();
