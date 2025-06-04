function exibirInfosEstudande(nome, nota){
    return `O aluno ${nome} tirou a nota ${nota}`; //faz processamento dos dados

}

console.log(exibirInfosEstudande('Vitor', 4));
console.log(exibirInfosEstudande('RGB', 9)); //só exibe na tela

// -- //

function somaDeDoisNumeros(numA, numB){
    return numA + numB;
}

console.log(somaDeDoisNumeros(3,5));
    // ou
let resultadoSoma = somaDeDoisNumeros(2, 35);
console.log(resultadoSoma)

// -- //

function dividir (dividendo, divisor){
    if(divisor !== 0){
        return dividendo / divisor
    } else {
        return "Não é possível dividir por 0"
    }
}

let resultadoDivisao = dividir(10, 5)
console.log(resultadoDivisao)
let resultadoZero = dividir(10, 0)
console.log(resultadoZero)

// -- //
function calculaProduto(a, b = 2, c = 1) { //apenas o A é alterado
  return a * b * c;
}

const resultado1 = calculaProduto(3);
const resultado2 = calculaProduto(2, 4);
const resultado3 = calculaProduto(1, 2, 3);
const resultado4 = calculaProduto(2, undefined, 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);
