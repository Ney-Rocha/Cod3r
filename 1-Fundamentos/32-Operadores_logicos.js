/* tabela verdade E
v e v  -> v
v e f  -> f
f e ?  -> f */


/* tabela verdade OU
v ou ? -> v
f ou v -> v
f ou f -> f */

/* tabela verdade OU exclusivo
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f */

/*
!v -> false
!f -> verdadeiro*/
/*
| -  Compara bit a bit
|| - Ou
&& -  e 
!! -  Converte para boolean
*/
function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv32 = trabalho1 && trabalho2 //(normalmente chamado de curto circuito se o primeiro for vdd nem olha para o segundo)
    //não existe operador ouexclusivo para tipo boleanos, usamos artificio bit a bit
    //const compraTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv50 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    /*
        Forma antiga par chave valor

    return { comprarSorvete:comprarSorvete,
        comprarTv32:comprarTv32, 
        comprarTv50:comprarTv50, 
        manterSaudavel:manterSaudavel}*/

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

