import { render } from "./principal.js";

export default function brigadeiros() {
	const divBrigadeiros = document.createElement("div");
	divBrigadeiros.innerText = "Seção de Brigadeiros";
	const button = document.createElement("button");
	button.innerText = "Voltar";
	button.addEventListener("click", () => {
		history.pushState(
			{},
			"",
			`/estudos/exercicios-javascript/javascript-aula14/exercicio-1.html`,
		);
		render(); // Chama render para atualizar o conteúdo da página
	});
	divBrigadeiros.appendChild(button);
	return divBrigadeiros;
}
