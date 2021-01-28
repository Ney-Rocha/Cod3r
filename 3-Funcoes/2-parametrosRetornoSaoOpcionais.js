// parametros e retornos são opcionais

function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area 
    }
}

// Em Js é possivel passar mais parametros do que foi proposto no escopo, porém estes serão ignorados

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5,5))
