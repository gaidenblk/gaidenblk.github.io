(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const container = document.querySelector("#container");
	const fotoLanche = document.querySelector("#fotoLanche");

	fotoLanche.addEventListener("click", function () {
		container.innerHTML = `<img src="./img/${fotoLanche.value}.png" alt="${fotoLanche.value}">`;
	});
})();
