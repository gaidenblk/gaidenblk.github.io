(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const inptTitulo = document.querySelector("#inptTitulo");
	const inptLink = document.querySelector("#inptLink");
	const galeria = document.querySelector("#galeria");
	const btnAdicionar = document.querySelector("#btnAdicionar");

	btnAdicionar.addEventListener("click", adcionaImagem);

	function adcionaImagem() {
		const tituloTexto = inptTitulo.value;
		const linkImagem = inptLink.value;

		const div = document.createElement("div");
		const h3 = document.createElement("h3");
		const img = document.createElement("img");

		img.src = linkImagem;
		img.alt = tituloTexto;
		h3.textContent = tituloTexto;

		div.appendChild(h3);
		div.appendChild(img);
		galeria.appendChild(div);

		div.addEventListener("click", deletaImagem);
	}

	function deletaImagem() {
		this.remove();
	}
})();
