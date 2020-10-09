console.log("cenas");

fetch("https://nunofcguerreiro.com/api-euromillions-json")
	.then(d => JSON.parse(d))
	.then(data => console.log(data));