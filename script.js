function playerList(){
    howManyPlayersYouSay = document.getElementById("playerNumberInput").value;
    
    showPlayerList();

    if(howManyPlayersYouSay<3){
        document.getElementById("player3").style.display = "none";
    } 
    if(howManyPlayersYouSay<4){
        document.getElementById("player4").style.display = "none";
    } 
    if(howManyPlayersYouSay<5){
        document.getElementById("player5").style.display = "none";
    } 
    if(howManyPlayersYouSay<6){
        document.getElementById("player6").style.display = "none";
    }
    if(howManyPlayersYouSay<7){
        document.getElementById("player7").style.display = "none";
    }
    if(howManyPlayersYouSay<8){
        document.getElementById("player8").style.display = "none";
    }
    if(howManyPlayersYouSay<9){
         document.getElementById("player9").style.display = "none";
    }
    if(howManyPlayersYouSay<10){
        document.getElementById("player10").style.display = "none";
    }
}

function loadPage(){
    document.getElementById("playerNumberInput").value = "2";
}