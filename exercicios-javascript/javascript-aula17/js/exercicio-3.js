class Personagem {
	#posicaoX;
	#posicaoY;
	#bolsa;
	#dano;
	#vida;

	constructor(_posicaoX, _posicaoY) {
		this.#posicaoX = _posicaoX;
		this.#posicaoY = _posicaoY;
		this.#bolsa = 0;
		this.#dano = 1;
		this.#vida = 10;
	}

	set posicaoX(_posicaoX) {
		if (_posicaoX < 0) {
			return false;
		}
		this.#posicaoX = _posicaoX;
		return true;
	}

	set posicaoY(_posicaoY) {
		if (_posicaoY < 0) {
			return false;
		}
		this.#posicaoY = _posicaoY;
		return true;
	}

	set vida(_vida) {
		if (_vida < 0) {
			return false;
		}
		this.#vida = _vida;
		return true;
	}

	set dano(_dano) {
		if (_dano < 0) {
			return false;
		}
		this.#dano = _dano;
		return true;
	}

	set bolsa(_bolsa) {
		if (_bolsa < 0) {
			return false;
		}
		this.#bolsa = _bolsa;
	}

	get posicaoX() {
		return this.#posicaoX;
	}
	get posicaoY() {
		return this.#posicaoY;
	}

	get vida() {
		return this.#vida;
	}

	get dano() {
		return this.#dano;
	}

	get bolsa() {
		return this.#bolsa;
	}

	forward() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		return `Posição X é: ${(this.posicaoX += 1)} \n Posição Y é: ${this.posicaoY}`;
	}

	backward() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		return `Posição X é: ${(this.posicaoX -= 1)} \n Posição Y é: ${this.posicaoY}`;
	}

	upward() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		return `Posição X é: ${this.posicaoX} \n Posição Y é: ${(this.posicaoY -= 1)}`;
	}

	downward() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		return `Posição X é: ${this.posicaoX} \n Posição Y é: ${(this.posicaoY += 1)}`;
	}

	getCoin() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		return (this.bolsa += 1);
	}

	attack() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		return `Dano causado: ${this.#dano}`;
	}

	dmgReceived(_valorDano) {
		if (isNaN(_valorDano)) {
			return "Valor de Dano Inválido";
		}
		if (this.vida > 0) {
			if (_valorDano >= this.vida) {
				this.vida = 0;
				return `Dano recebido: ${_valorDano} \n Vida atual: ${this.vida} \n Personagem está Morto`;
			}
			return `Dano recebido: ${_valorDano} \n Vida atual: ${(this.vida -= _valorDano)}`;
		}
		return "O personagem está Morto";
	}
}

class Cowboy extends Personagem {
	#ammo = 10;

	constructor(posicaoX, posicaoY) {
		super(posicaoX, posicaoY);
		this.dano = 2;
	}

	attack() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		if (this.ammo > 0) {
			this.ammo -= 1;
			return `Munição gasta \n Munição atual ${this.ammo} \n Dano Causado: ${this.dano}`;
		}
		if (this.ammo <= 0) {
			return "Sem Munição";
		}
	}

	addAmmo() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		return `Munição adquirida \n Munição atual: ${(this.ammo += 1)}`;
	}

	set ammo(_ammo) {
		this.#ammo = _ammo;
	}

	get ammo() {
		return this.#ammo;
	}
}

class Mage extends Personagem {
	#spells = 10;

	constructor(posicaoX, posicaoY) {
		super(posicaoX, posicaoY);
		this.dano = 3;
	}

	attack() {
		if (this.vida <= 0) {
			return "Personagem está Morto";
		}
		if (this.spells > 0) {
			this.spells -= 1;
			if (this.spells == 0) {
				setTimeout(() => {
					this.spells = 10;
				}, 10000);
			}
			return `Magia gasta \n Magia Restante: ${this.spells} \n Dano Causado: ${this.dano}`;
		}
		if (this.spells <= 0) {
			return "Magia Insuficiente";
		}
	}

	set spells(_spells) {
		this.#spells = _spells;
	}

	get spells() {
		return this.#spells;
	}
}

const player2 = new Personagem(11, 11);
const playerCowboy = new Cowboy(10, 10);
const playerMage = new Mage(10, 10);
console.log(player2);
console.log(playerCowboy);
console.log(playerMage);
