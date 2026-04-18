(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const inptNome = document.querySelector("#inptNome");
	const inptDescricao = document.querySelector("#inptDescricao");
	const inptPreco = document.querySelector("#inptPreco");
	const btnCadastrar = document.querySelector("#btnCadastrar");
	const tableContainer = document.querySelector("#tableContainer");
	const produtoContainer = document.querySelector("#produtoContainer");
	const produtoNome = document.querySelector("#produtoNome");
	const produtoDescricao = document.querySelector("#produtoDescricao");
	const produtoPreco = document.querySelector("#produtoPreco");
	const produtoID = document.querySelector("#produtoID");
	const editProdutoContainer = document.querySelector("#editProdutoContainer");
	const editNome = document.querySelector("#editNome");
	const editDescricao = document.querySelector("#editDescricao");
	const editPreco = document.querySelector("#editPreco");
	const editProdutoID = document.querySelector("#editProdutoID");
	const btnSalvar = document.querySelector("#btnSalvar");
	const btnCancelar = document.querySelector("#btnCancelar");

	let arrayProdutos = [];

	if (JSON.parse(localStorage.getItem("arrayProdutos")) !== null) {
		arrayProdutos = JSON.parse(localStorage.getItem("arrayProdutos"));
	}

	//Parâmetro max é para determinar quantos obj já tem no arrayProdutos
	function armazenaProduto(max, objLista) {
		for (let i = max; i < objLista.length; i++) {
			const dadosProdutos = [objLista[i].nome, objLista[i].preco, "edit", "delete"];
			const novaTr = document.createElement("tr");
			novaTr.id = objLista[i].id;
			for (let j = 0; j < dadosProdutos.length; j++) {
				const novatd = document.createElement("td");
				const novaSpan = document.createElement("span");
				novaSpan.innerText = dadosProdutos[j];
				if (j == 0) {
					novaSpan.addEventListener("click", () => {
						visualizaProduto(novaTr.id);
					});
				}
				if (j == 2) {
					novaSpan.classList.add("material-symbols-outlined");
					novaSpan.addEventListener("click", () => {
						modalEditaProduto(novaTr.id);
					});
				}
				if (j == 3) {
					novaSpan.classList.add("material-symbols-outlined");
					novaSpan.addEventListener("click", () => {
						deletaEntrada(novaTr.id);
					});
				}
				novatd.appendChild(novaSpan);
				novaTr.appendChild(novatd);
				tableContainer.appendChild(novaTr);
			}
		}
	}
	//Aqui eu já determino a construção da table a partir do indice 0 do arrayProdutos, caso tenha
	armazenaProduto(0, arrayProdutos);

	//O parâmetro targetId é o id do elemento que estou buscando, ele será usado na função
	//pegaId para retornar o index da arrayProdutos e retornar o dado do obj correto
	function visualizaProduto(targetId) {
		editProdutoContainer.style.display = "none";
		const index = pegaId(targetId);
		produtoContainer.style.display = "block";
		produtoNome.innerText = arrayProdutos[index].nome;
		produtoDescricao.innerText = arrayProdutos[index].descricao;
		produtoPreco.innerText = arrayProdutos[index].preco;
		produtoID.innerText = arrayProdutos[index].id;
		produtoContainer.addEventListener("click", () => {
			produtoContainer.style.display = "none";
		});
	}

	function deletaEntrada(targetId) {
		produtoContainer.style.display = "none";
		arrayProdutos.splice(pegaId(targetId), 1);
		event.target.parentElement.parentElement.remove();
		localStorage.setItem("arrayProdutos", JSON.stringify(arrayProdutos));
	}

	function modalEditaProduto(targetId) {
		produtoContainer.style.display = "none";
		const index = pegaId(targetId);
		editProdutoContainer.style.display = "flex";
		editNome.value = arrayProdutos[index].nome;
		editDescricao.value = arrayProdutos[index].descricao;
		editPreco.value = arrayProdutos[index].preco;
		editProdutoID.innerText = arrayProdutos[index].id;
	}

	btnCadastrar.addEventListener("click", () => {
		if (inptNome.value == "" || inptDescricao.value == "" || inptPreco.value == "") {
			alert("Os Valores não podem ser Vazios");
			return;
		}
		if (inptPreco.value <= 0) {
			alert("O Preço do Produto não pode ser menor ou igual a 0");
			return;
		}
		if (isNaN(inptPreco.value) || inptPreco.value % 1 !== 0) {
			alert("O Preço do Produto precisa ser um número inteiro");
			return;
		}
		const novoObj = {
			nome: inptNome.value,
			descricao: inptDescricao.value,
			preco: inptPreco.value,
			id: new Date().getTime(),
		};
		arrayProdutos.push(novoObj);
		//Como eu acabei de criar um novo obj e dei push no arrayProdutos, eu invoco
		//novamente a função armazenaProduto com o parâmetro baseado na posição do
		//novo obj que foi colocado no arrayProdutos
		armazenaProduto(arrayProdutos.length - 1, arrayProdutos);
		localStorage.setItem("arrayProdutos", JSON.stringify(arrayProdutos));
		inptNome.value = "";
		inptPreco.value = "";
		inptDescricao.value = "";
	});

	btnSalvar.addEventListener("click", () => {
		if (editNome.value == "" || editDescricao.value == "" || editPreco.value == "") {
			alert("Os Valores não podem ser Vazios");
			return;
		}
		if (editPreco.value <= 0) {
			alert("O Preço do Produto não pode ser menor ou igual a 0");
			return;
		}
		if (isNaN(editPreco.value) || editPreco.value % 1 !== 0) {
			alert("O Preço do Produto precisa ser um número inteiro");
			return;
		}
		const targetId = editProdutoID.innerText;
		const index = pegaId(targetId); // Encontra o índice do objeto na arrayProdutos

		// Atualiza os valores do objeto com base nos inputs
		arrayProdutos[index].nome = editNome.value;
		arrayProdutos[index].descricao = editDescricao.value;
		arrayProdutos[index].preco = editPreco.value;

		// Atualiza a tabela com os novos dados
		const tr = document.getElementById(targetId);
		const tdNome = tr.querySelector("td:first-child span");
		const tdPreco = tr.querySelector("td:nth-child(2) span");

		tdNome.innerText = editNome.value;
		tdPreco.innerText = editPreco.value;

		// Esconde o modal de edição
		editProdutoContainer.style.display = "none";

		// Salva a arrayProdutos atualizada no localStorage
		localStorage.setItem("arrayProdutos", JSON.stringify(arrayProdutos));
	});

	btnCancelar.addEventListener("click", () => {
		event.target.parentElement.style.display = "none";
	});

	//Aqui o parâmetro targetId é o id do elemento que quero pegar,
	//daí eu retorno o index do arrayProdutos da partir dele
	function pegaId(targetId) {
		let index;
		for (let i = 0; i < arrayProdutos.length; i++) {
			const nomeProd = arrayProdutos[i];
			if (targetId == nomeProd.id) {
				index = i;
			}
		}
		return index;
	}

	const inptBusca = document.querySelector("#inptBusca");
	const btnBuscar = document.querySelector("#btnBuscar");

	btnBuscar.addEventListener("click", () => {
		if (!inptBusca.value) {
			alert("Busca não pode estar vazia");
			return;
		}
		const termoBusca = inptBusca.value.toLowerCase(); // Converte o termo de busca para minúsculas
		const listaNova = arrayProdutos.filter((produto) => {
			const nome = produto.nome.toLowerCase();
			const descricao = produto.descricao.toLowerCase();
			return nome.includes(termoBusca) || descricao.includes(termoBusca);
		});
		console.log(listaNova);
		if (listaNova.length === 0) {
			alert("Não há dados com a descrição fornecida...");
			return;
		}
		if (listaNova != "") {
			tableContainer.innerHTML = "";
			armazenaProduto(0, listaNova);
		} else {
			tableContainer.innerHTML = "";
			armazenaProduto(0, arrayProdutos);
		}
	});
})();
