/* Nessa seção vamos tratar de como declarar nossas funções e regras
simples que devemos ter em mente antes mesmo de criar nossas funções*/

/* Função ou métodos são criados para ser executados ações de forma
que sejam executadas altomaticamente ou até mesmo calcúlos e operações sejam
realizados de forma automática*/

/* Não podemos esquecer que o Js aceita estruturas diferentes de algoritmo
como a programação funcional e a programação Orientada á Objeto*/

/*Nesse case vou dar exemplo aplicando lógica estrutural 
onde o primeiro Case é adivinhar minha idade pelo ano de nascimento.*/



function Idade(ano){
let AnoAtual = 2021
this.ano = ano
return AnoAtual - ano
}

// Passando o parámetro para a função e ,
// mostrando isso no console do navegador concatenando com outro tipo de dado e imprimindo no console.
console.log(`Você tem ${Idade(2000)} anos`)


