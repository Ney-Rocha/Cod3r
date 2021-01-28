function MeuObjeto(){
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Neste caso o resultado será true, pois qdo vc cria um novo objto atraves de função construtora new os obj apotarão para o mesmo prototipo, ou seja será apontando para o mesmo endereço de memoria
console.log(obj1.__proto__ === obj2.__proto__)

MeuObjeto.prototype.nome = "Anônimo"
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

// afirmar que existem 3 formas de vermos a palavra prototype
// 1 - o Conceito de protótipo -  aquela que encadeia herança, que faz link entre objetos
// 2 - Object.prototype - O atributo prototype que toda função tem. Especifica a função que cria um objeto protótipo.
// 3 - O atributo __proto__ que é no mundo dos objetos, como os objetos referenciam seu prototipos. Aponta para o objeto que foi usado como protótipo quando o objeto foi instanciado.

//imprimirá o valor do prototipo
obj1.falar()
// subscreverá o valor do prototipo através do atributo this
obj2.nome = 'Raphael'
// imprimirá o novo valor atribuido
obj2.falar()

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__=== MeuObjeto.prototype)
// MeuObjeto é uma função logo o resultado será vdd pois seu prototip tbm é uma função
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype === Object.__proto__)
Neste caso ele tra´ra 
console.log(Object.prototype.__proto__ === null)
