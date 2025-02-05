


function sortear(){
    let nipes = ["♥", "♦", "♣", "♠"]

    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    

    // gerando numeros aleatorios
    // math.random gera numeros aleatorio de 0 a 4
    // math.flor gera numeros inteiros
    let nipessorteados = nipes[Math.floor(Math.random() * 4)]
    let facessorteadas = faces[Math.floor(Math.random() * 4)]
    console.clear()
   // console.log(facessorteadas)
   // console.log(nipessorteados)

    // determinar a cor com base do nipe sortiado
    let cor
    if (nipessorteados === "♥" || nipessorteados === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000000"
    }


    // renderização do canto superior esquerdo
    document.getElementById("supesq").innerHTML = `<div>${facessorteadas}</div> <div>${nipessorteados}</div>`
    // a linha abaixo aplica o estilo de cor da linha html identificado como supesq
    document.getElementById("supesq").style.color = cor

    // renderização do centro da carta
    // verificar o nipe sortiado e renderizar uma imagem ou o nipe e sua respectiva cor de acordo com a carta
    let cc = document.getElementById("centroCarta")
    if (facessorteadas === "J") {
        cc.innerHTML = `<imgsrc=img/valete.png>`
    }
    // renderização do cnato inferior direito
    document.getElementById("infdir").innerHTML = `<div>${facessorteadas}</div> <div>${nipessorteados}</div>`
    // a linha abaixo aplica o estilo de cor da linha html identificado como supesq
    document.getElementById("infdir").style.color = cor
}