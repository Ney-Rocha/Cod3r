// factory é uma funçaõ que retorna objetos
// você tbm pode ter umm factory que retorna varias funções agrupadas
function criarProduto(nome, preco){
    return{
        nome,// nome:nome
        preco, 
        desconto: 0.1
    }
}
console.log(criarProduto('pao', 12.50))
console.log(criarProduto('leite', 16.50))