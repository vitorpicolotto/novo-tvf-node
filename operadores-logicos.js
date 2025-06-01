let mediaFinal = 9;
let numeroFaltas = 2;
let advertencias = 0; //falsy - if(0) é um resultado 'falso'

if (mediaFinal < 6 || numeroFaltas > 4){
    console.log('Você está reprovado! Até o ano que vem!!')
} else {
    console.log('Você foi aprovado! Parabéns!!')
}

if(numeroFaltas <= 2 && !advertencias){ //!advertencias é a negação de um resultado falso, logo, é verdadeira! então se o numero de faltas for baixo e ele não tem advertências, vai receber bonus
    console.log('Recebeu bonus de nota')
}else {
    console.log('Não recebeu bonus')
}

//Exemplo 2
let questoesCorretas = 50;
let materiaZerada = false;

if (questoesCorretas >= 40 && materiaZerada == true){
    console.log('Você foi aprovado no vestibular!')
} else {
    console.log('Reprovado no vestibular')
}