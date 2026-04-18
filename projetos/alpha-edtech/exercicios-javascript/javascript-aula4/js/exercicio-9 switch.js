(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const btnExibeInfo = document.querySelector("#btnExibeInfo");

	btnExibeInfo.addEventListener("click", function () {
		const dataInput = document.getElementById("data");
		const dataSelecionada = new Date(dataInput.value);

		const dia = dataSelecionada.getUTCDate();
		const diaSemana = obterDiaSemana(dataSelecionada.getUTCDay());
		const mesNumerico = dataSelecionada.getUTCMonth() + 1;
		const mes = obterNomeMes(dataSelecionada.getUTCMonth());
		const ano = dataSelecionada.getFullYear();

		const informacoesDiv = document.getElementById("informacoes");
		informacoesDiv.innerHTML = `
                <p>Dia do mês: ${dia}</p>
                <p>Dia da semana: ${diaSemana}</p>
                <p>Mês no formato numérico: ${mesNumerico}</p>
                <p>Mês: ${mes}</p>
                <p>Ano: ${ano}</p>
            `;

		function obterDiaSemana(diaDaSemana) {
			switch (diaDaSemana) {
				case 0:
					return "Domingo";
				case 1:
					return "Segunda-feira";
				case 2:
					return "Terça-feira";
				case 3:
					return "Quarta-feira";
				case 4:
					return "Quinta-feira";
				case 5:
					return "Sexta-feira";
				case 6:
					return "Sábado";
				default:
					return "";
			}
		}

		function obterNomeMes(mes) {
			switch (mes) {
				case 0:
					return "Janeiro";
				case 1:
					return "Fevereiro";
				case 2:
					return "Março";
				case 3:
					return "Abril";
				case 4:
					return "Maio";
				case 5:
					return "Junho";
				case 6:
					return "Julho";
				case 7:
					return "Agosto";
				case 8:
					return "Setembro";
				case 9:
					return "Outubro";
				case 10:
					return "Novembro";
				case 11:
					return "Dezembro";
				default:
					return "";
			}
		}
	});
})();
