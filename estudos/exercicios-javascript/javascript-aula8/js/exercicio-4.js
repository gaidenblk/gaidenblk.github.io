(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const containerPrincipal = document.querySelector("#containerPrincipal");
	const containerReceitas = document.querySelector("#containerReceitas");
	const btnAdiciona = document.querySelector("#btnAdiciona");
	const novaReceita = document.querySelector("#novaReceita");
	const divReceita = document.querySelector("#divReceita");
	const listaReceitas = [];

	btnAdiciona.addEventListener("click", () => {
		const objReceita = {
			titulo: "Sem Título",
			ingredientes: "",
			modoPreparo: "",
		};
		listaReceitas.push(objReceita);

		const novaDiv = document.createElement("div");
		novaDiv.classList.add("novaDiv");
		novaDiv.innerHTML = objReceita.titulo;
		novaDiv.addEventListener("click", () => {
			const todasDivs = document.querySelectorAll(".novaDiv");
			todasDivs.forEach((div) => div.classList.remove("selecionado"));
			novaDiv.classList.add("selecionado");
			divReceita.innerHTML = `
              <label for="inputTitulo">Título:</label>
              <input type="text" id="inputTitulo" value="${objReceita.titulo}"></br>
              <label for="textareaIngredientes">Ingredientes:</label></br>
              <textarea id="textareaIngredientes" rows="5">${objReceita.ingredientes}</textarea></br>
              <label for="textareaModoPreparo">Modo de Preparo:</label></br>
              <textarea id="textareaModoPreparo" rows="5">${objReceita.modoPreparo}</textarea>
              <button class="btnDeleta">Deleta</button>
          `;
			const btnDeleta = document.querySelector(".btnDeleta");
			btnDeleta.addEventListener("click", () => {
				const index = listaReceitas.findIndex(
					(receita) => receita.titulo === objReceita.titulo
				);
				listaReceitas.splice(index, 1);
				novaReceita.removeChild(novaDiv);
				divReceita.innerHTML = "";
			});
			const inputTitulo = document.querySelector("#inputTitulo");
			const textareaIngredientes = document.querySelector("#textareaIngredientes");
			const textareaModoPreparo = document.querySelector("#textareaModoPreparo");
			inputTitulo.addEventListener("input", (event) => {
				objReceita.titulo = event.target.value;
				novaDiv.innerHTML = objReceita.titulo;
			});
			textareaIngredientes.addEventListener("input", (event) => {
				objReceita.ingredientes = event.target.value;
			});
			textareaModoPreparo.addEventListener("input", (event) => {
				objReceita.modoPreparo = event.target.value;
			});
		});
		novaReceita.appendChild(novaDiv);
	});
})();
