//entendo NUll e Undefined

//atribuição de referencia, qualquer um dos dois mudaria a indformação na memoria
//neste caso qdo é objetos o valor é alterado pois,
//Ambos estão apontando para o mesmo lugar na memoria
console.log('atribuição de referencia, qualquer um dos dois mudaria a indformação na memoria')
console.log('neste caso qdo é objetos o valor é alterado pois,')
console.log('Ambos estão apontando para o mesmo lugar na memoria')
const a = {name:'teste'}//criando um apontamento para um endereço de memoria
console.log('variavel A: -', a) // exibindo
const b = a //criando um segundo endereço apontando para o mesmo endereço
b.name = 'blza'// alterando o dado no endereço de ambas

console.log('variavel A: -', a)
console.log('variavel B: -', b)
//qdo o tipo é primitivo o valor nao muda
//cada variavel esta em um lugar na memoria
console.log('qdo o tipo é primitivo o valor nao muda')
console.log('cada variavel esta em um lugar na memoria')
let c = 3
console.log('variavel C: -', c)
let d = c
console.log('variavel D: -', d)
d++
console.log('variavel D: -', d)

//#########################################

// declarando um valor undefined
let valor //não declarada
console.log(valor)


//declarando um valor nulo - não recomendado
//Não aponta para nenhum endereço de memória
valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString())//gera erro!

const produto = {} // produto setado
console.log(produto.preço) //caracteristica nao definida, se setar o objeto vc pode acesar  a chave mas nao o valor
console.log(produto)

// evite atribuir undefined, 