class lancamento{
    // função contrutora que criará a instancia
    constructor (nome='Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado 
    }
}
//teste git
// cria um estancia da classe Lancamento adicionando um valor
const salario = new lancamento('Salario', 45000)
//Cria uma nova isntancia da classe Lancamento subtraindo um valor
const contaDeLuz = new lancamento('Luz', -220)
// cria um nova instancia do ciclo financeiro
const contas = new CicloFinanceiro(6, 2018)
//através da instancia criada adiciona o salario e subtrai o valor da conta de luz
contas.addLancamentos(salario, contaDeLuz)
// exibe um saldo baseado no resultado da função sumario
console.log(contas.sumario())