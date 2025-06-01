// Exercício 1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo = 1000;
let deposito = 500;
let saque = 750;
let operacao1 = saldo + deposito;
let operacao2 = operacao1 - saque;

console.log(`Após o depósito de R$${deposito},00, seu saldo final passou a ser de R$${operacao1},00!`)
console.log(`Após seu saque de R$${saque},00, seu saldo ficou R$${operacao2},00!`)

// Exercício 2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
let varNum = 51;
let parOuImpar = varNum %2 === 0 ? `${varNum} é par` : `${varNum} é impar`

console.log(parOuImpar);

// Exercício 3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
let estaLogado = false;
let permissaoAdm = true;

if(!estaLogado && permissaoAdm){
    console.log('Acesso permitido')
} else {
    console.log('Acesso negado')
}

// Exercício 4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
let maiorDeIdade = false;
let temPermissaoDosPais= false;

if(maiorDeIdade || temPermissaoDosPais){
    console.log('Pode jogar GTA')
} else {
    console.log('Não pode jogar GTA')
}

// Exercício 5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
let idadeUsuario = 18;
let idadeMinima = 18;

if(idadeUsuario >= idadeMinima){
    console.log('Pode comprar o ingresso')
} else {
    console.log('Não pode comprar o ingresso')
}
