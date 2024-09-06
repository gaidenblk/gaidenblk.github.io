function iniciar() {
  const nome = prompt("Digite o seu nome");
  const idade = prompt("Digite a sua idade");
  const resultado = "Olá, " + nome[0] + ". Você nasceu em " + (2024 - idade);
  alert(resultado);
}
