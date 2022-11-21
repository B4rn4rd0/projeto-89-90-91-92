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
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    charAt1 = word.charAt(1);
    comprimentoDiv2 = Math.floor(word.length/2);
    charAt2 = word.charAt(comprimentoDiv2);
    comprimentoMenos1 = word.length-1;
    charAt3 = word.charAt(comprimentoMenos1);
    removeCharAt1 = word.replace(charAt1,"_");
    removeCharAt2 = removeCharAt1.replace(charAt2,"_"); 
    removeCharAt3 = removeCharAt2.replace(charAt3,"_");
    questionWord = "<h4 id='wordDisplay'>Palavra: "+ removeCharAt3 + "</h4>";
    input_box = "<br>Resposta: <input type= 'text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = questionWord+ input_box+ checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""; 
}
turnoPergunta = "player1";
turnoResposta = "player2";
function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    if (answer == word){
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