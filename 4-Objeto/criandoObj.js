// Usando a notação Literal
//Não confundir com JSOn
const obj1 = {}
console.log(obj1)

//Object em JS 
console.log(typeof Object, typeof new Object)
const obj2 = new Object //- função construtora nativa
console.log(obj2)

// funcões construtora  -  crianda  por nós mesmo
function Produto(nome, preco, desc){
    this.nome = nome // variavel de propriedade pública encapsulada aberta
    this.getPrecoComDesconto = () => {
        return preco * ( 1 - desc)// neste caso preço e desconto estão encapsulado e nao estão disponiveis para fora do obj
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.15, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função Factory - uma função que cria alguma coisa neste caso um OBJ
// Pode ser criada usando o modo construtor ou literal
function criarFuncionario (nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            //calcula salario a partir do salario base X faltas
            return (salarioBase / 30)*(30 - faltas)
        }
    }
}

const func1 = criarFuncionario('João', 7980, 4)
const func2 = criarFuncionario('Maria', 11400, 1)
console.log(func1.nome,'- R$', func1.getSalario(), func2.nome, '- R$',func2.getSalario())


//função create - Object.create
const filha = Object.create(null)
filha.nome = "Lorena"
console.log(filha)

//Função que retorna Json
//Uma função que  recebe um arquivo Json e transforme em um objeto
// usado qdo temos um Webservice que recebe json

const fromJson = JSON.parse('{ "info": "Sou um Json"}')
console.log(fromJson.info)