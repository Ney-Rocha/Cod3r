//Dentro de um mesmo escopo você deve ter nomes diferente para nao conflitar
//FUJA DO SCOPO GLOBAL
var numero = 1
{
  var numero = 2
  console.log('dentro = ' , numero)
}
console.log('fora = ', numero)

// DENTRO VALE 2 PORQUE SUBSCREVEU O FORA
