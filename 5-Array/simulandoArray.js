const quaseArray = { 0: 'rafael', 1:'Ana', 2: 'Bia'}
console.log(quaseArray)

// simulando um array com um obj/ mostrando que a partir de uma estrutura de obj podemos ter um array, 
//Não indicado pois os arrays tem diversos metodos prontos pra facilitar varios trabalhos
Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this) },
    enumerable:false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)