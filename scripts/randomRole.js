function randomness(){ 

    var number_of_players= document.getElementById("playerNumberInput").value;
    var role_list=[];
    var rolesPerPlayer=[0,0,0,0,0,0,0,0,0,0];
    var roles=9;
    var max_roles = Math.floor(roles/number_of_players);
    var extra_Roles = roles%number_of_players;

    // alert("players: "+number_of_players+" max_roles: "+max_roles+" extra_roles: "+extra_Roles);

    for(var i=0; i<roles ; i++){

        var random_role = Math.floor(Math.random() * number_of_players);
        role_list[i]=random_role+1;

        if(rolesPerPlayer[random_role]>=max_roles){
            if(extra_Roles>0 && rolesPerPlayer[random_role]!==max_roles+1){
                rolesPerPlayer[random_role]++;
                extra_Roles--
            }
            else i--;
        } else {
            rolesPerPlayer[random_role]++;
        }
    }

    document.getElementById("random_roles").innerHTML = role_list[0]+" "+role_list[1]+" "+role_list[2]+" "+role_list[3]+" "+role_list[4]+" "+role_list[5]+" "+role_list[6]+" "+role_list[7]+" "+role_list[8];
    document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5]+" "+rolesPerPlayer[6]+" "+rolesPerPlayer[7]+" "+rolesPerPlayer[8];
}