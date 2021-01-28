// This = self (python)
//this -  Este
//this é uma forma de referenciar o objeto atual daquela execução
// ex: o Molde de uma escultura - você pode tirar varias outras peças a partit daquele molde

//O this pode variar de acordo como foi chamado, dependendo do contexto
// qdo a função for do tipo arrow o this nunca varia ela sempre vai funcionar da mesma maneira


const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar()
//falar()// não esta apontando para o objeto conflito entre paradigmas: funcional e OO
// bind é um metodo por amarrar um metodo ao dono
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()