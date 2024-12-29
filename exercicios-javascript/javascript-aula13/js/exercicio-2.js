(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let bombaArmada = true;
	let tempoRestante = 1;
	const tempoMax = 60;
	const container = document.querySelector("#container");
	const containerTempo = document.querySelector("#containerTempo");
	const timeoutID = setTimeout(explodeBomba, tempoMax * 1000);
	const intervalID = setInterval(mostraTempo, 1000);
	const explosao = new Audio("audio/explosao.mp3");
	const tictac = new Audio("audio/tictac.mp3");
	containerTempo.innerText = tempoMax;

	function mostraTempo() {
		if (tempoRestante >= tempoMax) {
			containerTempo.innerText = "0";
			clearTimeout(intervalID);
		} else {
			tictac.play();
			containerTempo.innerText = tempoMax - tempoRestante;
			tempoRestante++;
		}
	}

	function explodeBomba() {
		container.src = "img/bombaExplosao.png";
		bombaArmada = false;
		explosao.play();
	}

	container.addEventListener("click", () => {
		if (bombaArmada == true) {
			container.src = "img/bombaDesarmada.png";
			clearTimeout(timeoutID);
			clearTimeout(intervalID);
		}
	});
})();
