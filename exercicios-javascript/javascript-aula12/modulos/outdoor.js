function outdoor(){
    const outdoor = document.createElement("section");
    outdoor.id = "about";
    const novaDiv = document.createElement("div");
    const novaH1 = document.createElement("h1");
    novaH1.innerText = "The Great Outdoors";
    const novaP = document.createElement("p");
    novaP.innerText = "Wander Often. Wonder Aways.";
    const novaImg = document.createElement("img");
    novaImg.src = "img/background.jpg";
    novaDiv.appendChild(novaImg);
    novaDiv.appendChild(novaH1);
    novaDiv.appendChild(novaP);
    outdoor.appendChild(novaDiv);

    return outdoor;
}
export {outdoor}