function addRole(){
 
    addRoleVariables = document.getElementById("add_role_id").value;

    if(document.getElementById("customRole").style.display != "block"){
       document.getElementById("customRole").style.display = "block";
       document.getElementById("customRoleLabel").innerText = addRoleVariables;

    }else{
       document.getElementById("customRole2").style.display = "block";
       document.getElementById("customRole2Label").innerText = addRoleVariables;
 
    }

    
}