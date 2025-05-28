let estudante;

if (1 > 0){
    estudante = 'Vitor';
    console.log(estudante);
}

//estudante = 'Renato'; //tem um var 'escondido' antes do estudante. É UMA VARIÁVEL DIFERENTE DA QUE ESTÁ DENTRO DO IF
console.log(estudante)


//ESCOPO GLOBAL

const nome = 'RGB';
function cumprimentar(){
    console.log(`Olá, ${nome}!`)
}

cumprimentar();

//ESCOPO DE BLOCO
/* Variáveis declaradas dentro de chaves { }, como no caso de if, for, while etc., não ficam acessíveis para código que esteja de fora. 
Variáveis declaradas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais e poderão ser acessadas de fora do bloco.
*/

if (1 > 0){
    let name = 'Alex';
    console.log(name);
}

console.log(name); //retorna void porque o nome foi declarado dentro do bloco utilizando let.

if (1 > 0){
    var name2 = 'Anderson';
    console.log(name2);
}

console.log(name2); // retorna Anderson porque foi utilizado var. Ou seja, não tem tanto controle ao utilizar o var.


//ESCOPO DE FUNÇÃO
/* Variáveis declaradas dentro de uma função são consideradas “locais” (ou seja, o oposto de “globais”) e não podem ser acessadas por código que esteja fora do bloco da função. */

function ola(){
    const nome = 'Aramis';
    const cumprimento = 'Qui qui qui';

    console.log(`${cumprimento}, ${nome}!`) // Qui qui qui, Aramis!
}

console.log(`${cumprimento}, ${nome}!`) //not defined




