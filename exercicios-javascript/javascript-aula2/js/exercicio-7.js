function removeBordas() {
  // Remove a borda de todas as divs
  document.querySelectorAll("#container > div").forEach((div) => {
    div.style.borderColor = "black";
  });
}

function aplicaBorda(element) {
  removeBordas();
  // Aplica a borda vermelha ao elemento clicado
  element.style.borderColor = "red";
}
