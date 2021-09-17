function adicionarFilme() {
  let filme = document.querySelector("#filme").value;

  if (filme !== "") {
    pegarFilme(filme);
    document.querySelector("#filme").value = "";
  } else {
    alert("Digite o nome de um filme no campo abaixo!");
  }
}

function pegarFilme(filme) {
  let url = `http://www.omdbapi.com/?t=${filme}&apikey=763bfc46`;

  fetch(url)
    .then((resposta) => resposta.json())
    .then((dado) => {
      console.log(dado.Poster)
      if (dado.Poster === "N/A" || dado.Poster === undefined) {
        alert("Digite o nome de um filme válido no campo abaixo!");
      } else {
        listarFilmes(dado.Poster);
      }
    });
}

function listarFilmes(filme) {
  let elementoFilme = `<img src="${filme}">`;
  let listaFilme = document.querySelector("#listaFilmes");
  listaFilme.innerHTML += elementoFilme;
}
