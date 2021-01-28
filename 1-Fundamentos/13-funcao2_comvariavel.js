//armazenando uma função em uma variavel

// cria uma funcção denttro de uma variavel, nem toda linguagem permite fazer isso
//função anonima
const impirmirSoma = function(a, b){
  console.log( a + b)
}
impirmirSoma(3,4)

//armazenando uma função arrow em uma variavel
//novo conceito a partir de 2015
const soma = (a, b) => {
  return a + b
}

console.log(soma(2,3))


// retorno implicito / novo conceito 2015
const subtracao = (a,b)=> a-b //resumo de  uma funçã0 arrow function
console.log(subtracao(3,2))

const imprimir2 = a => console.log(a)

imprimir2(8)