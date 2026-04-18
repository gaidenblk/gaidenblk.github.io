(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let dados = "";
	document.querySelector("textarea").value = localStorage.getItem("textarea");

	document.querySelector("textarea").addEventListener("input", function () {
		dados = this.value;
		localStorage.setItem("textarea", dados);
	});
})();
