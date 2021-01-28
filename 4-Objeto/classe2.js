class Avo {
    constructor(sobrenome){
        this.sobrenome =  sobrenome
    }
}
//extend - É a palavra reservada que faz a relação de propotipo com outra class
class Pai extends Avo {
    constructor(sobrenome, profissao ='Professor'){
        // super é uma funcação nativa que referencia os atributo da superclass ou seja da classe pai
        // ele recebe como parametro um ou mais atributos da superclasse
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
       super('Silva')

    }
}

const filho = new Filho
console.log(filho)