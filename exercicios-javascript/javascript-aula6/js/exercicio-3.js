(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const ul = document.querySelector("ul");

	document.querySelector("button").addEventListener("click", function () {
		let count = 0;

		const li = document.createElement("li");
		li.style.display = "flex";

		const buttonMinus = document.createElement("button");
		const buttonPlus = document.createElement("button");

		buttonMinus.innerText = "-";
		buttonPlus.innerText = "+";

		const span = document.createElement("span");
		span.innerText = "0";

		li.appendChild(buttonMinus);
		li.appendChild(span);
		li.appendChild(buttonPlus);

		ul.appendChild(li);

		buttonMinus.addEventListener("click", function () {
			count--;
			span.innerText = count;
		});
		buttonPlus.addEventListener("click", function () {
			count++;
			span.innerText = count;
		});
	});
})();
