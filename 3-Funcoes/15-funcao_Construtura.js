// função construtora funciona igual as classes funcionam como  python ou no C, C//#
//É uma forma diferente de se escrever uma função e instanciar funções, ou seja roda-la em momentos distintos

//O nome de uma função construtora se escreve com letra maiusculo (boas praticas)
function Carro( velocidadeMaxima = 200, delta = 5){
    //atributo privado - nome pode ser acessado de fora da funcao. (exemplo Carro.velocidadeAtual)
    // qdo estanciar nao tem como acessar este atributo
    let velocidadeAtual = 0

    //metodo publico - consegue usar de fora da função por conta da palavra This
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Para tornar algo visivel para fora da função construtora
    //metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro //ou new Carro()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

// a função funciona como um molde e apartir deste molde vc pode construir qtos objetos vc quiser
 console.log(typeof(Carro))
 console.log(typeof(ferrari))
 console.log(typeof(uno))