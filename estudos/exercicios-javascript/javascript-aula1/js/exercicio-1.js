function iniciar() {
  let palavra = prompt("Digite uma Palavra");
  let tamanhoDaPalavra = palavra.length;
  let numeroDoMeio = tamanhoDaPalavra - 2;
  let ultimaLetra = palavra[tamanhoDaPalavra - 1];
  let resultado = palavra[0] + numeroDoMeio + ultimaLetra;
  alert(resultado);
}
