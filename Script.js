// váriaveis
let Dific = document.querySelector("#Selecionar")
let butao = document.querySelector("#comecar")
let valor;

let inputjogar = document.querySelector("#Num")
let botao = document.querySelector("#jogar")

//Selecionar Dificuldade

function selectD() {
    if (Dific.value == "facim") {
        valor = Math.round(Math.random()*10)
    }
    else if(Dific.value == "facil"){
        valor = Math.round(Math.random()*50)
    }
    else if(Dific.value == "normal"){
        valor = Math.round(Math.random()*100)
    }
    else if(Dific.value == "Dificil"){
        valor = Math.round(Math.random()*500)
    }
    else if(Dific.value == "Inferno"){
        valor = Math.round(Math.random()*1000)
    }
    else{
        alert("Dificuldade não selecionada")
    }
    console.log(valor)
}

butao.addEventListener("click", selectD)


// Acertou O Valor

function AcertarouNao() {
    if (inputjogar.value == valor) {
        alert("Você Conseguiu Adivinhar O Número: "+valor)
    }
    else if(inputjogar.value >  valor){
        alert("O Número é Menor")
    }
    else{
        alert("O Número é Maior")
    }
}

botao.addEventListener("click", AcertarouNao)
