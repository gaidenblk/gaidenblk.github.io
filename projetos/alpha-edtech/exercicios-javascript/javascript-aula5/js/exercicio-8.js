(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const conteiner = document.querySelector("#conteiner");
	const caixinha = document.querySelector(".caixinha");
	let step = 10;
	let caixinhaMove = false;
	let offsetX = 0;
	let offsetY = 0;

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
	caixinha.addEventListener("mousedown", select);
	caixinha.addEventListener("mouseup", select);
	caixinha.addEventListener("mousemove", move);

	//Aqui eu crio o estado de pode ou não da caixinha se mover
	function select() {
		this.classList.toggle("selecionada");
		this.classList.toggle("naoSelecionada");
		if (caixinha.classList.contains("selecionada")) {
			caixinhaMove = true;
		} else {
			caixinhaMove = false;
		}
	}

	//Aqui é a função de movimento
	function move(event) {
		if (caixinhaMove) {
			const containerRect = conteiner.getBoundingClientRect();
			const containerLeft = containerRect.left;
			const containerTop = containerRect.top;
			const containerWidth = containerRect.width;
			const containerHeight = containerRect.height;

			const mouseX = event.clientX;
			const mouseY = event.clientY;

			const newLeft = mouseX - containerLeft - offsetX;
			const newTop = mouseY - containerTop - offsetY;

			if (newLeft >= 0 && newLeft + caixinha.offsetWidth <= containerWidth) {
				caixinha.style.left = newLeft + "px";
			}
			if (newTop >= 0 && newTop + caixinha.offsetHeight <= containerHeight) {
				caixinha.style.top = newTop + "px";
			}
		}
	}

	caixinha.addEventListener("mousedown", function (event) {
		offsetX = event.clientX - caixinha.getBoundingClientRect().left;
		offsetY = event.clientY - caixinha.getBoundingClientRect().top;
	});

	caixinha.addEventListener("mouseup", function () {
		offsetX = 0;
		offsetY = 0;
	});
})();
