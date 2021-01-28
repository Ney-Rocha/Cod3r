//IIFE - Immediately Invoked Function expression
// Uma funcação auto envoacada qdo o codigo é lido mas tudo que estiver dentro da função mantem o escopo local 
// Muito indicado para ultilizar no browser e fujir do escopo global

(function(){
    console.log('Será executado na hora!')
    console.log('foge do escopo mais abrangente!')
})()
//  a funcção é envolvida dentro de pararenteres e para evocar-la basta colocar um () no final da função ela será automaticamente evocada assim qdo terminar de ser lida
// var, const let tudo estara dispponivel somente dentro do escopo local, ou seja, vc consegue criar diversos modulos. 
