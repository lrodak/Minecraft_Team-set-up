function randomness(){ 

    var players= document.getElementById("playerNumberInput").value;
    var sum=[1,1,1,1];
    var sum2=[0,0,0,0,0,0,0,0,0,0];
    var roles=9;
    var max_roles = Math.floor(roles/players);
    var extra_Roles = roles%players;

    // if(roles%players!==0){
    //     max_roles++;
    // }

    alert("players: "+players+" max_roles: "+max_roles+" extra_roles: "+extra_Roles);

    for(var i=0; i<roles ; i++){

        var random = Math.floor(Math.random() * players);
        sum[i]=random+1;

        if(sum2[random]>=max_roles){
            
            if(extra_Roles>0 && sum2[random]!==max_roles+1){
                sum2[random]++;
                extra_Roles--
            }
            else i--;

        } else {
            sum2[random]++;
        }
    }

    document.getElementById("random_numbers").innerHTML = sum[0]+" "+sum[1]+" "+sum[2]+" "+sum[3]+" "+sum[4]+" "+sum[5]+" "+sum[6]+" "+sum[7]+" "+sum[8];
    document.getElementById("random_numbers2").innerHTML = sum2[0]+" "+sum2[1]+" "+sum2[2]+" "+sum2[3]+" "+sum2[4]+" "+sum2[5]+" "+sum2[6]+" "+sum2[7]+" "+sum2[8];
}