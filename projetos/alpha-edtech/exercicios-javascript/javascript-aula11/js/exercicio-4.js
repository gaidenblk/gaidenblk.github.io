(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const btnButton = document.querySelector("#btnButton");
	const slctGenero = document.querySelector("#slctGenero");
	const inptNascimento = document.querySelector("#inptNascimento");
	const container = document.querySelector("#container");
	const person = {
		birthdate: "",
		gender: "",
		daysToDeath: function () {
			const umDia = 24 * 60 * 60 * 1000;
			const birthdate = new Date(this.birthdate);
			const diaHoje = new Date();

			// Calcula os dias vividos
			const diasVividos = (diaHoje.getTime() - birthdate.getTime()) / umDia;

			// Considera a expectativa de vida com anos bissextos
			const expectativaVida = this.gender === "m" ? 73.1 * 365.25 : 80.1 * 365.25;

			// Calcula os dias restantes
			return expectativaVida - diasVividos;
		},
	};

	btnButton.addEventListener("click", () => {
		person.birthdate = inptNascimento.value;
		person.gender = slctGenero.value;
		container.innerText = `Você tem aproximadamente ${Math.round(
			person.daysToDeath()
		)} dias restantes.`;
	});
})();
