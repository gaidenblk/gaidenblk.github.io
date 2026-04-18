(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const containerSorteio = document.querySelector("#containerSorteio");
	const containerCartela = document.querySelector("#containerCartela");
	const btnInicia = document.querySelector("#btnInicia");
	const btnNovaCartela = document.querySelector("#btnNovaCartela");

	const sorteio = {
		sorteador: function (_nmroMin, _nmroMax) {
			while (this.arrSorteio.length < _nmroMax - _nmroMin + 1) {
				const nmroAleatorio = 1 + Math.floor(Math.random() * _nmroMax);
				if (!this.arrSorteio.includes(nmroAleatorio) && nmroAleatorio >= _nmroMin) {
					this.arrSorteio.push(nmroAleatorio);
				}
			}
		},
		iniciaSorteio: function (_nmroMin, _nmroMax) {
			containerSorteio.innerText = "";
			sorteio.arrSorteio = [];
			sorteio.nmroSorteado = [];
			sorteio.intervaloId = null;
			const nmroMin = _nmroMin;
			const nmroMax = _nmroMax;
			sorteio.sorteador(nmroMin, nmroMax);
			let contador = 0;
			btnInicia.disabled = true;
			btnNovaCartela.disabled = true;
			sorteio.intervaloId = setInterval(function () {
				sorteio.nmroSorteado.push(sorteio.arrSorteio[contador]);
				const novaDivNmro = document.createElement("div");
				novaDivNmro.innerText = sorteio.arrSorteio[contador];
				novaDivNmro.classList.add("nmroSorteado");
				containerSorteio.appendChild(novaDivNmro);
				contador++;
				if (contador >= sorteio.arrSorteio.length) {
					sorteio.paraSorteio();
				}
			}, 3000);
		},
		paraSorteio: function () {
			btnInicia.disabled = false;
			clearInterval(sorteio.intervaloId);
		},
		geraCartela: function () {
			btnInicia.disabled = false;
			sorteio.arrSorteio = [];
			sorteio.sorteador(1, 75);
			const novaCartela = [];
			for (let i = 0; i < 10; i++) {
				novaCartela.push(sorteio.arrSorteio[i]);
			}
			return novaCartela;
		},
		imprimeCartela: function () {
			const novaCartelaDiv = document.createElement("div");
			const novaCartela = sorteio.geraCartela();
			novaCartelaDiv.id = new Date().getTime();
			novaCartelaDiv.classList.add("cartela");
			novaCartelaDiv.innerText = `Nº: ${novaCartelaDiv.id}`;
			let contador = 0;
			console.log(btnInicia.disabled);
			console.log(sorteio.nmroSorteado);
			for (let i = 0; i < novaCartela.length; i++) {
				let clicado = false;
				const novaSpan = document.createElement("span");
				novaSpan.addEventListener("click", () => {
					if (!sorteio.nmroSorteado) {
						return;
					}
					if (clicado == false && sorteio.nmroSorteado.includes(novaSpan.value)) {
						clicado = true;
						novaSpan.style.backgroundColor = "red";
						contador++;
						if (contador == novaCartela.length) {
							novaCartelaDiv.style.backgroundColor = "blue";
							sorteio.paraSorteio();
						}
					}
				});
				novaSpan.innerText = novaCartela[i];
				novaSpan.value = novaCartela[i];
				novaCartelaDiv.appendChild(novaSpan);
			}

			containerCartela.appendChild(novaCartelaDiv);
		},
	};

	btnInicia.disabled = true;

	btnInicia.addEventListener("click", () => {
		sorteio.iniciaSorteio(1, 75);
	});

	btnNovaCartela.addEventListener("click", sorteio.imprimeCartela);
})();
