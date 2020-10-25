const fs = require('fs');

let drawns = [];
export function criarNumeros() {
	for (let i = 0; i < 10000; i++) {
		gerador();
	}
	drawns = { drawns };
	const dictstring = JSON.stringify(drawns);
	criarFicheiro(dictstring);
}

function gerador() {
	let numbers = [];
	let stars = [];

	for (let i = 0; i < 5; i++) {
		const n = Math.floor(Math.random() * 50 + 1);
		if (numbers.includes(n)) i--;
		else numbers.push(n);
	}
	for (let i = 0; i < 2; i++) {
		const n = Math.floor(Math.random() * 12 + 1);
		if (stars.includes(n)) i--;
		else stars.push(n);
	}
	numbers.sort((a, b) => a - b);
	stars.sort((a, b) => a - b);


	drawns.push({ balls: numbers.toString().replace(/,/g, " "), stars: stars.toString().replace(/,/g, " ") });
}


function criarFicheiro(dictstring) {
	if (fs.existsSync("chaves.json")) {
		fs.unlinkSync("chaves.json", err => console.log(err));
	}
	if (!fs.existsSync("chaves.json")) {
		fs.writeFileSync("chaves.json", dictstring);
	}
}