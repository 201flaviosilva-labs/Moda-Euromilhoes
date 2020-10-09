const fetch = require('node-fetch');

import calc from "./calcNumero";
import calcCombinacoes from "./calcCombinacoes";

console.clear();

fetch("https://nunofcguerreiro.com/api-euromillions-json?result=all")
	.then(d => d.json())
	.then(data => {
		data = data.drawns;
		console.log("---------------------- Inicio --------------------");
		calc(data);
		console.log("------------- Probabilidas de Conjuntos ----------");
		calcCombinacoes(data);
		console.log("---------------------- Fim -----------------------");
	});
