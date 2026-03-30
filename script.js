(async function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let imgIntro = document.querySelector("#imgIntro");

	const template = await carregarElemento(
		"div",
		"/html/pixelArtContainer.html",
	);

	let dadosGaleria = [];

	if (sessionStorage.getItem("galeriaPixel")) {
		dadosGaleria = JSON.parse(sessionStorage.getItem("galeriaPixel"));
	} else {
		await fetch("/pixelarts/dadosGaleria.json")
			.then((response) => response.json())
			.then((data) => {
				dadosGaleria = data;
				sessionStorage.setItem("galeriaPixel", JSON.stringify(data));
			})
			.catch((error) => console.error("Erro ao carregar o JSON:", error));
	}

	// Pega uma imagem aleatoria da galeria
	const indice = Math.floor(Math.random() * dadosGaleria.length);
	const img = dadosGaleria[indice];

	// Preenche os dados no template
	template.querySelector(".titulo").textContent = img.titulo;
	template.querySelector("img").src = img.arquivo;
	template.querySelector("img").alt = img.titulo;
	template.querySelector("img").loading = "lazy";
	template.querySelector(".descricao").textContent = img.descricao;
	template.classList.add(img.tamanho);

	// Adiciona no container principal
	imgIntro.appendChild(template);
})();
