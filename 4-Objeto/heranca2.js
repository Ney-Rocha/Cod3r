// cadeia  de protótipos (prototype chain)
Object.prototype.attr0= '0'// - evite este tipo de manipulação pois vai impactar em toda a estrutura
const avo = {attr1: 'A'} //prototype é o Object.prototype ou seja o proprio objeto/seu proprio modelo
const pai = { __proto__:avo, attr2:'B',  attr3: 'C'} //prototype é o avó
const filho = {__proto__:pai, attr3: 'C'} //prototype é o pai
console.log(filho.attr0) //vai subindo o nivel dentro da herança até encontrar - neste caso no Object.prototype
console.log(filho.attr1) //- neste caso no object avo
console.log(filho.attr3) //- neste caso ele traz o atributo dele mesmo, usa a técnica de sombreamento, ou seja, ele encontrou nele mesmo e por isso nao busca na cadeia de herança, mesmo que encontre isso é subscrito.

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }

}

const ferrari ={
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo ={
    modelo: 'V40',
    status(){
        //super referencia o metodo do prototipo assim como o this referencia a estância 
        // caso contrário se usarmos o this ele fica envocando de forma recursiva o status
        return `${this.modelo}: ${super.status()}`
    } // shadowing
}

//a função setProtypeOf estabele uma relação de herança entre o objeto e um prototipo
// ela recebe 2 parametros o primeiro é objeto e o segundo é o prototipo
// Esta função permite que vc utilize o modelo de prototipo para o objeto 
//Mas se vocÊ chamar o objeto para exibir suas propriedades será mostrada apenas os atributos declarado no objeto
// existe funcção que consegue exibir o que é atributos do objeto ou se pertence ao objeto pai
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

//Ex:
// neste caso o volvo vai calcular o metodo Super declarado dentro do objeto
//Também exibirá a velocidade maxima declarada na classe pai (herança)
volvo.aceleraMais(100) 
console.log(volvo.status())

// para o exemplo a seguir o modelo vai subscrever o prototipo e vai ler a declaração dentro do objeto nao fará "sombra - shadowing"
//Ela vai subscrever o valor do metodo do prototipo mas nao o do Objeto como no exemplo anterior
// neste exemplo o modelo nao será exibido pois o metodo nao foi subscrito
ferrari.aceleraMais(300)
console.log(ferrari.status())
