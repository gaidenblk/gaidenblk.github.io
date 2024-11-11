(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const ul = document.querySelector("ul");
	const input = document.querySelector("input");

	document.querySelector("button").addEventListener("click", function () {
		let count = 0;

		const li = document.createElement("li");
		li.style.display = "block";
		li.style.width = "200px";
		li.innerText = input.value;

		ul.appendChild(li);

		li.addEventListener("click", function () {
			count++;
			if (count == 1) {
				li.style.backgroundColor = "yellow";
			}
			if (count == 2) {
				li.style.backgroundColor = "red";
			}
		});
		if (count > 2) {
			count = 2;
		}
	});
})();
