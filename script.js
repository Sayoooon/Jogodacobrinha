/*comentários com várias linhas em java script 

let nome_variavel_let = 15 //console.log dentro
var nome_variavel_var =  // console.log fora
const nome_variavel_const // const: variável fixa. Ex.: pi

// var
if (true){
    var x = 10
}
console.log(x)    // console.log é o "print" do python


//let
if (true){
    let y = 20;
    console.log(y)
}
console.log(y); */

let canvas = document.getElementById("snake");  //desenho
let contexto = canvas.getContext("2d");
let caixa = 32; 
let cobra = [];          // vetores podem guardar vários valores, diferente de uma variável

cobra[0] = {
    x: 8 * caixa, 
    y: 8 * caixa
}

let direcao = "direita";
    
let comida = { //Math.floor:
    x: Math.floor(Math.random() * 15 + 1) *caixa,
    y: Math.floor(Math.random() * 15 + 1) *caixa
}

function criarFundo( ){
    contexto.fillStyle =  "darkgreen";
    contexto.fillRect(0, 0, 16 * caixa, 16 * caixa);
}
criarFundo();

















