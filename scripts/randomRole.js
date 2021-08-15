function randomness(){ 

    var number_of_players= document.getElementById("playerNumberInput").value;
    var role_list=[];
    var rolesPerPlayer=[0,0,0,0,0,0,0,0,0,0];
    var roles=coutRoles();
    var max_roles = Math.floor(roles/number_of_players);
    var extra_Roles = roles%number_of_players;
    var equalDistribution = document.getElementById("equalDistributionInput").checked;
    var playersTMP=0;

    // alert("players: "+number_of_players+" max_roles: "+max_roles+" extra_roles: "+extra_Roles+" equal_distribution: "+equalDistribution);

    if(number_of_players<=roles){
        for(var i=0; i<roles ; i++){

            var random_role = Math.floor(Math.random() * number_of_players);
            role_list[i]=random_role+1;

            if(equalDistribution){
                if(rolesPerPlayer[random_role]>=max_roles){
                    if(extra_Roles>0 && rolesPerPlayer[random_role]!==max_roles+1){
                        rolesPerPlayer[random_role]++;
                        extra_Roles--
                    }
                    else i--;
                } else rolesPerPlayer[random_role]++;
            }else if(rolesPerPlayer[random_role]<1){
                rolesPerPlayer[random_role]++;
                playersTMP++;
            }else if(playersTMP>=number_of_players && rolesPerPlayer[random_role]<5){
                rolesPerPlayer[random_role]++;
            }else i--;
        }
    }

    // document.getElementById("random_roles").innerHTML = role_list[0]+" "+role_list[1]+" "+role_list[2]+" "+role_list[3]+" "+role_list[4]+" "+role_list[5]+" "+role_list[6]+" "+role_list[7]+" "+role_list[8];
    // document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5]+" "+rolesPerPlayer[6]+" "+rolesPerPlayer[7]+" "+rolesPerPlayer[8];
    var src = createRoleIconsTable();

    var displayed_roles = [0,0,0,0,0,0,0,0,0,0];
    var all_players_id_images=["player1_role1","player1_role2","player1_role3","player1_role4","player1_role5",
    "player2_role1","player2_role2","player2_role3","player2_role4","player2_role5","player3_role1","player3_role2","player3_role3","player3_role4","player3_role5",
    "player4_role1","player4_role2","player4_role3","player4_role4","player4_role5","player5_role1","player5_role2","player5_role3","player5_role4","player5_role5",
    "player6_role1","player6_role2","player6_role3","player6_role4","player6_role5","player7_role1","player7_role2","player7_role3","player7_role4","player7_role5",
    "player8_role1","player8_role2","player8_role3","player8_role4","player8_role5","player9_role1","player9_role2","player9_role3","player9_role4","player9_role5",
    "player10_role1","player10_role2","player10_role3","player10_role4","player10_role5"]

    for(var k=0; k<50; k++){
        document.getElementById(all_players_id_images[k]).style.display = 'none';
    }

    for(var i=0; i<=roles; i++){
        document.getElementById(all_players_id_images[displayed_roles[role_list[i]]+((role_list[i]-1)*5)]).src = src[i];
        document.getElementById(all_players_id_images[displayed_roles[role_list[i]]+((role_list[i]-1)*5)]).style.display = 'inline';
        displayed_roles[role_list[i]]++;
    }
}

function coutRoles(){
    var role_segment = document.getElementsByClassName('role_segment');
    var roles_cout = 0;
    for(var i = 0; i < role_segment.length-2; i++) {
        if(role_segment[i].style.display !== "none"){
            roles_cout++;
        }
    }
    return roles_cout;
}