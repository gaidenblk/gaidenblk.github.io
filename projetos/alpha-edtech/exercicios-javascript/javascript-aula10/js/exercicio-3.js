(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let moviesArray;
	const tbody = document.getElementById("table-body");
	document.getElementById("import-button").addEventListener("click", async function () {
		async function loadMovieData() {
			const dbName = "MoviesDB";
			const storeName = "movies";

			// Abre ou cria o banco de dados
			const db = await openDatabase(dbName, storeName);

			// Verifica se o banco já tem dados
			const count = await getRecordCount(db, storeName);
			if (count > 0) {
				console.log("Carregando dados do IndexedDB...");
				const movies = await getAllRecords(db, storeName);
				return movies;
			}

			// Caso contrário, faz o download
			console.log("Baixando dados...");
			const response = await fetch("./assets/movie_metadata.json");
			const movies = await response.json();

			// Armazena no banco
			await saveAllRecords(db, storeName, movies);
			return movies;
		}

		// Função para abrir ou criar o banco
		function openDatabase(dbName, storeName) {
			return new Promise((resolve, reject) => {
				const request = indexedDB.open(dbName, 1);

				request.onupgradeneeded = (event) => {
					const db = event.target.result;
					db.createObjectStore(storeName, { keyPath: "id" }); // Usa um "id" único
				};

				request.onsuccess = (event) => resolve(event.target.result);
				request.onerror = (event) => reject(event.target.error);
			});
		}

		// Função para contar registros no banco
		function getRecordCount(db, storeName) {
			return new Promise((resolve, reject) => {
				const transaction = db.transaction(storeName, "readonly");
				const store = transaction.objectStore(storeName);
				const request = store.count();

				request.onsuccess = () => resolve(request.result);
				request.onerror = () => reject(request.error);
			});
		}

		// Função para salvar vários registros
		function saveAllRecords(db, storeName, data) {
			return new Promise((resolve, reject) => {
				const transaction = db.transaction(storeName, "readwrite");
				const store = transaction.objectStore(storeName);

				data.forEach((item, index) => {
					store.put({ ...item, id: index }); // Adiciona um ID único baseado no índice
				});

				transaction.oncomplete = () => resolve();
				transaction.onerror = (err) => reject(err);
			});
		}

		// Função para buscar todos os registros
		function getAllRecords(db, storeName) {
			return new Promise((resolve, reject) => {
				const transaction = db.transaction(storeName, "readonly");
				const store = transaction.objectStore(storeName);
				const request = store.getAll();

				request.onsuccess = () => resolve(request.result);
				request.onerror = () => reject(request.error);
			});
		}

		moviesArray = await loadMovieData();
		console.log("Filmes carregados!");

		if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
			console.error("Nenhum filme foi carregado ou o retorno está inválido.");
			return;
		}

		// Atualiza a interface do usuário
		document.getElementById("import-button").classList.add("hidden");
		document.getElementById("presentation-container").classList.remove("hidden");

		// Filtra e mapeia os dados
		moviesArray = moviesArray
			.filter((movie) => movie.title_year && movie.duration && movie.budget) // Exclui valores inválidos
			.map((movie) => ({
				title: movie.movie_title || "Título desconhecido",
				duration: Number(movie.duration) || 0,
				year: Number(movie.title_year) || 0,
				score: Number(movie.imdb_score) || 0,
				budget: Number(movie.budget) || 0,
			}));

		// Renderiza os filmes
		if (moviesArray.length > 0) {
			moviesArray.forEach(renderMovie);
		} else {
			console.warn("Nenhum filme válido para renderizar.");
		}
	});

	document.getElementById("apply-button").addEventListener("click", function () {
		const minDurationInput = document.getElementById("min-duration").value.trim();
		const minDuration = minDurationInput === "" ? -Infinity : Number(minDurationInput);
		const maxDurationInput = document.getElementById("max-duration").value.trim();
		const maxDuration = maxDurationInput === "" ? Infinity : Number(maxDurationInput);

		const minBudgetInput = document.getElementById("min-budget").value.trim();
		const minBudget = minBudgetInput === "" ? -Infinity : Number(minBudgetInput);
		const maxBudgetInput = document.getElementById("max-budget").value.trim();
		const maxBudget = maxBudgetInput === "" ? Infinity : Number(maxBudgetInput);

		const minScoreInput = document.getElementById("min-score").value.trim();
		const minScore = minScoreInput === "" ? -Infinity : Number(minScoreInput);
		const maxScoreInput = document.getElementById("max-score").value.trim();
		const maxScore = maxScoreInput === "" ? Infinity : Number(maxScoreInput);
		const sortProperty = document.getElementById("sort-property").value;
		// 1: "Crescente" ou "Decrescente"
		const sortOrder = document.getElementById("sort-order").value;
		tbody.innerHTML = "";
		// 2: colocamos um `sort()` após os `filter()`.
		// Checamos se a sortProperty é "Título" ou "Ano"
		// usando um switch.
		// No caso de "Título", ordenação crescente
		// significa ordem alfabética.
		moviesArray
			.filter((movie) => movie.duration >= minDuration && movie.duration <= maxDuration)
			.filter((movie) => movie.score >= minScore && movie.score <= maxScore)
			.filter((movie) => movie.budget >= minBudget && movie.budget <= maxBudget)
			.sort((movie1, movie2) => {
				switch (sortProperty) {
					case "Título":
						if (movie1.title < movie2.title) {
							// 2: se a ordem é crescente, então
							// o resultado é -1 (movie1 deve vir antes de movie2),
							// senão é 1 (movie1 deve vir depois de movie2).
							return sortOrder === "Crescente" ? -1 : 1;
						} else if (movie1.title > movie2.title) {
							// etc.
							return sortOrder === "Crescente" ? 1 : -1;
						} else {
							return 0;
						}
					case "Ano":
						if (movie1.year < movie2.year) {
							// etc.
							return sortOrder === "Crescente" ? -1 : 1;
						} else if (movie1.year > movie2.year) {
							// etc.
							return sortOrder === "Crescente" ? 1 : -1;
						} else {
							return 0;
						}
					case "Orçamento":
						if (movie1.budget < movie2.budget) {
							// etc.
							return sortOrder === "Crescente" ? -1 : 1;
						} else if (movie1.budget > movie2.budget) {
							// etc.
							return sortOrder === "Crescente" ? 1 : -1;
						} else {
							return 0;
						}
					case "Pontuação":
						if (movie1.score < movie2.score) {
							// etc.
							return sortOrder === "Crescente" ? -1 : 1;
						} else if (movie1.score > movie2.score) {
							// etc.
							return sortOrder === "Crescente" ? 1 : -1;
						} else {
							return 0;
						}
					case "Duração":
						if (movie1.duration < movie2.duration) {
							// etc.
							return sortOrder === "Crescente" ? -1 : 1;
						} else if (movie1.duration > movie2.duration) {
							// etc.
							return sortOrder === "Crescente" ? 1 : -1;
						} else {
							return 0;
						}
				}
			})
			.forEach(renderMovie);
	});

	// "renderizar filme" (renderizar quer dizer "exibir").
	function renderMovie(movie) {
		// Transformação da duração: minutos para horas e minutos
		const totalMinutes = Number(movie.duration) || 0;
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		const formattedDuration = hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;

		// Transformação do orçamento: valor abreviado (ex.: 11M)
		const budget = Number(movie.budget) || 0;
		const formattedBudget =
			budget >= 1e6
				? `${(budget / 1e6).toFixed(1)}M` // Milhões
				: `${(budget / 1e3).toFixed(1)}k`; // Milhares

		const tr = document.createElement("tr");
		tr.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.year}</td>
        <td>${movie.score}</td>
        <td>${formattedDuration}</td>
        <td>${formattedBudget}</td>
        `;
		tbody.appendChild(tr);
	}
})();
