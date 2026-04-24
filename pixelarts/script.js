(async function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let galleryContainer = document.querySelector("#galleryContainer");
	let galleryModal = document.querySelector("#galleryModal");

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

	dadosGaleria.forEach((img) => {
		// Clona o template
		const clone = template.cloneNode(true);

		// Preenche os dados no clone
		clone.querySelector(".titulo").textContent = img.titulo;
		clone.querySelector("img").src = img.arquivo;
		clone.querySelector("img").alt = img.titulo;
		clone.querySelector("img").loading = "lazy";
		clone.querySelector(".descricao").textContent = img.descricao;
		clone.classList.add(img.tamanho);

		clone.addEventListener("click", () => {
			if (window.innerWidth < 450) return;
			galleryModal.style.display = "block";
			const imgModal = document.createElement("div");

			imgModal.id = "imgModal";
			// Clona o template
			const clone = template.cloneNode(true);

			// Preenche os dados no clone
			clone.querySelector(".titulo").textContent = img.titulo;
			clone.querySelector("img").src = img.arquivo;
			clone.querySelector("img").alt = img.titulo;
			clone.querySelector("img").loading = "lazy";
			clone.querySelector(".descricao").textContent = img.descricao;
			clone.classList.replace("pixelArt", "pixelArtModal");

			imgModal.appendChild(clone);

			imgModal.addEventListener("click", () => {
				imgModal.remove();
				galleryModal.style.display = "none";
			});

			galleryModal.appendChild(imgModal);
		});

		// Adiciona no container principal
		galleryContainer.appendChild(clone);
	});
})();
