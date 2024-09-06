const botaoEbook = document.querySelector("#botaoEbook");
const containerModal = document.querySelector("#containerModal");
const modalEbook = document.querySelector("#modalEbook");
const modalSucesso = document.querySelector("#modalSucesso");
const botaoFecha = document.querySelector("#botaoFecha");
const botaoEnviar = document.querySelector("#enviar");

botaoEbook.addEventListener("click", function () {
  containerModal.style.display = "flex";
  modalEbook.style.display = "block";
});

botaoFecha.addEventListener("click", function () {
  containerModal.style.display = "none";
  modalEbook.style.display = "none";
});

botaoEnviar.addEventListener("click", function () {
  modalSucesso.style.display = "block";
  setTimeout(() => {
    modalSucesso.style = "none";
  }, 2000);
  setTimeout();
});
