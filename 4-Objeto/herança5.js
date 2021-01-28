// toda função possui um atributo chamado .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//É como se disse assim, vai lá no prototipo e inclui esta tarefa!'
String.prototype.reverse = function (){
    // split - seprara o oobjto recebido
    //array - tem a função reverse, ou seja, invertera o sentido
    // Join - junta todos os itens do array (ao contrario do split)
    return this.split('').reverse().join("")
}

console.log(' Escolacoder'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b', 'c', 'd'].first())

// NUNCA SUBSCREVA UMA FUNÇÃO/METODO NATIVA 
String.prototype.toString = function () {
    return "Você estragou tudo!"
}

console.log('Escola Coder'.reverse())