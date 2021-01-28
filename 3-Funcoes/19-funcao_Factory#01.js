// uma funcao factory é uma função que retorna um objeto
// factory - fabrica
// ao invez de criar um objeto vc cria uma função que sempre que for executada cria uma nova pessoa de forma independente

function criaPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criaPessoa())