function randomness(){ 

    var players=5;
    var sum=[1,1,1,1];
    var sum2=[0,0,0,0]
    var roles=9;
    var max_roles = roles/players;

    for(var i=0; i<roles ; i++){
        var random = Math.floor(Math.random() * players);
        sum[i]=random+1;
        
        // if(sum2[i]<max_roles){
        //     sum2[i]++;
        // }
    }

    document.getElementById("random_numbers").innerHTML = sum[0]+" "+sum[1]+" "+sum[2]+" "+sum[3]+" "+sum[4]+" "+sum[5]+" "+sum[6]+" "+sum[7]+" "+sum[8];
}

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

function showPlayerList(){
    document.getElementById("player3").style.display = "block";
    document.getElementById("player4").style.display = "block";
    document.getElementById("player5").style.display = "block";
    document.getElementById("player6").style.display = "block";
    document.getElementById("player7").style.display = "block";
    document.getElementById("player8").style.display = "block";
    document.getElementById("player9").style.display = "block";
    document.getElementById("player10").style.display = "block";
}