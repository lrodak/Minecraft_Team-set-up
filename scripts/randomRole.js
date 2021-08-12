function randomness(){ 

    var number_of_players= document.getElementById("playerNumberInput").value;
    var role_list=[];
    var rolesPerPlayer=[0,0,0,0,0,0,0,0,0,0];
    var roles=9;
    var max_roles = Math.floor(roles/number_of_players);
    var extra_Roles = roles%number_of_players;
    var equalDistribution = document.getElementById("equalDistributionInput").checked;
    var playersTMP=0;

    // alert("players: "+number_of_players+" max_roles: "+max_roles+" extra_roles: "+extra_Roles+" equal_distribution: "+equalDistribution);
    
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
            } else {
                rolesPerPlayer[random_role]++;
            }
        }else if(rolesPerPlayer[random_role]<1){
            rolesPerPlayer[random_role]++;
            playersTMP++;
        }else if(playersTMP>=number_of_players){
            rolesPerPlayer[random_role]++;
        }else i--;
    }

    document.getElementById("random_roles").innerHTML = role_list[0]+" "+role_list[1]+" "+role_list[2]+" "+role_list[3]+" "+role_list[4]+" "+role_list[5]+" "+role_list[6]+" "+role_list[7]+" "+role_list[8];

    switch(number_of_players){
        case '2':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1];
            break;
        case '3':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2];
            break;
        case '4':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3];
            break;
        case '5':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4];
            break;
        case '6':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5];
            break;
        case '7':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5]+" "+rolesPerPlayer[6];
            break;
        case '8':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5]+" "+rolesPerPlayer[6]+" "+rolesPerPlayer[7];
            break;
        case '9':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5]+" "+rolesPerPlayer[6]+" "+rolesPerPlayer[7]+" "+rolesPerPlayer[8];
            break;
        case '10':
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5]+" "+rolesPerPlayer[6]+" "+rolesPerPlayer[7]+" "+rolesPerPlayer[8];
            break;
        default:
            document.getElementById("roles_per_player").innerHTML = rolesPerPlayer[0]+" "+rolesPerPlayer[1]+" "+rolesPerPlayer[2]+" "+rolesPerPlayer[3]+" "+rolesPerPlayer[4]+" "+rolesPerPlayer[5]+" "+rolesPerPlayer[6]+" "+rolesPerPlayer[7]+" "+rolesPerPlayer[8];
    }

    var src=["images/minecraft_axe.png","images/minecraft_pickaxe.jpg","images/minecraft_netherrack.png","images/minecraft_dragonhead.png","images/minecraft_wheat.jpg","images/minecraft_potion.jpg","images/minecraft_bricks.png","images/minecraft_chestplate.png","images/minecraft_sword.png"]

    var displayed_roles = [0,0,0,0,0,0,0,0,0];
    var player1=["player1_role1","player1_role2","player1_role3","player1_role4","player1_role5"];
    var player2=["player2_role1","player2_role2","player2_role3","player2_role4","player2_role5"];
    var player3=["player3_role1","player3_role2","player3_role3","player3_role4","player3_role5"];
    var player4=["player4_role1","player4_role2","player4_role3","player4_role4","player4_role5"];
    var player5=["player5_role1","player5_role2","player5_role3","player5_role4","player5_role5"];
    var player6=["player6_role1","player6_role2","player6_role3","player6_role4","player6_role5"];
    var player7=["player7_role1","player7_role2","player7_role3","player7_role4","player7_role5"];
    var player8=["player8_role1","player8_role2","player8_role3","player8_role4","player8_role5"];
    var player9=["player9_role1","player9_role2","player9_role3","player9_role4","player9_role5"];
    var player10=["player10_role1","player10_role2","player10_role3","player10_role4","player10_role5"];

    for(var k=0; k<=4; k++){
        document.getElementById(player1[k]).style.display = 'none';
        document.getElementById(player2[k]).style.display = 'none';
        document.getElementById(player3[k]).style.display = 'none';
        document.getElementById(player4[k]).style.display = 'none';
        document.getElementById(player5[k]).style.display = 'none';
        document.getElementById(player6[k]).style.display = 'none';
        document.getElementById(player7[k]).style.display = 'none';
        document.getElementById(player8[k]).style.display = 'none';
        document.getElementById(player9[k]).style.display = 'none';
        document.getElementById(player10[k]).style.display = 'none';
    }

    for(var i=0; i<=roles; i++){
        switch(role_list[i]){
            case 1:
                document.getElementById(player1[displayed_roles[1]]).src = src[i];
                document.getElementById(player1[displayed_roles[1]]).style.display = 'inline';
                displayed_roles[1]++;
            break;
            case 2:
                document.getElementById(player2[displayed_roles[2]]).src = src[i];
                document.getElementById(player2[displayed_roles[2]]).style.display = 'inline';
                displayed_roles[2]++;
            break;
            case 3:
                document.getElementById(player3[displayed_roles[3]]).src = src[i];
                document.getElementById(player3[displayed_roles[3]]).style.display = 'inline';
                displayed_roles[3]++;
            break;
            case 4:
                document.getElementById(player4[displayed_roles[4]]).src = src[i];
                document.getElementById(player4[displayed_roles[4]]).style.display = 'inline';
                displayed_roles[4]++;
            break;
            case 5:
                document.getElementById(player5[displayed_roles[5]]).src = src[i];
                document.getElementById(player5[displayed_roles[5]]).style.display = 'inline';
                displayed_roles[5]++;
            break;
            case 6:
                document.getElementById(player6[displayed_roles[6]]).src = src[i];
                document.getElementById(player6[displayed_roles[6]]).style.display = 'inline';
                displayed_roles[6]++;
            break;
            case 7:
                document.getElementById(player7[displayed_roles[7]]).src = src[i];
                document.getElementById(player7[displayed_roles[7]]).style.display = 'inline';
                displayed_roles[7]++;
            break;
            case 8:
                document.getElementById(player8[displayed_roles[8]]).src = src[i];
                document.getElementById(player8[displayed_roles[8]]).style.display = 'inline';
                displayed_roles[8]++;
            break;
            case 9:
                document.getElementById(player9[displayed_roles[9]]).src = src[i];
                document.getElementById(player9[displayed_roles[9]]).style.display = 'inline';
                displayed_roles[9]++;
            break;
        }
    }
}