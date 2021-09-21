let cartas = [
  {
    nome: "Lewis Hamilton",
    atributos: {
      vitorias: 99,
      podios: 169,
      corridas: 277
    }
  },
  {
    nome: "Max Verstappen",
    atributos: {
      vitorias: 17,
      podios: 52,
      corridas: 132
    }
  },
  {
    nome: "Sebastian Vettel",
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
  
  exibirOpcoes()
}

function exibirOpcoes() {
  let elOpc = document.querySelector("#opcoes");
  let opcTxt = "";
  for (let atributo in cartaJogador.atributos) {
    opcTxt += `
      <input type="radio" name="atributo" value="${atributo}"> ${atributo}
    `; 
  }
  elOpc.innerHTML = opcTxt;
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
    elResult.innerHTML = "<h2>Você ganhou!</h2>"
  } else if (valCartaMaquina > valCartaJogador) {
    elResult.innerHTML = "<h2>Você perdeu!</h2>"
  } else {
    elResult.innerHTML = "<h2>Deu empate!</h2>"
  }

  console.log(cartaMaquina);
  console.log(cartaJogador);

  document.querySelector("#btnJogar").disabled = true;
  document.querySelector("#btnSortear").disabled = false;
}