function randomness(){ 

    var players=4;
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