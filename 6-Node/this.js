// this não aponta para global e sim para o module então a  afirmação abaixo é falsa
console.log(this === global)

//this é um objeto que é a referencia de module export, então a afirmação abaixo é falsa
console.log(this === module)

// Sendo assim o this é estritamente igual ao module.exports, sim esta afirmação é verdadeira
console.log(this === module.exports)

// Sendo assim o this é estritamente igual ao module.exports, sim esta afirmação é verdadeira, pois, exports aponta para a mesma referencia de objeto que module.exports
console.log(this === exports)

// this dentro da função que esta dentro do modulo
//this neste caso nao aponta para o export , ou module exports, neste caso ela aponta para o global
function logThis(){
    console.log('Dentro de um função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    // neste caso você esta inserindo este conteúdo no escopo global
    this.perigo = "qualquer coisa"
}

// neste caso você esta inserindo este conteúdo no module.exports
this.perigo = "qualquer coisa"

// por isso é preciso entender o contexto que vc esta usando o this
// dentro da função  =  global
// fora da função dentro de um modulo = module.expports
// isso quer dizer transformando aquela função em algo publico, ou seja, algo que será visto fora do modulo

logThis()