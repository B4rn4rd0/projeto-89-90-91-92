function addUser(){
    player1name= document.getElementById("player1NameInput").value;
    player2name= document.getElementById("player2NameInput").value;
    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);
    window.location= "gamePage.html";
}