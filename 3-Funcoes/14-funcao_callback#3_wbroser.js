// Exemplo de callback no browser
// O evento de callback é muito utilizado no browser, pois os eventos são muito usados nos navegadores

document.getElementsByTagName('body')[0].onClick = function (e){
    console.log('O evento ocorreu!')
}
