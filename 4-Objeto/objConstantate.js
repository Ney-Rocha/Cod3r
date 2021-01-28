// pessoa  -> aponta para um endereço de memoria
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'

console.log(pessoa.nome)

//pessoa ->456 -> {...}
// pessoa = {nome: 'Ana'} - vai dar erro

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

//Para criarmos um Objto com Freeze desde sua origem

const pessoaConstante = Object.freeze({'nome': 'Mario'})
pessoaConstante.nome = 'Joao'

console.log(pessoaConstante)

