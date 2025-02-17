import brigadeiros from "./brigadeiros.js";
import cupcakes from "./cupcakes.js";
import doces from "./doces.js";
import { principal } from "./principal.js";

const router = {
	"/estudos/exercicios-javascript/javascript-aula14/exercicio-1.html": function () {
		return principal(); // Certifique-se de chamar a função, não apenas retorná-la
	},
	"/estudos/exercicios-javascript/javascript-aula14/brigadeiros": function () {
		return brigadeiros(); // Função deve retornar um nó válido
	},
	"/estudos/exercicios-javascript/javascript-aula14/cupcakes": function () {
		return cupcakes(); // Função deve retornar um nó válido
	},
	"/estudos/exercicios-javascript/javascript-aula14/doces": function () {
		return doces(); // Função deve retornar um nó válido
	},
};

export default router;
