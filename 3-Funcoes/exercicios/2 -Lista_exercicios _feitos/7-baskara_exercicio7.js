// b2-4.a.c
// -b+-VDelta/2.a

function retornaBaskara(ax2, bx, c){
    let baskara = []
    const delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0){
        return 'O valor de Delta é menor que zero'
    }

    let x1 = (-bx + Math.sqrt(delta))/ 2 * ax2
    let x2 = (-bx - Math.sqrt(delta))/ 2 * ax2
    baskara.push(x1)
    baskara.push(x2)

    return baskara 

}

console.log(retornaBaskara( 1, 3, 2))
console.log(retornaBaskara( 3, 1, 2))

