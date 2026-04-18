(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	let filiais = [
		{
			cidade: "São Paulo",
			endereco: "Rua das Flores, 123",
			telefone: "11 1234-5678",
			gerente: "Carlos Silva",
		},
		{
			cidade: "Rio de Janeiro",
			endereco: "Av. Atlântica, 456",
			telefone: "21 2345-6789",
			gerente: "Ana Costa",
		},
		{
			cidade: "Belo Horizonte",
			endereco: "Av. Amazonas, 789",
			telefone: "31 3456-7890",
			gerente: "Pedro Santos",
		},
	];

	filiais.forEach((filial, index) => {
		console.log("Filial " + (index + 1) + ":");
		console.log("Cidade: " + filial.cidade);
		console.log("Endereço: " + filial.endereco);
		console.log("Telefone: " + filial.telefone);
		console.log("Gerente: " + filial.gerente);
		console.log("------------------------------");
	});

	const cidades = filiais.map((filial) => filial.cidade);
	console.log(cidades);
})();
