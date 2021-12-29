// Tipos da dados e variáveis

/* 
tipo var : destina-se á variáveis bglobais cujo os valores podem mudar 
conforme sua execução

tipo let : é muito utilizado pelas boas práticas para definir variáveis 
de escopo onde ela tem um comportamento similar á variável tipo var.

tipo const : é utilizado quando esse valor tenha que ser fixo , ele não aceita
mudanças , e sim apenas concatenação ou acrecimo de valor á essa constante;    
*/

var Nome = "Lukas"
let Idade = 22
const AnoDeNasc = 1999

console.log(`Ficha`)
console.log(`Nome: ${Nome} tem ${Idade} anos e nasceu no ano de :${AnoDeNasc}`)

// Agora vamos alterar alguns valores sem esquecer das regras do tipo de váriavel

// Nome = "João"
// Idade = 21
// AnoDeNasc = 2000

// console.log(`Ficha depois de tentar atribuir uma variável tipo const`)
// console.log(`Nome: ${Nome} tem ${Idade} anos e nasceu mo ano de :${AnoDeNasc}`)

/* No navegador aparecerá um erro com o type da variável
 pois no caso de uma variavel do tipo constante onde não podemos mudar seu valor
 e sim acrescentar valor */
