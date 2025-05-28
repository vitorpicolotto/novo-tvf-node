// 1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console. 
let tipoString = 'Olá, como vai? Tudo bem?'
let tipoNumero = 3;
let tipoBoolean = true;

console.log(tipoString);
console.log(tipoNumero);
console.log(tipoBoolean);

// 2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console. 

let primeiroNome = 'Vitor';
let segundoNome = 'Picolotto';
let nomeCompleto = primeiroNome + " " + segundoNome;
let templateString = `${primeiroNome} ${segundoNome}`

console.log(nomeCompleto);
console.log(templateString);

// 3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

let meuNome = 'Anderson';
let minhaNota = 10;
let notaFinal = `Parabéns! A nota do aluno ${meuNome} é ${minhaNota}!`;

console.log(notaFinal);

// 4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let qualquerVariavel = 'Vitor';
console.log(qualquerVariavel);

qualquerVariavel = 'André';
console.log(qualquerVariavel);

// 5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var foraBloco = 50;

if (1 > 0){
    var dentroBloco = 30;
    console.log(foraBloco, dentroBloco);
}
console.log(foraBloco, dentroBloco);

let blocoFora = 30;

if (1 > 0){
    let blocoDentro = 50;
    console.log(blocoFora);
    console.log(blocoDentro);
}

console.log(blocoFora);
//console.log(blocoDentro); //não consegue acessar o let blocoDentro.

// 6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

let estaChovendo = true;

if (!estaChovendo){
    console.log('Leve um guarda-chuva, está chovendo!')
} else {
    console.log('Pode sair de boas, não está chovendo!')
}
