let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 3;

let resultadoElemento = document.querySelector("#resultado");
resultadoElemento.innerHTML = `Você tem ${tentativas} tentativa(s) para adivinhar o número secreto`;

function Chutar() {
  let chute = parseInt(document.querySelector("#valor").value);
  
  let texto = "";
  if (chute === numeroSecreto) {
    texto = `Você acertou! O número secreto era ${numeroSecreto}`;
  } else if (chute > 10 || chute < 0) {
    texto = "Você deve digitar um número de 0 a 10.";
  } else if (chute > numeroSecreto) {
    texto = `O número secreto é menor que ${chute}.`;
    tentativas --;
  } else if (chute < numeroSecreto) {
    texto = `O número secreto é maior que ${chute}.`;
    tentativas --;
  } else {
    texto = `Digite um número no campo acima`;
  }

  if (chute !== numeroSecreto && chute <= 10 && chute >= 0) {
    resultadoElemento.innerHTML = `${texto} Você tem ${tentativas} tentativa(s)`; 
  } else {
    resultadoElemento.innerHTML = texto;
  }

  if (chute !== numeroSecreto && tentativas === 0) {
    resultadoElemento.innerHTML = `Suas tentativas acabaram. O número secreto era ${numeroSecreto}`;
  }
  document.querySelector("#valor").value = '';
  
  if (tentativas === 0 || chute === numeroSecreto) {
    document.querySelector("#chutar").style.display = "none";
    document.querySelector("#resetar").style.display = "inline-block";
  }
}

function Resetar() {
  document.querySelector("#resetar").style.display = "none";
  document.querySelector("#chutar").style.display = "inline-block";
  
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  resultadoElemento.innerHTML = `Você tem ${tentativas} tentativa(s) para adivinhar o número secreto`;
}