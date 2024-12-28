function header(){
    const dadosHeader = ["about","explore","journal","search"];
    const header = document.createElement("header");
        for(let i = 0; i < dadosHeader.length;i++){
            const novaDiv = document.createElement("div");
            const novaA = document.createElement("a");
            novaA.innerText = dadosHeader[i];
            novaA.href = `#${dadosHeader[i]}`;
            novaDiv.appendChild(novaA);
            header.appendChild(novaDiv);
        }
        return header;
}
export {header}