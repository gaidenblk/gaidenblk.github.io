(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const regEx = /^\(\d{2}\) \d{4,5}-\d{4}$/;
	const inputTelefone = document.querySelector("#inputTelefone");
	const btnTelefone = document.querySelector("#btnTelefone");
	const textoValidador = document.querySelector("#textoValidador");

	inputTelefone.addEventListener("keyup", function () {
		if (regEx.test(inputTelefone.value)) {
			inputTelefone.classList.remove("telefoneInvalido");
			textoValidador.classList.remove("telefoneInvalido");
			inputTelefone.classList.add("telefoneValido");
			textoValidador.classList.add("telefoneValido");
			btnTelefone.disabled = false;
			textoValidador.innerHTML = "O telefone é válido";
		} else {
			inputTelefone.classList.remove("telefoneValido");
			textoValidador.classList.remove("telefoneValido");
			inputTelefone.classList.add("telefoneInvalido");
			textoValidador.classList.add("telefoneInvalido");
			btnTelefone.disabled = true;
			textoValidador.innerHTML = "O telefone não é válido";
		}
	});
})();
