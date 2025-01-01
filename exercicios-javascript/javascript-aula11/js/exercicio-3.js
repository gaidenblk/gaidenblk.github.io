(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	document.querySelector("#btnVerificar").addEventListener("click", function () {
		const name = document.getElementById("name-input").value;
		const phone = document.getElementById("telephone-input").value;

		if (!nameIsValid(name) || !phoneIsValid(phone)) {
			showError();
		} else {
			showSuccess();
		}
	});

	function showSuccess() {
		const container = document.createElement("div");
		container.style.position = "absolute";
		container.style.right = "24px";
		container.style.bottom = "24px";
		container.style.minWidth = "300px";
		container.style.minHeight = "32px";
		container.style.padding = "8px 24px";
		container.style.display = "flex";
		container.style.alignItems = "center";
		container.style.justifyContent = "space-between";
		container.style.backgroundColor = "seagreen";
		container.style.color = "white";
		container.style.borderRadius = "4px";
		container.style.boxShadow =
			"0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149)";
		const messageDiv = document.createElement("div");
		// Colocar a string na div
		messageDiv.innerText = "Cadastro bem sucedido";
		const closeButton = document.createElement("div");
		closeButton.innerText = "X";
		closeButton.style.cursor = "pointer";
		closeButton.style.color = "red";
		container.appendChild(messageDiv);
		container.appendChild(closeButton);
		document.body.appendChild(container);

		setTimeout(() => {
			container.remove();
		}, 2000);
		closeButton.addEventListener("click", function () {
			container.remove();
		});
	}

	function showError() {
		const container = document.createElement("div");
		container.style.position = "absolute";
		container.style.right = "24px";
		container.style.bottom = "24px";
		container.style.minWidth = "300px";
		container.style.minHeight = "32px";
		container.style.padding = "8px 24px";
		container.style.display = "flex";
		container.style.alignItems = "center";
		container.style.justifyContent = "space-between";
		container.style.backgroundColor = "tomato";
		container.style.color = "white";
		container.style.borderRadius = "4px";
		container.style.boxShadow =
			"0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149)";
		const messageDiv = document.createElement("div");
		// Colocar a string na div
		messageDiv.innerText = "Dados inválidos";
		const closeButton = document.createElement("div");
		closeButton.innerText = "X";
		closeButton.style.cursor = "pointer";
		closeButton.style.color = "red";
		container.appendChild(messageDiv);
		container.appendChild(closeButton);
		document.body.appendChild(container);

		setTimeout(() => {
			container.remove();
		}, 2000);
		closeButton.addEventListener("click", function () {
			container.remove();
		});
	}

	function nameIsValid(nome) {
		if (nome.trim().length > 2 && nome !== "") {
			return true;
		} else {
			return false;
		}
	}

	function phoneIsValid(phone) {
		const regEx = /^\(\d{2}\) \d{4,5}-\d{4}$/;
		return regEx.test(phone);
	}
})();
