(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const divContainer = document.querySelector("#divContainer");
	const divContainerClima = document.querySelector("#divContainerClima");
	const slctEstado = document.querySelector("#slctEstado");

	fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
		.then((response) => response.json())
		.then((content) => {
			const estadosBrasil = content;
			for (let i = 0; i < estadosBrasil.length; i++) {
				const novaOpt = document.createElement("option");
				novaOpt.innerText = estadosBrasil[i].nome;
				novaOpt.value = estadosBrasil[i].sigla;
				slctEstado.appendChild(novaOpt);
			}
		})
		.catch((error) => console.error("Erro:", error));

	slctEstado.addEventListener("change", () => {
		if (slctEstado.value == "") {
			divContainer.removeChild(divContainer.firstChild);
			divContainer.removeChild(divContainer.lastChild);
			return;
		}
		fetch(
			`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${slctEstado.value}/distritos?orderBy=nome`,
		)
			.then((response) => response.json())
			.then((content) => {
				let cidadesBrasil = content;
				divContainer.innerText = "Selecione uma Região: ";
				const novoSelect = document.createElement("select");
				const novaOpt = document.createElement("option");
				novaOpt.innerText = "Selecione uma Cidade";
				novoSelect.appendChild(novaOpt);
				for (let i = 0; i < cidadesBrasil.length; i++) {
					const novaOpt = document.createElement("option");
					novaOpt.innerText = cidadesBrasil[i].nome;
					novaOpt.value = cidadesBrasil[i].municipio.id;
					novoSelect.appendChild(novaOpt);
				}
				divContainer.appendChild(novoSelect);
				novoSelect.addEventListener("change", () => {
					if (novoSelect.value.startsWith("S")) {
						return;
					}
					divContainerClima.innerText = "Carregando Dados...";

					fetch(`https://apiprevmet3.inmet.gov.br/previsao/${novoSelect.value}`)
						.then((response) => response.json())
						.then((data) => {
							const obj = Object.values(data)[0];
							const datas = [obterData(0), obterData(1), obterData(2), obterData(3)];
							const dados = ["manha", "tarde", "noite"];

							divContainerClima.innerHTML = `
        <h2>${novoSelect.options[novoSelect.selectedIndex].textContent}</h2>
            <table>
            <tr style="border: double black;">
                <th>Data</th>
                <th colspan="2">Dia da Semana</th>
                <th colspan="2">Resumo</th>
                <th>Temp Mín</th>
                <th>Temp Máx</th>
            </tr>
            <tr>
                <td>${datas[0]}</td>
                <td>${obj[datas[0]][dados[0]].dia_semana}</td>
                <td>${dados[0]}</td>
                <td>${obj[datas[0]][dados[0]].resumo}</td>
                <td><img src="${obj[datas[0]][dados[0]].icone}"></td>
                <td>${obj[datas[0]][dados[0]].temp_min}</td>
                <td>${obj[datas[0]][dados[0]].temp_max}</td>
            </tr>
            <tr>
                <td>${datas[0]}</td>
                <td>${obj[datas[0]][dados[1]].dia_semana}</td>
                <td>${dados[1]}</td>
                <td>${obj[datas[0]][dados[1]].resumo}</td>
                <td><img src="${obj[datas[0]][dados[1]].icone}"></td>
                <td>${obj[datas[0]][dados[1]].temp_min}</td>
                <td>${obj[datas[0]][dados[1]].temp_max}</td>
            </tr>
            <tr>
                <td>${datas[0]}</td>
                <td>${obj[datas[0]][dados[2]].dia_semana}</td>
                <td>${dados[2]}</td>
                <td>${obj[datas[0]][dados[2]].resumo}</td>
                <td><img src="${obj[datas[0]][dados[2]].icone}"></td>
                <td>${obj[datas[0]][dados[2]].temp_min}</td>
                <td>${obj[datas[0]][dados[2]].temp_max}</td>
            </tr>
            <tr>
                <td>${datas[1]}</td>
                <td>${obj[datas[1]][dados[0]].dia_semana}</td>
                <td>${dados[0]}</td>
                <td>${obj[datas[1]][dados[0]].resumo}</td>
                <td><img src="${obj[datas[1]][dados[0]].icone}"></td>
                <td>${obj[datas[1]][dados[0]].temp_min}</td>
                <td>${obj[datas[1]][dados[0]].temp_max}</td>
            </tr>
            <tr>
                <td>${datas[1]}</td>
                <td>${obj[datas[1]][dados[1]].dia_semana}</td>
                <td>${dados[1]}</td>
                <td>${obj[datas[1]][dados[1]].resumo}</td>
                <td><img src="${obj[datas[1]][dados[1]].icone}"></td>
                <td>${obj[datas[1]][dados[1]].temp_min}</td>
                <td>${obj[datas[1]][dados[1]].temp_max}</td>
            </tr>
            <tr>
                <td>${datas[1]}</td>
                <td>${obj[datas[1]][dados[2]].dia_semana}</td>
                <td>${dados[2]}</td>
                <td>${obj[datas[1]][dados[2]].resumo}</td>
                <td><img src="${obj[datas[1]][dados[2]].icone}"></td>
                <td>${obj[datas[1]][dados[2]].temp_min}</td>
                <td>${obj[datas[1]][dados[2]].temp_max}</td>
            </tr>
            <tr>
                <td>${datas[2]}</td>
                <td>${obj[datas[2]].dia_semana}</td>
                <td>${dados[0]}</td>
                <td>${obj[datas[2]].resumo}</td>
                <td><img src="${obj[datas[2]].icone}"></td>
                <td>${obj[datas[2]].temp_min}</td>
                <td>${obj[datas[2]].temp_max}</td>
            </tr>
            <tr>
                <td>${datas[3]}</td>
                <td>${obj[datas[3]].dia_semana}</td>
                <td>${dados[0]}</td>
                <td>${obj[datas[3]].resumo}</td>
                <td><img src="${obj[datas[3]].icone}"></td>
                <td>${obj[datas[3]].temp_min}</td>
                <td>${obj[datas[3]].temp_max}</td>
            </tr>
            </table>`;
							divContainer.appendChild(divContainerClima);
						})
						.catch((error) => {
							divContainer.innerText = "Erro na requisição:" + error;
							console.error("Erro na requisição:", error);
						});
				});
			})
			.catch((error) => console.error("Erro:", error));
	});

	function obterData(n) {
		const data = new Date();
		data.setDate(data.getDate() + n);
		const dataFormatada = data.toLocaleString("pt-BR", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});
		return dataFormatada;
	}
})();
