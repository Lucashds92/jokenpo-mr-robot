window.onload = function() {
    /*Declaração das variáveis*/
    var btnTesoura = document.getElementById("btnTesoura");
    var btnPapel = document.getElementById("btnPapel");
    var btnPedra = document.getElementById("btnPedra");

    var suaEscolha = document.getElementById("suaEscolha");
    var suaEscolhaImg = document.getElementById("suaEscolhaImg");
    var escolhaDaPersonagem = document.getElementById("escolhaDaPersonagem");
    var escolhaDaPersonagemImg = document.getElementById("escolhaDaPersonagemImg");

    /*Adicionar eventos aos botões*/
    btnTesoura.addEventListener("click", () => {
        suaEscolha.innerText = "TESOURA";
        suaEscolhaImg.src = "img/tesoura.png";
        personagemEscolhe();
    });

    btnPapel.addEventListener("click", () => {
        suaEscolha.innerText = "PAPEL";
        suaEscolhaImg.src = "img/papel.png";
        personagemEscolhe();
    });

    btnPedra.addEventListener("click", () => {
        suaEscolha.innerText = "PEDRA";
        suaEscolhaImg.src = "img/pedra.png";
        personagemEscolhe();
    });

    /*Automatizar escolha da personagem*/
    function personagemEscolhe() {
        var randomNumber = Math.floor(Math.random() * 4);
        if(randomNumber == 1){
            escolhaDaPersonagem.innerText = "TESOURA";
            escolhaDaPersonagemImg.src = "img/tesoura.png";
        }else if(randomNumber == 2){
            escolhaDaPersonagem.innerText = "PAPEL";
            escolhaDaPersonagemImg.src = "img/papel.png";
        }else{
            escolhaDaPersonagem.innerText = "PEDRA";
            escolhaDaPersonagemImg.src = "img/pedra.png";
        }
        definirVencedor();
    };
    
    /*Definir quem é o vencedor*/
    var resultadoFinal = document.getElementById("resultadoFinal");
    var resultadoFinalImg = document.getElementById("resultadoFinalImg");

    function definirVencedor() {
        if(suaEscolha.innerText === escolhaDaPersonagem.innerText){
            resultadoFinal.innerText = "NINGUÉM GANHOU, NINGUÉM PERDEU... EMPATE!";
            resultadoFinalImg.src = "img/empatou.png";
        } else if (suaEscolha.innerText == "TESOURA" && escolhaDaPersonagem.innerText == "PAPEL"){
            resultadoFinal.innerText = "YAY, VOCÊ É O GRANDE VENCEDOR DESSA PARTIDA! PARABÉNS!";
            resultadoFinalImg.src = "img/venceu.png";
        } else if (suaEscolha.innerText == "TESOURA" && escolhaDaPersonagem.innerText == "PEDRA"){
            resultadoFinal.innerText = "OH NÃO, PARECE QUE O MR. ROBOT GANHOU DESSA VEZ...";
            resultadoFinalImg.src = "img/perdeu.png";
        } else if (suaEscolha.innerText == "PAPEL" && escolhaDaPersonagem.innerText == "TESOURA"){
            resultadoFinal.innerText = "OH NÃO, PARECE QUE O MR. ROBOT GANHOU DESSA VEZ...";
            resultadoFinalImg.src = "img/perdeu.png";
        } else if (suaEscolha.innerText == "PAPEL" && escolhaDaPersonagem.innerText == "PEDRA"){
            resultadoFinal.innerText = "YAY, VOCÊ É O GRANDE VENCEDOR DESSA PARTIDA! PARABÉNS!";
            resultadoFinalImg.src = "img/venceu.png";
        } else if (suaEscolha.innerText == "PEDRA" && escolhaDaPersonagem.innerText == "TESOURA"){
            resultadoFinal.innerText = "YAY, VOCÊ É O GRANDE VENCEDOR DESSA PARTIDA! PARABÉNS!";
            resultadoFinalImg.src = "img/venceu.png";
        } else if (suaEscolha.innerText == "PEDRA" && escolhaDaPersonagem.innerText == "PAPEL"){
            resultadoFinal.innerText = "OH NÃO, PARECE QUE O MR. ROBOT GANHOU DESSA VEZ...";
            resultadoFinalImg.src = "img/perdeu.png";
        }
    };

    /*Jogar denovo */

    var jogarDenovo = document.getElementById("jogarDenovo");
    jogarDenovo.addEventListener("click", () => {
        suaEscolha.innerText = "";
        suaEscolhaImg.src = "img/interrogacao.png";
        escolhaDaPersonagem.innerText = "";
        escolhaDaPersonagemImg.src = "img/interrogacao.png";
        resultadoFinal.innerText = "que suspense! estamos curiosos...";
        resultadoFinalImg.src = "img/suspense.png";
    });
};