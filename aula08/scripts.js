let cartas = [
  {
    nome: "Lewis Hamilton",
    imagem: './img/hamilton.png',
    atributos: {
      vitorias: 99,
      podios: 169,
      corridas: 277
    }
  },
  {
    nome: "Max Verstappen",
    imagem: './img/verstappen.png',
    atributos: {
      vitorias: 17,
      podios: 52,
      corridas: 132
    }
  },
  {
    nome: "Sebastian Vettel",
    imagem: './img/vettel.png',
    atributos: {
      vitorias: 53,
      podios: 122,
      corridas: 272
    }
  },
]

let cartaMaquina;
let cartaJogador;

function sortearCarta() {
  let idxCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[idxCartaMaquina];
  
  let idxCartaJogador = parseInt(Math.random() * cartas.length);
  while (idxCartaJogador === idxCartaMaquina) {
    idxCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[idxCartaJogador];

  document.querySelector("#btnSortear").disabled = true;
  document.querySelector("#btnJogar").disabled = false;
  
  exibirCartaJogador();
}

function pegaAtrSelect() {
  let radioAtr = document.querySelectorAll("[name=atributo]");
  for (let i = 0; i < radioAtr.length; i++) {
    if (radioAtr[i].checked) {
      achou = true;
      return radioAtr[i].value;
    }
  }
}

function jogar() {
  let atrSelect = pegaAtrSelect();
  let elResult = document.querySelector("#resultado");
  let valCartaJogador = cartaJogador.atributos[atrSelect];
  let valCartaMaquina = cartaMaquina.atributos[atrSelect];

  if (valCartaJogador > valCartaMaquina) {
    elResult.innerHTML = "<p class='resultado-final'>Você ganhou!</p>"
  } else if (valCartaMaquina > valCartaJogador) {
    elResult.innerHTML = "<p class='resultado-final'>Você perdeu!</p>";
  } else {
    elResult.innerHTML = "<p class='resultado-final'>Deu empatou!</p>";
  }

  console.log(cartaMaquina);
  console.log(cartaJogador);

  document.querySelector("#btnJogar").disabled = true;
  document.querySelector("#btnSortear").disabled = false;
  exibirCartaMaquina()
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.querySelector("#carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  let moldura = `
    <img 
      src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" 
      style="width: inherit; height: inherit; position: absolute;" 
    />
  `;

  let html = '<div id="opcoes" class="carta-status">'
  let opcTxt = "";
  for (let atributo in cartaMaquina.atributos) {
    opcTxt += `
     <p style="text-align:left" name="atributo">${atributo} ${cartaMaquina.atributos[atributo]}</p>
    `;
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + html + opcTxt + "</div>";
}

function exibirCartaJogador() {
  let divCartaJogador = document.querySelector("#carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  let moldura = `
    <img 
      src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" 
      style="width: inherit; height: inherit; position: absolute;" 
    />
  `;

  let html = '<div id="opcoes" class="carta-status">'
  let opcTxt = "";
  for (let atributo in cartaJogador.atributos) {
    opcTxt += `
      <div>
        <input 
          type="radio" 
          name="atributo" 
          value="${atributo}"
        > ${atributo} ${cartaJogador.atributos[atributo]} 
        <br>
      </div>
    `;
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + html + opcTxt + "</div>";
}