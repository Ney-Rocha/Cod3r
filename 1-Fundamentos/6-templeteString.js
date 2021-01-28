// templete string
const nome = 'rebeca'
const concatenacao = 'Olá ' + nome + '!'

//interpola 
console.log(concatenacao)

// recebe a quebra de linha, templete string começa com dolar $
const templete = ` 
  Ola  
  ${nome}!`//subsititui a variavel dentro do texto

console.log(concatenacao, templete)

//expressões
console.log(`1 + 1 = ${1 + 1}`)


//Templete strin consegue chamar função
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)

