function controleBasket (pontoJogo ){
    let pontuacao = pontoJogo.split(", ")
    let piorJogo = 0
    let quebradeRecords = 0
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    for(let i = 0; i < pontuacao.length; i++){
        if(pontuacao[i] > maiorPontuacao){
            maiorPontuacao = pontuacao[i]
            quebradeRecords = quebradeRecords+1

        }else if (pontuacao[i] < menorPontuacao ){
            piorJogo = pontuacao[i]
            piorjogo = i+1
        }
    }
    return [ quebradeRecords, piorJogo]
}

let pontoJogos = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'

console.log(controleBasket(pontoJogos))