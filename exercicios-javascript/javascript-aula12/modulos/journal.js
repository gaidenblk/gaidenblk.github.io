function journal(){
    const journal = document.createElement("section");
    journal.id = "journal";
    const novaH3 = document.createElement("h3");
    novaH3.innerText = "The Journal";
    const novaP = document.createElement("p");
    novaP.innerText = "Our favorite stories about public lands and oportunities for you to get involved in protecting your outdoor experiences"
    journal.appendChild(novaH3);
    journal.appendChild(novaP);

    const cards = [
        {
            date: "May 30, 2017", 
            title: "An Unforgettable", 
            description: "If you only have one day to visit Yosemite National park and you want to make most out of it", 
            image: "img/yosemite.jpg" 
         },
         {
            date: "May 28, 2017", 
            title: "Symphonies in Steel", 
            description: "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground", 
            image: "img/goldengate.jpg" 
         }
    ]
    const divCards = document.createElement("div");
        for(let i = 0; i < cards.length;i++){
            const novaDiv = document.createElement("div");
            const novaImg = document.createElement("img");
            novaImg.src = cards[i].image;
            const novaH4 = document.createElement("h4");
            novaH4.innerText = cards[i].date;
            const novaH3 = document.createElement("h3");
            novaH3.innerText = cards[i].title;
            const novaP = document.createElement("p");
            novaP.innerText = cards[i].description;
            novaDiv.appendChild(novaImg);
            novaDiv.appendChild(novaH4);
            novaDiv.appendChild(novaH3);
            novaDiv.appendChild(novaP);
            divCards.appendChild(novaDiv);
        }
    journal.appendChild(divCards);
    const novaA = document.createElement("a");
    novaA.innerText = "See More >";
    novaA.href = "#journal";
    journal.appendChild(novaA);

    return journal;
}
export {journal}