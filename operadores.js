const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.9;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)/4;

if (media >= 7){
    media += media * 0.1;
}

console.log('A média é ' + media.toFixed(2))


//Exemplo 2
const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

console.log(resultado)

//Exemplo 3
let precedencia;
precedencia = 10 + ((5 * 2) / 3) - 7 + ((15 * 3) / 5) + 20 - (4 * 2); //1 - multiplicação, 2 - divisão, 3 - soma e subtração
console.log("O resultado da expressão é: ", precedencia);

//Incrementação
let contadorVisitas = 0;
contadorVisitas = contadorVisitas + 1;
console.log(`Primeira forma: ${contadorVisitas}`) //1
contadorVisitas += 1;
console.log(`Segunda forma: ${contadorVisitas}`) //2
contadorVisitas++;
console.log(`Terceira forma: ${contadorVisitas}`) //3

