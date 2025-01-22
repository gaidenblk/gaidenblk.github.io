(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const paragrafo = document.querySelector("p");
	const btnPush = document.querySelector("#push");
	const btnPop = document.querySelector("#pop");
	let dadosArray = [];

	if (localStorage.getItem("dadosArray") != null) {
		const dataString = localStorage.getItem("dadosArray");
		dadosArray = JSON.parse(dataString);
		document.querySelector("#lista").innerText = JSON.stringify(dadosArray);
	}

	btnPush.addEventListener("click", () => {
		dadosArray.push(document.querySelector("input").value);
		localStorage.setItem("dadosArray", JSON.stringify(dadosArray));
		document.querySelector("#lista").innerText = JSON.stringify(dadosArray);
		console.log(dadosArray);
	});
	btnPop.addEventListener("click", () => {
		dadosArray.pop();
		localStorage.setItem("dadosArray", JSON.stringify(dadosArray));
		document.querySelector("#lista").innerText = JSON.stringify(dadosArray);
		console.log(dadosArray);
	});
})();
