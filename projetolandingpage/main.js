function toggleDarkMode() {
	var body = document.body;
	body.classList.toggle("dark-mode");

	var buttonMode = document.getElementById("buttonMode");
	if (body.classList.contains("dark-mode")) {
		buttonMode.textContent = "light_mode";
	} else {
		buttonMode.textContent = "dark_mode";
	}
}

(() => {
	var canvas = document.getElementById("meuCanvas");
	var ctx = canvas.getContext("2d");
	var x = 65;
	var y = 60;

	var angulo1 = 0;
	var angulo2 = 45;

	function desenha() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();
		ctx.translate(x, y);
		ctx.rotate((angulo1 * Math.PI) / 180);
		ctx.fillStyle = "rgba(250, 235, 215, 0.5)";
		ctx.fillRect(-50, -50, 100, 100);
		ctx.restore();

		ctx.save();
		ctx.translate(x, y);
		ctx.rotate((angulo2 * Math.PI) / 180);
		ctx.fillStyle = "rgba(250, 235, 215, 0.5)";
		ctx.fillRect(-50, -50, 100, 100);
		ctx.restore();

		angulo1++;
		angulo2++;

		requestAnimationFrame(desenha);
	}
	// Inicia a animação
	desenha();
})();
