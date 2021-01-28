// callback - significa chamar de volta
// padrão de projeto observer (observer pattern) -  é um dos padrões mais utilizados na web
// É o padrão que você passa uma função e acontece algum tipo de evento e esta função é chamada de volta para fazer alguma coisa

const fabricantes = [ 'mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//foreach função que percorre array
// a função for each vai percorrer o array fabricantes e para cada elemento que encotrar no array ela vai rodar a função imprimir, ou seja fazer um callback ( chamado de volta)
fabricantes.forEach(imprimir)

// callback com função normal
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

// callback arrow function
fabricantes.forEach(fabricante => console.log(`O fabricante é ${fabricante}`))

//Outro modelo muito utiliado é qdo utilizamos uma chamada Ajax, função é chamado qdo o servidor responde, podendo ser erro ou sucesso
// callback de sucesso - retorna a lista de Cliente
// callback de erro  - retorna um erro e dispara a função para o erro