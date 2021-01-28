//objeto
// criado de forma literaria
console.log(typeof Object)
//a Funcção pode ser instanciada  função objeto criado a partir de uma função (como se fosse um construtor)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)


// Criado a partir da class
// função construtora
class Produto{} //EcmaScript 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())


