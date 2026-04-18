function explore() {
	const explore = document.createElement("section");
	explore.id = "explore";
	const divH3 = document.createElement("div");
	const novaH3 = document.createElement("h3");
	novaH3.innerText = "Explore the World";
	const novaP = document.createElement("p");
	novaP.innerText =
		"Sed ut lacus dapibus. Mauris sodales malesuada euismod. Aliquam dapibus eleifend gravida. Suspendisse non viverra dolor, non venenatis dolor. Fusce molestie rhoncus mi eget condimentum. Curabitur viverra ante vel dignissim tristique.";
	divH3.appendChild(novaH3);
	divH3.appendChild(novaP);
	explore.appendChild(divH3);
	const divCards = document.createElement("div");
	divCards.id = "cards";
	const cards = [
		{
			city: "Nasdashas",
			country: "Norway",
			image: "img/noruega.jpg",
		},
		{
			city: "Antelope Canyon",
			country: "USA",
			image: "img/antelopecanyon.jpg",
		},
		{
			city: "Grosslockner",
			country: "Austria",
			image: "img/grossglockner.jpg",
		},
	];
	for (let i = 0; i < cards.length; i++) {
		const novaDiv = document.createElement("div");
		const novaH3 = document.createElement("h3");
		novaH3.innerText = cards[i].city;
		const novaP = document.createElement("p");
		novaP.innerText = cards[i].country;
		const novaImg = document.createElement("img");
		novaImg.src = cards[i].image;
		novaImg.alt = cards[i].city;
		novaDiv.appendChild(novaH3);
		novaDiv.appendChild(novaP);
		novaDiv.appendChild(novaImg);
		divCards.appendChild(novaDiv);
	}
	explore.appendChild(divCards);
	const novaA = document.createElement("a");
	novaA.innerText = "See More >";
	novaA.href = "#explore";
	explore.appendChild(novaA);

	return explore;
}
export { explore };
