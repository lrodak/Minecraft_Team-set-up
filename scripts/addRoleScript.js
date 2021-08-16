function addRole(){
 
    addRoleVariables = document.getElementById("add_role_id").value;

    if(document.getElementById("customRole").style.display != "block"){
       document.getElementById("customRole").style.display = "block";
    }else{
       document.getElementById("customRole2").style.display = "block";
    }

    
}