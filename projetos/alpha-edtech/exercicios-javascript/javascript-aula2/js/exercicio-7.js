function removeBordas() {
	// Remove a borda de todas as divs
	document.querySelectorAll("#exercicio > div").forEach((div) => {
		div.style.borderColor = "black";
	});
}

function aplicaBorda(element) {
	removeBordas();
	// Aplica a borda vermelha ao elemento clicado
	element.style.borderColor = "red";
}

// Aplicando inicialmente estilo em uma div
document.querySelector("#omelete").style.borderColor = "red";
