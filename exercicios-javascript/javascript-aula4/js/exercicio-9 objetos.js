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
    const diasSemana = {
      0: "Domingo",
      1: "Segunda-feira",
      2: "Terça-feira",
      3: "Quarta-feira",
      4: "Quinta-feira",
      5: "Sexta-feira",
      6: "Sábado",
    };
    return diasSemana[diaDaSemana] || "";
  }

  function obterNomeMes(mes) {
    const meses = {
      0: "Janeiro",
      1: "Fevereiro",
      2: "Março",
      3: "Abril",
      4: "Maio",
      5: "Junho",
      6: "Julho",
      7: "Agosto",
      8: "Setembro",
      9: "Outubro",
      10: "Novembro",
      11: "Dezembro",
    };
    return meses[mes] || "";
  }
});
