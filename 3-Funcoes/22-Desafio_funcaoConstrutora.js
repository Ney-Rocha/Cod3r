function Pessoa(nome){   
    this.nome = nome


    this.falar = () => {console.log(`Óla meu nome é ${this.nome}`)}
}

const p1 = new Pessoa ('Vaney')
p1.falar()