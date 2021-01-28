/*Variavel com a palavra reservada vAR tem scopo global e escopo de funçao
variavel com a palavra LET tem scopo global, função e de bloco*/

//foi alterada para inclusão do scopo a mais ele procura sempre onde esta sendo rodado
var numero = 1
{
  let numero = 2
  console.log('dentro = ',numero)
}
console.log('fora = ',numero)
