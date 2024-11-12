(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const fntTamanho = document.querySelector("#fntTamanho");
	const fntFamilia = document.querySelector("#fntFamilia");
	const fndCor = document.querySelector("#fndCor");
	const fntCor = document.querySelector("#fntCor");
	const textarea = document.querySelector("textarea");
	let config = {};

	if (localStorage.getItem("config") != null) {
		const dataString = localStorage.getItem("config");
		console.log(dataString);
		config = JSON.parse(dataString);
		textarea.value = config.textarea;
		textarea.style.fontSize = config.tamanhoFonte;
		textarea.style.fontFamily = config.familiaFonte;
		textarea.style.backgroundColor = config.fundoCor;
		textarea.style.color = config.fonteCor;
		fntTamanho.value = config.tamanhoFonte || "";
		fntFamilia.value = config.familiaFonte || "";
		fndCor.value = config.fundoCor || "#000000";
		fntCor.value = config.fonteCor || "#000000";
	} else {
		textarea.value = "";
		fntTamanho.value = "";
		fntFamilia.value = "";
	}

	textarea.addEventListener("input", function () {
		config.textarea = this.value;
		localStorage.setItem("config", JSON.stringify(config));
	});

	fntTamanho.addEventListener("change", function () {
		config.tamanhoFonte = this.value;
		textarea.style.fontSize = config.tamanhoFonte;
		localStorage.setItem("config", JSON.stringify(config));
	});

	fntFamilia.addEventListener("change", function () {
		config.familiaFonte = this.value;
		textarea.style.fontFamily = config.familiaFonte;
		localStorage.setItem("config", JSON.stringify(config));
	});

	fndCor.addEventListener("change", function () {
		config.fundoCor = this.value;
		textarea.style.backgroundColor = config.fundoCor;
		localStorage.setItem("config", JSON.stringify(config));
	});
	fntCor.addEventListener("change", function () {
		config.fonteCor = this.value;
		textarea.style.color = config.fonteCor;
		localStorage.setItem("config", JSON.stringify(config));
	});
})();
