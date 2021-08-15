function createRoleIconsTable(){

    var images = document.getElementsByClassName('image_role_src'); 
    var role_segment = document.getElementsByClassName('role_segment');

    var srcList = [];
    for(var i = 0; i < images.length; i++) {
        if(role_segment[i].style.display !== "none"){
            srcList.push(images[i].src);
        }
    }
    return srcList;
}