// funçoes anonimas (fução sem nome) são funcões que podem ser passadas para outras funções ou ser armazenadas em um variavel
//arrow function são sempre anonimas
const soma = function(x, y){
    return x + y
}

// esta função vai receber o parametro a e b e um terceiro parametro recebe uma função que caso nao receba nada assumirá a função soma por padrão
const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

// chamando função sem o tereceiro parametrito  e usando padrão função soma
imprimirResultado(3, 4)

// chamando função utilizando o terceiro parametro que é a função soma
imprimirResultado(3, 4, soma) 

//chamando a função com o terceiro parametro sendo substituido por outra função (callback)
imprimirResultado(3, 4, function(x, y){
    return x - y
})

//chamando a funcao usando uma arrow function (arrow - que sempre será anonima)
imprimirResultado(3, 4, (x, y) => x * y )

//podemos também colocar uma função anonima dentro de um objeto
const pessoa = {
    // sintaxe pode ser assim:
    falar: function(){
        console.log("Olá")
    },
    //ou de acordo com a nova versão ecma 2015 assim:
    cantar (){
        console.log('la la la')
    }
}

pessoa.falar()
pessoa.cantar()