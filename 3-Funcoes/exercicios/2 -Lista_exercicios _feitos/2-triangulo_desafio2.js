function tipotriangulo( lado1, lado2, lado3){
    if (lado1 == lado2 && lado2 == lado3){
        return 'Triangulo Equilátero'
    }else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    return 'Triangulo Isósceles'
    }else{
        return 'Triangulo Escaleno'
    }
}
console.log(tipotriangulo(3,3,3))
console.log(tipotriangulo(2,3,3))
console.log(tipotriangulo(2,2,3))
console.log(tipotriangulo(1,2,3))
console.log(tipotriangulo(3,3,1))