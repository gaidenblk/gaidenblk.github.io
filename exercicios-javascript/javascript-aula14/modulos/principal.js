import router from "./router.js";

export function principal() {
	const secoes = ["Brigadeiros", "Cupcakes", "Doces"];
	const divPrincipal = document.createElement("div");
	for (let i = 0; i < secoes.length; i++) {
		const novoButton = document.createElement("button");
		novoButton.innerText = secoes[i];
		novoButton.addEventListener("click", () => {
			history.pushState(
				{},
				"",
				`/exercicios-javascript/javascript-aula14/${secoes[i].toLowerCase()}`,
			);
			render(); // Chama render para atualizar o conteúdo da página
		});
		divPrincipal.appendChild(novoButton);
	}
	return divPrincipal;
}

export function render() {
	// Obtém o caminho atual da URL
	const path = window.location.pathname;

	// Verifica se existe uma função no router para o caminho atual
	const renderPage = router[path] || router["/exercicio-1.html"];

	// Verifica se a função foi encontrada no router e a executa
	if (typeof renderPage === "function") {
		const content = renderPage(); // Executa a função para obter o conteúdo

		// Se já existir um conteúdo na página, remove antes de adicionar o novo
		const rootElement = document.getElementById("root");
		if (rootElement) {
			rootElement.innerHTML = ""; // Limpa o conteúdo anterior
			rootElement.appendChild(content);
		}
	} else {
		console.error("Não foi encontrada uma função correspondente no router.");
	}
}

// Inicializa a renderização da página ao carregar a aplicação
window.addEventListener("load", render);

// Também escuta as mudanças de estado de navegação (histórico)
window.addEventListener("popstate", render);
