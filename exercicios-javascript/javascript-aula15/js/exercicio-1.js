(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	const container = document.querySelector("#container");
	const mapa = document.querySelector("#mapa");
	const containerMapa = document.querySelector("#containerMapa");
	const btnMapa = document.querySelector("#btnMapa");
	const btnFecharMapa = document.querySelector("#fecharMapa");
	const btnConsultar = document.querySelector("#btnConsultar");
	mapa.src = "";
	btnConsultar.addEventListener("click", () => {
		const inptCep = document.querySelector("#inptCep").value;
		const regExCep = /^\d{5}-\d{3}$/;
		mapa.src = "";
		if (inptCep == "" || !regExCep.test(inptCep)) {
			container.innerText = "Número Inválido!";
			return;
		}

		btnFecharMapa.addEventListener("click", () => {
			containerMapa.style.display = "none";
			btnMapa.style.display = "block";
		});

		fetch(`https://cep.awesomeapi.com.br/json/${inptCep}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.code == "not_found") {
					container.innerText = data.message;
					return;
				}
				container.innerHTML = `
        <p>Endereço: ${data.address}</p>
        <p>Bairro: ${data.district}</p>
        <p>Cidade: ${data.city}</p>
        <p>Estado: ${data.state}</p>
        <p>Latitude: ${data.lat}</p>
        <p>Longitude: ${data.lng}</p>
        `;
				btnMapa.style.display = "block";
				btnMapa.addEventListener("click", () => {
					btnMapa.style.display = "none";
					containerMapa.style.display = "block";
					btnMapa.disabled = true;
					btnConsultar.disabled = true;
					document.querySelector("body").style.cursor = "wait";

					mapa.src = `https://maps.google.com/maps?q=${data.lat},${data.lng}&hl=pt&z=14&output=embed`;
					mapa.onload = () => {
						document.querySelector("body").style.cursor = "default";
						btnFecharMapa.style.display = "block";
						btnMapa.disabled = false;
						btnConsultar.disabled = false;
					};
				});
			});
	});
})();
