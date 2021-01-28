//neste caso é preciso utilizar a função Bind para indicar que o objeto é utilizado pela a instancia do momento

function Pessoa1(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
//Neste caso não importa quem esta chamando pois a constante self sempre estará apontando para a pessoa
//voce cria uma constante para a partir dela utilizar os parametros this que vc quer utilizar
function Pessoa2(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(self), 1000)
}

new Pessoa2