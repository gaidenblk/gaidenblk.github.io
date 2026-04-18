(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA
	const button = document.querySelector("#btnExecuta");
	const consoleUl = document.querySelector("#console");
	const li1 = document.createElement("li");
	const li2 = document.createElement("li");
	li1.textContent = "1";
	li2.textContent = "2";
	consoleUl.append(li1);
	consoleUl.append(li2);
	console.log(1);
	console.log(2);
	button.addEventListener("click", function () {
		const li3 = document.createElement("li");
		const li4 = document.createElement("li");
		li3.textContent = "3";
		li4.textContent = "4";
		consoleUl.append(li3, li4);
		console.log(3);
		console.log(4);
	});
	const li5 = document.createElement("li");
	li5.textContent = "5";
	consoleUl.append(li5);
	console.log(5);
})();
