const nums  =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Break interrompe a laço corrente
for (x in nums){
     // if(x == 5)break
    if (x == 5){
        break
    }   
    console.log(`${x} = ${nums[x]}`)
    
}

//continue pula e vai para a laço posterior

for (y in nums){
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// você cria um rotulo e chama ele no laco interno com isso vc consegue quebrar os dois for
//Evitar de usar (desogarnizado/ dificil leitura)
// externo - rotulo pode ser ao lado ou abaixo
externo: for (a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
console.log('Fim')