function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto ={
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
// neste momento o this.preço nao encontra  dentro do produto pois ele esta fora do escopo (contexto lexico)
//resultado NaN
console.log(getPreco())

//sendo declarado no contexto global o preco e o desconto serão localizado
global.preco = 20
global.desc = 0.1
console.log(getPreco())

//neste contexto o valor é localizado dentro do produto pois ele entra no contexto de um novo objeto
console.log(produto.getPreco())


// outras formas de executar a função get preço é atraves do call e do apply
const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro)) 

// call - Neste caso o 1 parametro é o contexto (objeto), e os demais são os parametros que serão passados para a função
console.log(getPreco.call(carro))

// call - Neste caso os parametros deve ser passados dentro de um array 1º parametro é o contexto (objeto), e os demais são os parametros que serão passados para a função
console.log(getPreco.apply(carro))
