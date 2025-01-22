function validarInput(event) {
  const input = event.target;
  const regEx = /^[a-zA-Z\s]+$/;

  const novoValor = removerAcentos(input.value).replace(/[^a-zA-Z\s]/g, "");
  if (novoValor !== input.value) {
    input.value = novoValor;
  }
}

function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
