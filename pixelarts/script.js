(async function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let galleryContainer = document.querySelector("#galleryContainer");

	const template = await carregarElemento("div", "/html/pixelArtContainer.html");

	fetch("/pixelarts/dadosGaleria.json")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((img) => {
				// Clona o template
				const clone = template.cloneNode(true);

				// Preenche os dados no clone
				clone.querySelector(".titulo").textContent = img.titulo;
				clone.querySelector("img").src = img.arquivo;
				clone.querySelector("img").alt = img.titulo;
				clone.querySelector("img").loading = "lazy";
				clone.querySelector(".descricao").textContent = img.descricao;
				clone.classList.add(img.tamanho);

				// Adiciona no container principal
				galleryContainer.appendChild(clone);
			});
		})
		.catch((error) => console.error("Erro ao carregar o JSON:", error));
})();
