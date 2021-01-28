//operador destructuring ES2015
//Operaddor que desestrutura, ele tira da estrutura um alguma coisa (array, objeto)

// em objeto usa {} (chave)
const pessoa = {
  nome:'ana',
  idade: 5,
  endereco:{
    logradouro: 'rua joao ABc',
    numero:100,
  }
}
// destructuring, tira do contexto
const {nome, idade} = pessoa
console.log(nome, idade)

//dadno um apelido
const { nome: n, idade: i} = pessoa
console.log(n,i)

//chamando algo que nao existe
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// buscando um objeto dentro do outro
const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// qdo tenta acessar um dado inexistente este dá erro
// const { conta: {ag, num}} = pessoa
// console.log(ag,num)

// em array usa colchete[] (colchete)