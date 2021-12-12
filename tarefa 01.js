const textos = document.querySelectorAll('h2');
const linhas = new Array();
textos.forEach(texto => { 
	linhas.push(texto.textContent);
	const ancora = document.createElement('a');
	ancora.setAttribute('name', texto.textContent);
	texto.append(ancora);
	const retorno = document.createElement('a');
	retorno.setAttribute('href', '#');
	retorno.textContent = "Voltar ao sumário";
	texto.parentElement.insertBefore(retorno, texto.nextElementSibling);
});
const lista = document.querySelector('ol');
linhas.forEach(linha => { 
	const item = document.createElement('li');
	lista.append(item);
	const link = document.createElement('a');
	link.setAttribute('href', `#${linha}`);
	link.textContent = linha;
	item.append(link);
});
