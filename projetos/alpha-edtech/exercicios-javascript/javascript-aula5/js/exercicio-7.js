(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const conteiner = document.querySelector("#conteiner");
	const caixinha = document.querySelector(".caixinha");
	let step = 10;
	let caixinhaMove = false;

	//Aqui é a verificação do Shift pressionado
	document.addEventListener("keydown", function (event) {
		if (event.key === "Shift") {
			step = 100;
		}
	});

	document.addEventListener("keyup", function (event) {
		if (event.key === "Shift") {
			step = 10;
		}
	});

	//Aqui é a verificação do clique na caixinha se está ou não selecionada
	caixinha.addEventListener("click", select);

	function select() {
		this.classList.toggle("selecionada");
		this.classList.toggle("naoSelecionada");
	}

	//Aqui eu crio o estado de pode ou não da caixinha se mover
	caixinha.addEventListener("click", function () {
		if (caixinha.classList.contains("selecionada")) {
			caixinhaMove = true;
		} else {
			caixinhaMove = false;
		}
	});

	//Aqui é a função de movimento
	document.addEventListener("keydown", function (event) {
		if (event.key === "ArrowLeft" && caixinhaMove) {
			const currentLeft = parseInt(getComputedStyle(caixinha).left);
			const newLeft = currentLeft - step;
			if (newLeft >= 0) {
				caixinha.style.left = newLeft + "px";
			}
		}
		if (event.key === "ArrowRight" && caixinhaMove) {
			const currentLeft = parseInt(getComputedStyle(caixinha).left);
			const newLeft = currentLeft + step;
			const containerWidth = conteiner.offsetWidth;
			const caixinhaWidth = caixinha.offsetWidth;
			if (newLeft + caixinhaWidth <= containerWidth) {
				caixinha.style.left = newLeft + "px";
			}
		}
		if (event.key === "ArrowUp" && caixinhaMove) {
			const currentTop = parseInt(getComputedStyle(caixinha).top);
			const newTop = currentTop - step;
			if (newTop >= 0) {
				caixinha.style.top = newTop + "px";
			}
		}
		if (event.key === "ArrowDown" && caixinhaMove) {
			const currentTop = parseInt(getComputedStyle(caixinha).top);
			const newTop = currentTop + step;
			const containerHeight = conteiner.offsetHeight;
			const caixinhaHeight = caixinha.offsetHeight;
			if (newTop + caixinhaHeight <= containerHeight) {
				caixinha.style.top = newTop + "px";
			}
		}
	});
})();
