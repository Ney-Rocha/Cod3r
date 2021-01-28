class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('João')
p1.falar()


//Leva vantagem, pois este objeto tem ciencia sobre o contexto lexico no qual foi criado
const pessoa2 = nome => {
    return{
        falar:()=> console.log(`Olá meu nome é ${nome}`)
    }
}

const p2 = pessoa2 ('João')
p2.falar()