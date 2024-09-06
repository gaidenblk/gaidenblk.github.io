const button = document.querySelector("button");
function printText() {
  const inputValue = document.querySelector("input").value;
  alert(inputValue);
}
button.addEventListener("click", printText);
