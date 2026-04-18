(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const inptEnunciado = document.querySelector("#inptEnunciado");

	const chkbox1 = document.querySelector("#chkbox1");
	const chkbox2 = document.querySelector("#chkbox2");
	const chkbox3 = document.querySelector("#chkbox3");
	const inptOpt1 = document.querySelector("#inptOpt1");
	const inptOpt2 = document.querySelector("#inptOpt2");
	const inptOpt3 = document.querySelector("#inptOpt3");

	const btnAdicionar = document.querySelector("#btnAdicionar");
	const divContainer = document.querySelector("#divContainer");

	let contaChkBox = 0; //Esse valor eu uso pra verificar a resposta correta

	//Aqui verifica se pode ou não prosseguir
	document.addEventListener("click", function () {
		if (
			(chkbox1.checked && chkbox2.checked) ||
			(chkbox1.checked && chkbox3.checked) ||
			(chkbox2.checked && chkbox3.checked) ||
			(!chkbox1.checked && !chkbox2.checked && !chkbox3.checked)
		) {
			btnAdicionar.disabled = true;
			contaChkBox = 0;
		} else {
			btnAdicionar.disabled = false;
		}
	});

	//Aqui cria o quiz //Nessa parte eu faço a verificação da resposta correta
	btnAdicionar.addEventListener("click", function () {
		if (chkbox1.checked) {
			contaChkBox = 1;
		}
		if (chkbox2.checked) {
			contaChkBox = 2;
		}
		if (chkbox3.checked) {
			contaChkBox = 3;
		}
		console.log(contaChkBox);

		//Aqui é onde eu crio os elementos
		const divQuiz = document.createElement("div");
		const txtQuestao = document.createElement("h3");
		const slctQuestao = document.createElement("select");

		//Caixas de opção pro select
		const opt0 = document.createElement("option");
		opt0.value = "opcao0";
		opt0.text = "Selecione uma Opção"; //Uma caixa de opção vazia pqsim

		const opt1 = document.createElement("option");
		opt1.value = "opcao1";
		opt1.text = inptOpt1.value;
		const opt2 = document.createElement("option");
		opt2.value = "opcao2";
		opt2.text = inptOpt2.value;
		const opt3 = document.createElement("option");
		opt3.value = "opcao3";
		opt3.text = inptOpt3.value;

		//Aqui eu penduro os filho tudo
		divContainer.appendChild(divQuiz);
		divQuiz.appendChild(txtQuestao);
		divQuiz.appendChild(slctQuestao);
		slctQuestao.appendChild(opt0);
		slctQuestao.appendChild(opt1);
		slctQuestao.appendChild(opt2);
		slctQuestao.appendChild(opt3);

		//Objeto da pergunta
		const quiz = {
			enunciado: inptEnunciado.value,
			resposta: contaChkBox,
		};

		txtQuestao.innerText += quiz.enunciado; //Valor do txtInput da pergunta

		//Aqui eu verifico a resposta correta e aplico o estilo
		slctQuestao.addEventListener("change", function () {
			if (this.selectedIndex === 0) {
				divQuiz.style.backgroundColor = "white"; //Sem resposta
			} else if (this.selectedIndex === quiz.resposta) {
				divQuiz.style.backgroundColor = "lightgreen"; //Resposta Correta
			} else {
				divQuiz.style.backgroundColor = "tomato"; //Resposta Errada
			}
		});
	});
})();
