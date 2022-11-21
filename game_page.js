player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
document.getElementById("player1name").innerHTML = player1name +": ";
document.getElementById("player2name").innerHTML = player2name +": ";
player1score = 0;
player2score = 0;
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta- " + player1name;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta- " + player2name;

function send(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    actual_answer = parseInt(numero1) * parseInt(numero2);
    question_number = "<h4>" + numero1 + " X "+ numero2 +"</h4>";
    input_box = "<br>Resposta : <input type ='text' id ='input_check_box'>";
    check_button = "<br><br><button class ='btn btn-info'  onclick ='check()'> Checar </button>";
    row = question_number + input_box+ check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("numero1").value = ""; 
    document.getElementById("numero2").value = ""; 
}
turnoPergunta = "player1";
turnoResposta = "player2";
function check(){
    getAnswer = document.getElementById("input_check_box").value;
    if (getAnswer == actual_answer){
    if (turnoResposta == "player1"){
    player1score = player1score+ 1;
    document.getElementById("player1score").innerHTML = player1score;
    }
    else{
        player2score= player2score+1;
        document.getElementById("player2score").innerHTML = player2score;
    }
    }  
    if (turnoPergunta == "player1"){
        turnoPergunta = "player2";
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: "+ player2name;
    }
    else{
        turnoPergunta = "player1";
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: "+ player1name;  
    }
    if (turnoResposta == "player1"){
         turnoResposta = "player2";
         document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: "+player2name;
    }
    else{
        turnoResposta = "player1";
        document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: "+player1name;   
    }
    document.getElementById("output").innerHTML = "";
}