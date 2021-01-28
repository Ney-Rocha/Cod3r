// Filter -  como o proprio nome ja diz serve para filtrar um array baseado numa determinada condição e retorna true or false

const produtos = [
    {nome:'Notebook', preco: 2499, fragil:true},
    {nome:'Ipad Pro', preco: 4199, fragil:true},
    {nome:'Copo de vidro', preco: 12.49, fragil:true},
    {nome:'Copo de Plastico', preco: 18.99, fragil:false},
]

console.log(produtos.filter(function(p){
    return p.nome == 'Notebook'
}))