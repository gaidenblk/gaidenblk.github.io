(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const ul = document.querySelector("ul");
	const input = document.querySelector("input");
	let count = 0;

	document.querySelector("button").addEventListener("click", function () {
		const li = document.createElement("li");
		li.style.display = "block";
		li.style.width = "200px";
		li.innerText = input.value;
		li.dataset.count = 0;
		ul.appendChild(li);

		li.addEventListener("click", function () {
			count = Number(li.dataset.count);
			count++;
			if (count == 1) {
				li.style.backgroundColor = "yellow";
			}
			if (count == 2) {
				li.style.backgroundColor = "red";
			}
			li.dataset.count = count;
			if (count > 2) {
				count = 2;
			}
		});
	});
})();
