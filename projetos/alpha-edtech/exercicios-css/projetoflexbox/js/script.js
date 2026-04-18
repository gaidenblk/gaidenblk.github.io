(function () {
	// IIFE adicionado para evitar redeclaração de variavel na SPA

	var flexDiv = document.getElementById("flexDiv");

	var btnColuna = document.getElementById("btnColuna");
	btnColuna.onclick = function () {
		flexDiv.style.flexDirection = "column";
	};

	var btnRvsColuna = document.getElementById("btnRvsColuna");
	btnRvsColuna.onclick = function () {
		flexDiv.style.flexDirection = "column-reverse";
	};

	var btnLinha = document.getElementById("btnLinha");
	btnLinha.onclick = function () {
		flexDiv.style.flexDirection = "row";
	};

	var btnRvsLinha = document.getElementById("btnRvsLinha");
	btnRvsLinha.onclick = function () {
		flexDiv.style.flexDirection = "row-reverse";
	};

	var btnFlexwrap = document.getElementById("btnFlexwrap");
	btnFlexwrap.onclick = function () {
		if (flexDiv.style.flexWrap != "wrap") {
			flexDiv.style.flexWrap = "wrap";
		} else {
			flexDiv.style.flexWrap = "nowrap";
		}
	};

	var jacima = true;
	var jabaixo = false;
	var btnAlignitems = document.getElementById("btnAlignitems");
	btnAlignitems.onclick = function () {
		if (flexDiv.style.alignItems != "center") {
			flexDiv.style.alignItems = "center";
		} else if (flexDiv.style.alignItems == "center" && jacima == true) {
			flexDiv.style.alignItems = "flex-end";
			jabaixo = true;
			jacima = false;
		} else if (flexDiv.style.alignItems == "center" && jabaixo == true) {
			flexDiv.style.alignItems = "flex-start";
			jabaixo = false;
			jacima = true;
		}
	};

	var jaesque = true;
	var jadirei = false;
	var btnJustifyctt = document.getElementById("btnJustifyctt");
	btnJustifyctt.onclick = function () {
		if (flexDiv.style.justifyContent != "center") {
			flexDiv.style.justifyContent = "center";
		} else if (flexDiv.style.justifyContent == "center" && jaesque == true) {
			flexDiv.style.justifyContent = "flex-end";
			jadirei = true;
			jaesque = false;
		} else if (flexDiv.style.justifyContent == "center" && jadirei == true) {
			flexDiv.style.justifyContent = "flex-start";
			jadirei = false;
			jaesque = true;
		}
	};
})();
