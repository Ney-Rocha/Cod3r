function retornaMoney(valor){
    valorDecimal = valor.toFixed(2).toString().replace('.', ',')
    return 'R$ '+ valorDecimal    
}

console.log(retornaMoney(0.300000000004))