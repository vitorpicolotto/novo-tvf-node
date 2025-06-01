let estaAprovado = true;

if(estaAprovado===true){
    console.log('Aprovado')
}

if('0' == 0){
    console.log('comparação ok') //comparou o conteúdo
} else {
    console.log ('não passou na comparação')
}

if('0' === 0){
    console.log('comparação ok')
} else {
    console.log ('não passou na comparação') //comparou o tipo de dado além do conteudo
}

//Operadores ternários
let matriculaAtiva = true;

function verificaMatriculaAtiva(){
    if (matriculaAtiva === true){
        return 'matricula ativa no sistema'
    } else {
        return 'matricula inativa'
    }
}

console.log(verificaMatriculaAtiva())

            //mesma aplicação, com operadores ternários

function verificaMatriculaAtivaTernarios(){
    return matriculaAtiva ? 'matricula ativa!' : 'matricula não ativa' //resultado condicional feita pelo operador ternário
    //A matrícula está ativa? Se true, retorne 'matricula ativa', se não (false) retorne 'matricula não ativa'
}

console.log(verificaMatriculaAtivaTernarios())

    // MAIS EXEMPLOS DE TERNÁRIOS

let idadeEstudante = 16;
let precisaDeAutorização;

if(idadeEstudante < 18){
    precisaDeAutorização = true;
} else {
    precisaDeAutorização = false;
}
console.log(precisaDeAutorização)

let precisaDeAutorizaçãoTernario = idadeEstudante < 18 ? true : false;

//Exercicio
let valor1 = '5';
let valor2 = 5;

let resultado1 = valor1 + valor2;
let resultado2;

if (valor1 === valor2) {
 resultado2 = 'Os valores são iguais.';
} else {
 resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1: ', resultado1);
console.log('Resultado 2: ', resultado2);
