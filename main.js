document.addEventListener("click", function (event) {
	const target = event.target;

	if (target.tagName === "A" && target.classList.contains("link")) {
		event.preventDefault(); // Impede a navegação padrão
		const url = target.getAttribute("href"); // Obtém o URL do link
		console.log("URL clicada:", url);

		let actualState = window.history.state;
		console.log("Estado atual:", actualState);

		// Verificar se o estado atual existe e se a URL é diferente
		if (!actualState || actualState.url !== url) {
			// Carregar conteúdo via AJAX
			carregarConteudo(url);

			// Atualizar o histórico do navegador
			console.log("Estado diferente, atualizando pushState");
			window.history.pushState({ url: url }, "", url);
		}
	}
});

function carregarConteudo(url) {
	// Verifica se a URL está duplicada e corrige se necessário
	if (url.startsWith(window.location.origin)) {
		url = url.replace(window.location.origin, "");
	}
	fetch(url)
		.then((response) => response.text())
		.then((html) => {
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, "text/html");

			// Realiza procedimento de transição de telas com animação
			document.querySelector("#content").style.animation = "sumir 0.5s ease";

			// Complementa fim da animação
			setTimeout(
				() => (
					// Carrega o CSS primeiro e aguarda o carregamento
					carregarCSS(doc),
					// Atualiza o conteúdo da página
					(document.querySelector("#content").innerHTML =
						doc.querySelector("#content").innerHTML),
					// Executar os scripts da nova página manualmente
					executarScripts(doc),
					// Finaliza com a animação
					(document.querySelector("#content").style.animation = "aparecer 1s ease")
				),
				350
			);

			// Atualiza o título da página, opcionalmente
			document.title = doc.title;
		})
		.catch((error) => console.error("Erro ao carregar o conteúdo:", error));
}

function carregarCSS(doc) {
	const head = document.querySelector("head");

	// Seleciona todos os <link> que apontam para CSS já existentes no head
	const existingLinks = Array.from(head.querySelectorAll('link[rel="stylesheet"]'));

	// Seleciona todos os <link> que apontam para CSS no novo documento
	const newLinks = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'));

	const promises = [];

	// Remove CSS que não está mais presente no novo documento
	existingLinks.forEach((existingLink) => {
		const isPresentInNewDoc = newLinks.some(
			(newLink) => newLink.href === existingLink.href
		);
		if (!isPresentInNewDoc) {
			existingLink.remove();
		}
	});

	newLinks.forEach((newLink) => {
		const existingLink = document.querySelector(`link[href="${newLink.href}"]`);
		if (!existingLink) {
			const newCSSLink = document.createElement("link");
			newCSSLink.rel = "stylesheet";
			newCSSLink.href = newLink.href;
			newCSSLink.classList.add("dynamic-css"); // Adiciona uma classe para fácil remoção futura
			head.appendChild(newCSSLink);
			// Adiciona uma promise para aguardar o carregamento do CSS
			promises.push(
				new Promise((resolve) => {
					newCSSLink.onload = resolve;
				})
			);
		}
	});

	return Promise.all(promises); // Retorna uma promise que resolve quando todos os CSS estão carregados
}

let scriptsCarregados = []; // Lista de scripts atualmente carregados

function carregarScript(url) {
	return new Promise((resolve, reject) => {
		// Cria o novo script
		const script = document.createElement("script");
		script.src = url;
		script.onload = () => {
			// Armazena a referência do novo script carregado
			scriptsCarregados.push(script);
			resolve();
		};
		script.onerror = () => reject(new Error(`Erro ao carregar o script: ${url}`));
		document.body.appendChild(script);
	});
}

function removerScriptsAnteriores() {
	// Remove todos os scripts, exceto o main.js
	document.querySelectorAll("script").forEach((script) => {
		if (script.src && script.src.includes("main.js")) {
			// Ignora o main.js
			return;
		}
		if (script.parentNode) {
			script.parentNode.removeChild(script);
		}
	});
	// Limpa a lista após a remoção
	scriptsCarregados = [];
}

function executarScripts(doc) {
	const scripts = doc.querySelectorAll("script");
	const promises = [];

	// Remove todos os scripts da página anterior antes de carregar novos
	removerScriptsAnteriores();

	scripts.forEach((script) => {
		if (script.src && !script.src.includes("main.js")) {
			// Ignora o main.js
			promises.push(carregarScript(script.src));
		} else if (!script.src) {
			// Scripts inline são executados diretamente
			const newScript = document.createElement("script");
			newScript.innerHTML = script.innerHTML;
			document.body.appendChild(newScript);
		}
	});

	return Promise.all(promises);
}

window.addEventListener("popstate", () => {
	carregarConteudo(window.location.pathname); // Recarrega o conteúdo da URL
});

// Define o estado inicial ao carregar a página
window.history.replaceState({ url: window.location.pathname }, "", window.location.pathname);
