function retornaJurosSimples(capitalInicial, taxaJuros, TempoAplicacao){
    return capitalInicial + (capitalInicial * taxaJuros * TempoAplicacao)
}

function retornaJurosComposto(capitalInicial, taxaJuros, TempoAplicacao){
    return capitalInicial + (1 + taxaJuros) ** TempoAplicacao
}


console.log(retornaJurosSimples( 100, 3/10, 4))
console.log(retornaJurosComposto( 100, 3/10, 4))