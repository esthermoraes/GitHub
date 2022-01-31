document.addEventListener("DOMContentLoaded", inserir)
let tamanho = 2;

        function inserir(){
			div = document.createElement("div");
			div.style.fontSize = `${tamanho}em`;
			div.innerHTML = `<button onclick="aumentar()">+</button>
            <button onclick="diminuir()">-</button>
			`;
			document.body.prepend(div)
		}

        function atualização() {
            const h1 = document.querySelector("h1");
            h1.style.fontSize = `${tamanho}em`;
        }
        function aumentar() {
			if (tamanho < 5) {
				tamanho += 0.5;
				atualização();
			}
        }
        function diminuir() {
            if (tamanho > 0.5) {
                tamanho -= 0.5;
                atualização();
            }
        }
