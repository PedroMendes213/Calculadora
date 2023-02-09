let primeiroNumero = prompt("Informe o primeiro número:");
let primeiroNumeroConvertido = Number(primeiroNumero);
let segundoNumero = prompt("Informe o segundo número:");
let segundoNumeroConvertido = Number(segundoNumero);
let operacao = prompt("Informe a operaçaõ desejada (adição, subtração, multiplicação, divisão):");

if (operacao === "adição"){
  let resultadoSoma = primeiroNumeroConvertido + segundoNumeroConvertido;
  alert("o valor da soma é de" + " " + resultadoSoma);
} else if (operacao === "subtração"){
  let resultadoSubtracao = primeiroNumeroConvertido - segundoNumeroConvertido;
  alert("o valor da subtração é de" + " " + resultadoSubtracao);
} else if (operacao === "multiplicação"){
  let resultadoMultiplicacao = primeiroNumeroConvertido * segundoNumeroConvertido;
  alert("o valor da multiplicaçâo é de" + " " + resultadoMultiplicacao);
} else if (operacao === "divisão" ){
  let resultadoDivisao = primeiroNumeroConvertido / segundoNumeroConvertido;
  alert("o valor da divisão é de" + " " + resultadoDivisao);
} else {
  alert("Operação incorreta!");
}
