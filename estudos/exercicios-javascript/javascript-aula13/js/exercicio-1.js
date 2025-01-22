(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const container = document.querySelector("#container");
	const timeoutID = setTimeout(explodeBomba, 10000);
	const explosao = new Audio("audio/explosao.mp3");
	let bombaArmada = true;

	function explodeBomba() {
		container.src = "img/bombaExplosao.png";
		bombaArmada = false;
		explosao.play();
	}

	container.addEventListener("click", () => {
		if (bombaArmada == true) {
			container.src = "img/bombaDesarmada.png";
			clearTimeout(timeoutID);
		}
	});
})();
