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

			// Array para armazenar as promessas das consultas
			const promises = [];

			// Buscar as Cartas
			const drawPromise = fetch(
				`https://deckofcardsapi.com/api/deck/${shuffleData.deck_id}/draw/?count=5`,
			)
				.then((drawResponse) => {
					if (drawResponse.status !== 200) {
						throw new Error("Erro ao buscar uma carta");
					}
					return drawResponse.json();
				})
				.then((drawData) => {
					drawData.cards.map((card) => {
						const cartaDiv = document.createElement("div");
						const cartaImg = document.createElement("img");
						cartaImg.src = card.image;
						cartaDiv.id = "cartaDiv";
						cartaDiv.textContent = `${card.value} of ${card.suit}`;
						cartaDiv.appendChild(cartaImg);
						divCartas.appendChild(cartaDiv);
					});
				});

			promises.push(drawPromise);

			// Aguardar todas as promessas serem resolvidas
			await Promise.all(promises);
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
