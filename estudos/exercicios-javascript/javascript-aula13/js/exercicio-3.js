(function () {
	// IIFE adicionado para evitar redeclaração de variável na SPA

	let bombaArmada = false;
	const container = document.querySelector("#container");
	const containerTempo = document.querySelector("#containerTempo");
	const explosao = new Audio("audio/explosao.mp3");
	const tictac = new Audio("audio/tictac.mp3");
	const slctMinutos = document.querySelector("#slctMinutos");
	const slctSegundos = document.querySelector("#slctSegundos");
	const btnAtivaBomba = document.querySelector("#btnAtivaBomba");

	// Intervalo global para controlar o timer
	let intervalID = null;

	btnAtivaBomba.addEventListener("click", () => {
		// Se a bomba já estiver armada, limpa o intervalo anterior
		if (bombaArmada) {
			clearInterval(intervalID);
		}

		const tempoMax = Number(slctMinutos.value) * 60 + Number(slctSegundos.value);
		let tempoRestante = tempoMax;
		bombaArmada = true;
		containerTempo.innerText = tempoMax;
		container.src = "img/bombaArmada.png";

		// Cria um novo intervalo a cada vez que o botão for clicado
		intervalID = setInterval(mostraTempo, 1000);

		function mostraTempo() {
			tempoRestante--;
			containerTempo.innerText = tempoRestante;
			tictac.play();
			if (tempoRestante < (tempoMax / 100) * 30) {
				container.src = "img/bombaProx.png";
			}
			if (tempoRestante < 1) {
				explodeBomba();
			}
		}

		function explodeBomba() {
			container.src = "img/bombaExplosao.png";
			explosao.play();
			bombaArmada = false;
			clearInterval(intervalID); // Limpa o intervalo ao explodir
		}

		container.addEventListener("click", () => {
			if (bombaArmada) {
				container.src = "img/bombaDesarmada.png";
				bombaArmada = false;
				clearInterval(intervalID); // Limpa o intervalo ao desarmar a bomba
			}
		});
	});

	for (let i = 0; i < 60; i++) {
		const novaOptMin = document.createElement("option");
		const novaOptSeg = document.createElement("option");
		novaOptMin.value = i;
		novaOptMin.innerText = i;
		novaOptSeg.value = i;
		novaOptSeg.innerText = i;
		slctMinutos.appendChild(novaOptMin);
		slctSegundos.appendChild(novaOptSeg);
	}
})();
