// entendendo sobre os numeros
const peso1 = 1.0 //float (Ponto flutuante)
const peso2 = Number('2.0') //tipo number server para inteiro ou float (2.0)

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//isinterger pergunta se é numero
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 *peso1 + avaliacao2 *peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) // tofixed limita a qtd de caractres depois do ponto
console.log(media.toString()) // tostring transforma a var/let/coonst em string
console.log(media.toString(2)) // o numero 2 como parametro da funcão transforma em binario 
console.log(typeof media)

/*number - tipo
Number - Função*/
