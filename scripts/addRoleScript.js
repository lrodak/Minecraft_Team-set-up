function addRole(){
 
    addRoleVariables = document.getElementById("add_role_id").value;
    document.getElementById("customRole").style.display = "block";
    document.getElementById("customRoleLabel").innerText = addRoleVariables;

    document.getElementById("customRoleText").style.color = "#" + ((1<<24)*Math.random() | 0).toString(16);
}