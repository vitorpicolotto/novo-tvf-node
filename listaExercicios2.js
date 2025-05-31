// Exercício 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
let frase = "A garrafa de água está sobre a mesa";
console.log(frase.length);
console.log(frase.toUpperCase());

// Exercício 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let varNula = null;
let varNaoDef;
console.log(varNula);
console.log(varNaoDef);

// Exercício 3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
let tipoNumber = 3;
let tipoString = "O Coxa venceu";
let tipoBoolean = true;

console.log(`Sim, é ${tipoBoolean}! ${tipoString} ${tipoNumber} seguidas!`)

// Exercício 4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
let numerica = 51;
let string = '21';

console.log(numerica.toString())
console.log(parseFloat(string));

// Exercício 5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
let stringManipulada = 'Assim assado';

console.log(stringManipulada.toUpperCase()); //ASSIM ASSADO
console.log(stringManipulada.toLowerCase()); //assim assado
console.log(stringManipulada.includes('Assim')); //true
console.log(stringManipulada.slice(6, 9)); //ass
console.log(stringManipulada.replace("Assim", "Peru")); //Peru assado
console.log(stringManipulada.split(' ', 2)) // ['Assim', 'assado']
console.log(stringManipulada.trim()) //remove espaços a mais
console.log(stringManipulada.indexOf('m', 0)); //4 - primeira ocorrência de 'm' começando no índice 0.

