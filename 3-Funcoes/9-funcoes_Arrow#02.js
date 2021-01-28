// this na função arrow é fixo, ele respeita o contexto da função que foi criada
function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
        
    }, 1000)
}

new Pessoa