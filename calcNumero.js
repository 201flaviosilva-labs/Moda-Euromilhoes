let numeros = [];
for (let i = 0; i < 50; i++) numeros.push({ num: i + 1, rep: 0 });

let stars = [];
for (let i = 0; i < 12; i++) stars.push({ num: i + 1, rep: 0 });

export default function calc(data) {
	data.map(d => {
		contarNumeros(d);
		contarEstrelas(d);
	});

	numeros.sort(compare);
	stars.sort(compare);

	console.log("------- Numeros: ");
	console.log(numeros);
	console.log("------- Stars: ");
	console.log(stars);
}

function contarEstrelas(d) {
	const starArr = d.stars.split(" ");
	starArr.map((ns) => {
		stars.map((s) => {
			if (ns == s.num) s.rep++;
		})
	})
}

function contarNumeros(d) {
	const starArr = d.balls.split(" ");
	starArr.map((ns) => {
		numeros.map((s) => {
			if (ns == s.num) s.rep++;
		})
	})
}


function compare(b, a) {
	if (a.rep < b.rep) return -1;
	if (a.rep > b.rep) return 1;
	return 0;
}