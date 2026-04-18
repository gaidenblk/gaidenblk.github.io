(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	async function fetchCard() {
		try {
			const divCartas = document.getElementById("divCartas");
			divCartas.innerHTML = ""; // Limpa a div antes de exibir as cartas

			// Embaralhar o deck
			const shuffleResponse = await fetch(
				"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
			);
			const shuffleData = await shuffleResponse.json();
			if (shuffleResponse.status !== 200) {
				throw new Error("Erro ao embaralhar o deck");
			}

			// Buscar as Cartas
			const drawResponse = await fetch(
				`https://deckofcardsapi.com/api/deck/${shuffleData.deck_id}/draw/?count=5`,
			);
			const drawData = await drawResponse.json();
			if (drawResponse.status !== 200) {
				throw new Error("Erro ao buscar as cartas");
			}
			drawData.cards.map((card) => {
				const cartaDiv = document.createElement("div");
				const cartaImg = document.createElement("img");
				cartaImg.src = card.image;
				cartaDiv.id = "cartaDiv";
				cartaDiv.textContent = `${card.value} of ${card.suit}`;
				cartaDiv.appendChild(cartaImg);
				divCartas.appendChild(cartaDiv);
			});
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	// Chamando a função
	fetchCard()
		.then(() => {
			console.log("Todas as consultas foram concluídas com sucesso");
		})
		.catch(() => {
			console.error("Houve um erro durante as consultas");
		});
})();
