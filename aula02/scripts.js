const simboloMoeda = {
  USD: "U$",
  BRL: "R$",
  EUR: "€"
}

let cotacaoMoeda = 0;

async function Converter() {
  let valor = parseFloat(document.getElementById("valor").value).toFixed(2);

  if (valor !== "NaN") {
    let moedaDe = document.querySelector("#selectMoedaDe").value;
    let moedaPara = document.querySelector("#selectMoedaPara").value;
    
    await getCotacao(moedaDe, moedaPara);
    // console.log(cotacaoMoeda);
  
    let valorconvertido = (valor * cotacaoMoeda).toFixed(2);
    if (moedaDe !== moedaPara) {
      document.querySelector("#valorConvertido").innerHTML = `${simboloMoeda[moedaDe]}${valor} = ${simboloMoeda[moedaPara]}${valorconvertido}`;
    } 
  } else {
    alert("Digite o valor a ser convertido")
  }
}


async function getCotacao(moedaDe, moedaPara) {
  await fetch(`https://economia.awesomeapi.com.br/json/all/${moedaDe}-${moedaPara}`)
  .then(response => {return response.json()})
  .then(cotacao => {
    // console.log(cotacao)
    cotacaoMoeda = cotacao[moedaDe].bid
  })
}
