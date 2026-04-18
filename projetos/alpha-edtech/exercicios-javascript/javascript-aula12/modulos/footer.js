function footer(){
    const footer = document.createElement("footer");
    const novaImg = document.createElement("img");
    novaImg.src = "img/footerbg.jpg";
    const novaDiv = document.createElement("div");
    const novaP = document.createElement("p");
    novaP.innerText = "The Great Outdoors - All Rights Reserved";
    novaDiv.appendChild(novaP);

    const dadosFooter = ["about","explore","journal","search"];
        for(let i = 0; i < dadosFooter.length; i++){
            const novaA = document.createElement("a");
            novaA.innerText = dadosFooter[i];
            novaA.href = `#${dadosFooter[i]}`;
            novaDiv.appendChild(novaA);
        }
    footer.appendChild(novaImg);
    footer.appendChild(novaDiv);

    return footer;
}
export {footer}