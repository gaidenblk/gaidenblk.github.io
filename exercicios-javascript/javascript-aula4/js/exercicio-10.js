(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const segunda = document.querySelector("#segunda");
	const terca = document.querySelector("#terca");
	const quarta = document.querySelector("#quarta");
	const quinta = document.querySelector("#quinta");
	const sexta = document.querySelector("#sexta");
	const sabado = document.querySelector("#sabado");
	const domingo = document.querySelector("#domingo");

	const adiciona = document.querySelector("#adiciona");
	const data = document.querySelector("#data");

	const diaDaSemana = {
		0: domingo,
		1: segunda,
		2: terca,
		3: quarta,
		4: quinta,
		5: sexta,
		6: sabado,
	};

	const mesDoAno = {
		0: "janeiro",
		1: "fevereiro",
		2: "março",
		3: "abril",
		4: "maio",
		5: "junho",
		6: "julho",
		7: "agosto",
		8: "setembro",
		9: "outubro",
		10: "novembro",
		11: "dezembro",
	};

	adiciona.addEventListener("click", function () {
		const dataString = data.value;
		const dateObj = new Date(dataString + "T00:00:00");
		const diaSemana = dateObj.getDay();
		const diaMes = dateObj.getMonth();
		const diaData = dateObj.getDate();
		const tarefaInput = document.getElementById("tarefa");
		const concatenaData = `${diaData} / ${mesDoAno[diaMes]}`;
		const tarefa = `${concatenaData} ${tarefaInput.value}`;

		const tarefaDiv = document.createElement("div");
		tarefaDiv.classList.add("tarefa");
		tarefaDiv.textContent = tarefa;

		const diferencaDias = Math.ceil(
			(dateObj.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
		);

		if (diferencaDias > 7) {
			tarefaDiv.classList.add("azul");
		} else if (diferencaDias <= 7 && diferencaDias >= 1) {
			tarefaDiv.classList.add("vermelho");
		}

		diaDaSemana[diaSemana].appendChild(tarefaDiv);
	});
})();
