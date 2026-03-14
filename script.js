(async function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let imgIntro = document.querySelector("#imgIntro");

	const template = await carregarElemento(
		"div",
		"/html/pixelArtContainer.html",
	);

	fetch("/pixelarts/dadosGaleria.json")
		.then((response) => response.json())
		.then((data) => {
			// Clona o template
			const clone = template.cloneNode(true);

			// Pega uma imagem aleatoria da galeria
			const indice = Math.floor(Math.random() * data.length);
			const img = data[indice];

			// Preenche os dados no clone
			clone.querySelector(".titulo").textContent = img.titulo;
			clone.querySelector("img").src = img.arquivo;
			clone.querySelector("img").alt = img.titulo;
			clone.querySelector("img").loading = "lazy";
			clone.querySelector(".descricao").textContent = img.descricao;
			clone.classList.add(img.tamanho);

			// Adiciona no container principal
			imgIntro.appendChild(clone);
		})
		.catch((error) => console.error("Erro ao carregar o JSON:", error));
})();
