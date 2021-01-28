// O bloco If é um bloco de codigo que só é excutado quando uma deerminada seguencia for verdadeira

function soBoaNoticia (nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function SeForVerdadeEufalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

SeForVerdadeEufalo()
SeForVerdadeEufalo(null)
SeForVerdadeEufalo(undefined)
SeForVerdadeEufalo(NaN)
SeForVerdadeEufalo("")
SeForVerdadeEufalo(0)
SeForVerdadeEufalo(-1)
SeForVerdadeEufalo(' ')
SeForVerdadeEufalo('?')
SeForVerdadeEufalo([])
SeForVerdadeEufalo([1,2])
SeForVerdadeEufalo({})


//teste git