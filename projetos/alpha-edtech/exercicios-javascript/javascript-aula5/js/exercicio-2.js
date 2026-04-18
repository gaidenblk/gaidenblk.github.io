(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const taskListUl = document.getElementById("task-list");
	const inputTask = document.getElementById("input-task");

	document.getElementById("add-button").addEventListener("click", function () {
		const task = inputTask.value;
		inputTask.value = "";

		taskListUl.innerHTML += `<li>${task}</li>`;
	});
	//isso aqui faz o form parar de atualizar a pagina
	const form = document.querySelector("form");
	form.addEventListener("submit", function (agoraVai) {
		agoraVai.preventDefault();
		console.log("Deu Certo!");
	});
})();
