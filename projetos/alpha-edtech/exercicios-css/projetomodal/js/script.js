(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	var norfair = document.getElementById("norfair");
	var fechaNorfair = norfair.getElementsByClassName("close")[0];
	var btnNorfair = document.getElementById("norbut");
	btnNorfair.onclick = function () {
		norfair.style.display = "block";
	};
	fechaNorfair.onclick = function () {
		norfair.style.display = "none";
	};

	var casaCampo = document.getElementById("casaCampo");
	var fechaCasaCampo = casaCampo.getElementsByClassName("close")[0];
	var btnCasaCampo = document.getElementById("campobut");
	btnCasaCampo.onclick = function () {
		casaCampo.style.display = "block";
	};
	fechaCasaCampo.onclick = function () {
		casaCampo.style.display = "none";
	};
})();
