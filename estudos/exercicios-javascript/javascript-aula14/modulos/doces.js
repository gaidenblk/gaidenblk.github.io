import { render } from "./principal.js";

export default function doces() {
	const divDoces = document.createElement("div");
	divDoces.innerText = "Seção de Doces";
	const button = document.createElement("button");
	button.innerText = "Voltar";
	button.addEventListener("click", () => {
		history.pushState({}, "", `/exercicios-javascript/javascript-aula14/exercicio-1.html`);
		render(); // Chama render para atualizar o conteúdo da página
	});
	divDoces.appendChild(button);
	return divDoces;
}
