(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	//Variante do If com Ternário
	const btnConverte = document.querySelector("#btnConverte");
	const numeroPorExtenso = document.querySelector("#numeroPorExtenso");

	btnConverte.addEventListener("click", function () {
		const numero = Number(document.querySelector("#numero").value);

		const numeroTexto =
			numero === 1
				? "Um"
				: numero === 2
				? "Dois"
				: numero === 3
				? "Três"
				: numero === 4
				? "Quatro"
				: numero === 5
				? "Cinco"
				: numero === 6
				? "Seis"
				: numero === 7
				? "Sete"
				: numero === 8
				? "Oito"
				: numero === 9
				? "Nove"
				: numero === 10
				? "Dez"
				: numero == ""
				? "Não tem nada"
				: "Não é um número válido";

		numeroPorExtenso.innerText = numeroTexto;
	});

	//Variante com Switch
	const btnConverte2 = document.querySelector("#btnConverte2");
	const numeroPorExtenso2 = document.querySelector("#numeroPorExtenso2");

	btnConverte2.addEventListener("click", function () {
		const numero2 = Number(document.querySelector("#numero2").value);

		switch (numero2) {
			case 1:
				numeroPorExtenso2.innerText = "Um";
				break;

			case 2:
				numeroPorExtenso2.innerText = "Dois";
				break;

			case 3:
				numeroPorExtenso2.innerText = "Três";
				break;

			case 4:
				numeroPorExtenso2.innerText = "Quatro";
				break;

			case 5:
				numeroPorExtenso2.innerText = "Cinco";
				break;

			case 6:
				numeroPorExtenso2.innerText = "Seis";
				break;

			case 7:
				numeroPorExtenso2.innerText = "Sete";
				break;

			case 8:
				numeroPorExtenso2.innerText = "Oito";
				break;

			case 9:
				numeroPorExtenso2.innerText = "Nove";
				break;

			case 10:
				numeroPorExtenso2.innerText = "Dez";
				break;

			default:
				if (numero2 == "") {
					numeroPorExtenso2.innerText = "Não tem Nada";
				} else {
					numeroPorExtenso2.innerText = "Não é um número válido";
				}
		}
	});

	//Variante sem Switch com Objeto
	const btnConverte3 = document.querySelector("#btnConverte3");
	const numeroPorExtenso3 = document.querySelector("#numeroPorExtenso3");

	btnConverte3.addEventListener("click", function () {
		const numero3 = Number(document.querySelector("#numero3").value);
		numeroPorExtenso3.innerText = objNumero[numero3];
		if (numero3 == "") {
			numeroPorExtenso3.innerText = "Não tem Nada";
			return;
		}
		if (numero3 > 10) {
			numeroPorExtenso3.innerText = "Não é um número válido";
		}
	});
	const objNumero = {
		1: "Um",
		2: "Dois",
		3: "Três",
		4: "Quatro",
		5: "Cinco",
		6: "Seis",
		7: "Sete",
		8: "Oito",
		9: "Nove",
		10: "Dez",
	};
})();
