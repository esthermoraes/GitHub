const textos = document.querySelectorAll('h2');
const linhas = new Array();
textos.forEach(texto => { 
	linhas.push(texto.textContent);
	const apoio = document.createElement('a');
	apoio.setAttribute('name', texto.textContent);
	texto.append(apoio);
	const voltar = document.createElement('a');
	voltar.setAttribute('href', '#');
	voltar.textContent = "Voltar ao sumário";
	texto.parentElement.insertBefore(voltar, texto.nextElementSibling);
});

const lista = document.querySelector('ol');
linhas.forEach(linha => { 
	const unid = document.createElement('li');
	lista.append(unid);
	const link = document.createElement('a');
	link.setAttribute('href', `#${linha}`);
	link.textContent = linha;
	unid.append(link);
});
