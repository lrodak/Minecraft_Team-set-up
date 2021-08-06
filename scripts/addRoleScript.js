function addRole(){
 
    addRoleVariables = document.getElementById("add_role_id").value;

    if(document.getElementById("customRole").style.display != "block"){
       document.getElementById("customRole").style.display = "block";
       document.getElementById("customRoleLabel").innerText = addRoleVariables;
       document.getElementById("customRoleText").style.color = "#" + ((1<<24)*Math.random() | 0).toString(16);
    }else{
       document.getElementById("customRole2").style.display = "block";
       document.getElementById("customRole2Label").innerText = addRoleVariables;
       document.getElementById("customRole2Text").style.color = "#" + ((1<<24)*Math.random() | 0).toString(16);
    }

    
}