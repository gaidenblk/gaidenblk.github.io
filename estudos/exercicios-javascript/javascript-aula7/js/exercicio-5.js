(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const fntTamanho = document.querySelector("#fntTamanho");
	const fntFamilia = document.querySelector("#fntFamilia");
	const fndCor = document.querySelector("#fndCor");
	const fntCor = document.querySelector("#fntCor");
	const textarea = document.querySelector("textarea");

	const modalImporta = document.querySelector("#modalImporta");
	const modalExporta = document.querySelector("#modalExporta");
	const textExporta = document.querySelector("#textExporta");
	const inptImporta = document.querySelector("#inptImporta");
	const btnImportar = document.querySelector("#btnImportar");
	const btnExportar = document.querySelector("#btnExportar");
	const btnOk = document.querySelector("#btnOk");

	const btnFecha = document.querySelectorAll(".btnFecha");

	let config = {};

	if (localStorage.getItem("config") != null) {
		const dataString = localStorage.getItem("config");
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
		config.tamanhoFonte = this.value + "px";
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

	btnImportar.addEventListener("click", function () {
		modalImporta.style.display = "block";
		inptImporta.value = "";
	});
	btnExportar.addEventListener("click", function () {
		modalExporta.style.display = "block";
		textExporta.value = JSON.stringify(config);
	});

	btnOk.addEventListener("click", function () {
		try {
			config = JSON.parse(inptImporta.value);
		} catch (err) {
			console.log(`Erro: ${err} \nFormato de dados Inválido`);
			return;
		}
		textarea.value = config.textarea;
		textarea.style.fontSize = config.tamanhoFonte;
		textarea.style.fontFamily = config.familiaFonte;
		textarea.style.backgroundColor = config.fundoCor;
		fntTamanho.value = config.tamanhoFonte;
		fntFamilia.value = config.familiaFonte;
		fndCor.value = config.fundoCor;
		localStorage.setItem("config", JSON.stringify(config));
		modalImporta.style.display = "none";
	});

	btnFecha.forEach(function (btn) {
		btn.addEventListener("click", function () {
			modalImporta.style.display = "none";
			modalExporta.style.display = "none";
		});
	});
})();
