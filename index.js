const fs = require('fs');
const fetch = require('node-fetch');

import { criarNumeros } from "./criarNumeros";
import calc from "./calcNumero";
import calcCombinacoes from "./calcCombinacoes";

console.clear();

main();
function main() {
	criarNumeros();
	chavesFalsas();
	// obterInformacao("https://nunofcguerreiro.com/api-euromillions-json?result=all");
}

function chavesFalsas() {
	if (fs.existsSync("./chaves.json")) {
		obeterDados(JSON.parse(fs.readFileSync("./chaves.json", "utf8")));
		// console.log(JSON.parse(fs.readFileSync("./chaves.json", "utf8")));
	} else {
		console.log("Ficheiro não existe!");
	}
}

function obterInformacao(url) {
	fetch(url)
		.then(d => d.json())
		.then(data => obeterDados(data));
}

function obeterDados(data) {
	data = data.drawns;
	console.log("---------------------- Inicio --------------------");
	calc(data);
	console.log("------------- Probabilidas de Conjuntos ----------");
	calcCombinacoes(data);
	console.log("---------------------- Fim -----------------------");
}
