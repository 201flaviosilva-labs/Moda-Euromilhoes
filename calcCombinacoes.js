let numeros = [];
let stars = [];

export default function calcCombinacoes(data) {
	data.map(d => {
		contarNumeros(d);
		contarEstrelas(d);
	});

	numeros.sort(compare);
	numeros.length = 20;
	stars.sort(compare);
	stars.length = 20;

	console.log("------- Numeros: ");
	console.log(numeros);
	console.log("------- Stars: ");
	console.log(stars);
}

function contarNumeros(d) {
	const starArr = d.balls;
	let found = false;

	for (var i = 0; i < numeros.length; i++) {
		if (numeros[i].comb == starArr) {
			found = true;
			break;
		}
	}

	if (found) numeros.map((s) => { if (starArr == s.comb) s.rep++; });
	else numeros.push({ comb: starArr, rep: 1 });
}

function contarEstrelas(d) {
	const starArr = d.stars;
	let found = false;

	for (var i = 0; i < stars.length; i++) {
		if (stars[i].comb == starArr) {
			found = true;
			break;
		}
	}

	if (found) stars.map((s) => { if (starArr == s.comb) s.rep++; });
	else stars.push({ comb: starArr, rep: 1 });
}

function compare(b, a) {
	if (a.rep < b.rep) return -1;
	if (a.rep > b.rep) return 1;
	return 0;
}