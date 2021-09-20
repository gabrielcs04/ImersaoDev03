let jogadores = [
  {
    nome: "Jogador 01",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  },
  {
    nome: "Jogador 02",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  }
];

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadores(jogadores) {
  let html = ""
  for (let i = 0; i < jogadores.length; i++) {
    html += `
      <tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>
    `;
  }
  document.querySelector("#tabelaJogadores").innerHTML = html
}

function adicionarVitoria(ind) {
  let jogador = jogadores[ind];
  jogador.vitorias ++;
  jogador.pontos = calculaPontos(jogador);

  for (let i = 0; i < jogadores.length; i++) {
    if (i !== ind) {
      let jogador = jogadores[i];
      jogador.derrotas ++;
      jogador.pontos = calculaPontos(jogador);
    }
  }
  exibeJogadores(jogadores);
}

function adicionarEmpate(ind) {
  for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    jogador.empates ++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadores(jogadores);
}

function adicionarDerrota(ind) {
  let jogador = jogadores[ind];
  jogador.derrotas ++;
  jogador.pontos = calculaPontos(jogador);

  for (let i = 0; i < jogadores.length; i++) {
    if (i !== ind) {
      let jogador = jogadores[i];
      jogador.vitorias ++;
      jogador.pontos = calculaPontos(jogador);
    }
  }
  exibeJogadores(jogadores);
}

exibeJogadores(jogadores);