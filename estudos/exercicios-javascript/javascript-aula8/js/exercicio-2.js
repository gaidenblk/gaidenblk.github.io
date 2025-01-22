(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const input = document.getElementById("input-image");
	const buttonAdd = document.getElementById("button-add");
	const btnDeleta = document.querySelector("#deleta");
	const buttonPrev = document.getElementById("button-prev");
	const buttonNext = document.getElementById("button-next");
	const img = document.getElementById("img-display");
	let currentIndex;
	const images = [];
	buttonAdd.addEventListener("click", function () {
		const imageLink = input.value;
		img.src = imageLink;
		images.push(imageLink);
		currentIndex = images.length - 1;
	});
	btnDeleta.addEventListener("click", () => {
		if (currentIndex === images.length - 1 && currentIndex >= 0) {
			images.pop();
			currentIndex--;
		} else if (currentIndex >= 0 && currentIndex < images.length - 1) {
			images.splice(currentIndex, 1);
			currentIndex--;
		}
		const imageLink = images[currentIndex];
		img.src = imageLink;
	});
	buttonPrev.addEventListener("click", function () {
		if (currentIndex === 0) {
			currentIndex = images.length - 1;
		} else {
			currentIndex--;
		}
		const imageLink = images[currentIndex];
		img.src = imageLink;
	});
	buttonNext.addEventListener("click", function () {
		if (currentIndex === images.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
		const imageLink = images[currentIndex];
		img.src = imageLink;
	});
})();
