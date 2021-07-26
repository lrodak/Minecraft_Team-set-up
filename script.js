function randomness(){ 

    var players=4;
    var sum = 0;

    for(var i=players; i<0 ; i++){
        sum+=1;
        var random = Math.floor(Math.random() * players);
    }
    document.getElementsByClassName('random_numbers').innerHTML = sum;
}