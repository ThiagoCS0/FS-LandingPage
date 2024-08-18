let prod = [
	{
		img: "./src/0 (1).jpg",
		nome: "DocezZ",
		desc: "Os 50 melhores doces do mundo, de A a Z."
	},
	{
		img: "./src/0 (2).jpg",
		nome: "A Floresta",
		desc: "Conheça as histórias mais absurdas e reais sobre florestas antigas."
	},
	{
		img: "./src/0 (3).jpg",
		nome: "Botons",
		desc: "Tudo o que você precisa saber sobre Botons."
	},
	{
		img: "./src/0 (4).jpg",
		nome: "Novas Moedas",
		desc: "O que é, quantas existem, desde quando as Moedas estão no mundo."
	},
	{
		img: "./src/0 (5).jpg",
		nome: "TecNov",
		desc: "Maiores avanços tecnológicos de 2000 até agora."
	},
	{
		img: "./src/0 (6).jpg",
		nome: "DecorAção",
		desc: "Dicas e truques rápidos para você decorar qualquer ambiente."
	},
	{
		img: "./src/0 (7).jpg",
		nome: "Concursos",
		desc: "Testemunhos e dicas dos 20 número 1 de vários concursos."
	},
	{
		img: "./src/0 (8).jpg",
		nome: "Detonados",
		desc: "Resumo dos detonados dos 5 melhores jogos de 2024."
	}
]

const prodAtual = [img = "", nome = "", desc = ""];

function Inc() {
	const prods = document.querySelectorAll('.produtos')
	for (let i = 0; i < Object.keys(prod).length; i++) {
		prods[i].querySelector('img').src = prod[i].img;
		prods[i].querySelector('p').innerText = prod[i].nome;
	}
}

function OnProd(e) {
	const ds = document.querySelector('#descProdutos');
	ds.querySelector('img').src = e.querySelector('img').src;
	ds.querySelector('h1').innerText = e.querySelector('p').innerText;
	prod.find(x => {
		if (x.nome == e.querySelector('p').innerText) {
			ds.querySelector('p').innerText = x.desc;
			const compra = document.querySelector('#div1Compra');
			compra.querySelector('img').src = x.img;
			compra.querySelector('h1').innerText = x.nome;
			compra.querySelector('p').innerText = x.desc;
		}
	});
}

function Enviar() {
	document.getElementById("myForm").reset();
	document.getElementById('bInicio').click();
}
function M(m) {
	console.log(m);
}

Inc();