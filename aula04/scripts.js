var filmes = [
  "https://xl.movieposterdb.com/13_05/2011/1596343/xl_1596343_5b0a9600.jpg",
  "https://xl.movieposterdb.com/10_06/2010/1375670/xl_1375670_c8f29a29.jpg",
  "https://xl.movieposterdb.com/20_10/2016/3498820/xl_3498820_660f6a8a.jpg",
]

let imgElemento = document.querySelector(".images");
for (let index = 0; index < filmes.length; index++) {
  imgElemento.innerHTML += `<img src="${filmes[index]}">`;
}