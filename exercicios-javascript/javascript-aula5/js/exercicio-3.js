(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const divCopiada = document.querySelector("#divCopiada");
	const divCopia = document.querySelector("#divCopia");
	console.log(divCopiada.value);

	if (divCopiada.value === "") {
		divCopia.innerHTML = "Texto Copiado aparecerá aqui!";
	}

	divCopiada.addEventListener("keyup", function () {
		divCopia.innerHTML = divCopiada.value;
	});
})();
