(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let textoEmComum = "";
	const input1 = document.querySelector("#input1");
	const input2 = document.querySelector("#input2");
	const inputTexto = document.querySelectorAll(".inputTexto");

	input1.addEventListener("pointerover", function () {
		input1.classList.add("fundoColorido");
		input2.classList.add("fundoColorido");
	});
	input2.addEventListener("pointerover", function () {
		input1.classList.add("fundoColorido");
		input2.classList.add("fundoColorido");
	});
	input1.addEventListener("pointerout", function () {
		input1.classList.remove("fundoColorido");
		input2.classList.remove("fundoColorido");
	});
	input2.addEventListener("pointerout", function () {
		input1.classList.remove("fundoColorido");
		input2.classList.remove("fundoColorido");
	});
	input1.addEventListener("focus", function () {
		input1.classList.add("bordaColorida");
		input2.classList.add("bordaColorida");
	});
	input2.addEventListener("focus", function () {
		input1.classList.add("bordaColorida");
		input2.classList.add("bordaColorida");
	});
	input1.addEventListener("blur", function () {
		input1.classList.remove("bordaColorida");
		input2.classList.remove("bordaColorida");
	});
	input2.addEventListener("blur", function () {
		input1.classList.remove("bordaColorida");
		input2.classList.remove("bordaColorida");
	});

	input1.addEventListener("keyup", function () {
		textoEmComum = input1.value;
		input1.value = textoEmComum;
		input2.value = textoEmComum;
	});
	input2.addEventListener("keyup", function () {
		textoEmComum = input2.value;
		input1.value = textoEmComum;
		input2.value = textoEmComum;
	});
})();
