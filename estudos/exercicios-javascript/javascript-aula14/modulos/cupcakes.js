import { render } from "./principal.js";

export default function cupcakes() {
	const divCupcakes = document.createElement("div");
	divCupcakes.innerText = "Seção de Cupcakes";
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
	divCupcakes.appendChild(button);
	return divCupcakes;
}
