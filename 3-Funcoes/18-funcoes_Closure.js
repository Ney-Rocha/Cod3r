// Closure - fechamento
// closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variaveis externas  à função
// é o ambiente que envolve a criação da função
// Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
//contexto léxico

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())