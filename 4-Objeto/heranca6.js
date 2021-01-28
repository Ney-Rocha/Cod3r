function Aula(nome, videoId){
    this.nome =  nome,
    this.videoId  = videoId
}

// simulando o a notação de criaçao de estancia New
function novo(f, ...params){
    //na linha de cima ele esta usando o operador spread rest - recebe um conjunto de params e concatena numa string
    //criando um obj novo com anotação literal
    const obj = {}
    //associação do prototipo do objeto ao atributo prototype da função criada
    obj.__proto__ = f.prototype
    //chamando a função apply com o contexto o objeto criado e os parametros (array)
    f.apply(obj, params)
    //retorna um objeto criado assim como na função nativa New
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até logo', 456)

console.log(aula3, aula4)