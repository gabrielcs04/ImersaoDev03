var nota01 = parseFloat(prompt("Digite a 1ª nota do(a) aluno(a)"));

var nota02 = parseFloat(prompt("Digite a 2ª nota do(a) aluno(a)"));

var nota03 = parseFloat(prompt("Digite a 3ª nota do(a) aluno(a)"));

var nota04 =parseFloat(prompt("Digite a 4ª nota do(a) aluno(a)"));

var notaFinal = ((nota01 + nota02 + nota03 + nota04) / 4).toFixed(2);
alert(`Média obtida: ${notaFinal}`)