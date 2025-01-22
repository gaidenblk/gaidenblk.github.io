(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const btnFormatar = document.querySelector("#btnFormatar");
	const txtDados = document.querySelector("#txtDados");
	const tableContainer = document.querySelector("#tableContainer");

	btnFormatar.addEventListener("click", () => {
		const dadosBrutos = txtDados.value.split("\n").filter((valor) => valor.trim() !== "");
		const listaEventos = dadosBrutos.map((evento) => {
			const lista = ([eventoNome, eventoData, eventoHora] = evento.split(","));
			const eventDateTime = new Date(`${eventoData}T${eventoHora}`);
			const formattedDate = eventDateTime.toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			});
			const formattedDayOfWeek = eventDateTime.toLocaleDateString("pt-BR", {
				weekday: "long",
			});
			const formattedTime = eventDateTime.toLocaleTimeString("pt-BR", {
				hour: "2-digit",
				minute: "2-digit",
			});

			return {
				name: eventoNome.trim(),
				dayMonthYear: formattedDate,
				dayOfWeek: formattedDayOfWeek,
				hour: formattedTime,
			};
		});

		tableContainer.style.display = "block";
		listaEventos.forEach((evento) => {
			const novaTr = document.createElement("tr");
			novaTr.innerHTML = `
                <td>${evento.name}</td>
                <td>${evento.dayMonthYear}</td>
                <td>${evento.dayOfWeek}</td>
                <td>${evento.hour}</td>
                `;
			tableContainer.appendChild(novaTr);
		});
	});
})();
