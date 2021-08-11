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

    document.getElementById("player1_role1").style.display = 'none';
    document.getElementById("player1_role2").style.display = 'none';
    document.getElementById("player1_role3").style.display = 'none';
    document.getElementById("player1_role4").style.display = 'none';
    document.getElementById("player1_role5").style.display = 'none';

    document.getElementById("player2_role1").style.display = 'none';
    document.getElementById("player2_role2").style.display = 'none';
    document.getElementById("player2_role3").style.display = 'none';
    document.getElementById("player2_role4").style.display = 'none';
    document.getElementById("player2_role5").style.display = 'none';

    document.getElementById("player3_role1").style.display = 'none';
    document.getElementById("player3_role2").style.display = 'none';
    document.getElementById("player3_role3").style.display = 'none';
    document.getElementById("player3_role4").style.display = 'none';
    document.getElementById("player3_role5").style.display = 'none';

    var src=["images/minecraft_axe.png","images/minecraft_pickaxe.jpg","images/minecraft_netherrack.png","images/minecraft_dragonhead.png","images/minecraft_wheat.jpg","images/minecraft_potion.jpg","images/minecraft_bricks.png","images/minecraft_chestplate.png","images/minecraft_sword.png"]

    var player1_displayed_roles=1;
    var player2_displayed_roles=1;
    var player3_displayed_roles=1;

    for(var i=0; i<=roles; i++){
        if(role_list[i]==1){
            switch(player1_displayed_roles){
            case 1:    
                document.getElementById("player1_role1").src = src[i];
                document.getElementById("player1_role1").style.display = 'inline';
                player1_displayed_roles++;
                break;
            case 2:
                document.getElementById("player1_role2").src = src[i];
                document.getElementById("player1_role2").style.display = 'inline';
                player1_displayed_roles++;
                break;
            case 3:
                document.getElementById("player1_role3").src = src[i];
                document.getElementById("player1_role3").style.display = 'inline';
                player1_displayed_roles++;
                break;
            case 4:
                document.getElementById("player1_role4").src = src[i];
                document.getElementById("player1_role4").style.display = 'inline';
                player1_displayed_roles++;
                break;
            case 5:
                document.getElementById("player1_role5").src = src[i];
                document.getElementById("player1_role5").style.display = 'inline';
                player1_displayed_roles++;
                break;
            }
        }
        if(role_list[i]==2){
            switch(player2_displayed_roles){
            case 1:    
                document.getElementById("player2_role1").src = src[i];
                document.getElementById("player2_role1").style.display = 'inline';
                player2_displayed_roles++;
                break;
            case 2:
                document.getElementById("player2_role2").src = src[i];
                document.getElementById("player2_role2").style.display = 'inline';
                player2_displayed_roles++;
                break;
            case 3:
                document.getElementById("player2_role3").src = src[i];
                document.getElementById("player2_role3").style.display = 'inline';
                player2_displayed_roles++;
                break;
            case 4:
                document.getElementById("player2_role4").src = src[i];
                document.getElementById("player2_role4").style.display = 'inline';
                player2_displayed_roles++;
                break;
            case 5:
                document.getElementById("player2_role5").src = src[i];
                document.getElementById("player2_role5").style.display = 'inline';
                player2_displayed_roles++;
                break;
            }
        }
        if(role_list[i]==3){
            switch(player3_displayed_roles){
            case 1:    
                document.getElementById("player3_role1").src = src[i];
                document.getElementById("player3_role1").style.display = 'inline';
                player3_displayed_roles++;
                break;
            case 2:
                document.getElementById("player3_role2").src = src[i];
                document.getElementById("player3_role2").style.display = 'inline';
                player3_displayed_roles++;
                break;
            case 3:
                document.getElementById("player3_role3").src = src[i];
                document.getElementById("player3_role3").style.display = 'inline';
                player3_displayed_roles++;
                break;
            case 4:
                document.getElementById("player3_role4").src = src[i];
                document.getElementById("player3_role4").style.display = 'inline';
                player3_displayed_roles++;
                break;
            case 5:
                document.getElementById("player3_role5").src = src[i];
                document.getElementById("player3_role5").style.display = 'inline';
                player3_displayed_roles++;
                break;
            }
        }
    }
}