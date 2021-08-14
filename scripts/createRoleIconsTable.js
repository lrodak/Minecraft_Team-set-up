function createRoleIconsTable(){

    var images = document.getElementsByClassName('image_role_src'); 
    var srcList = [];
    for(var i = 0; i < images.length; i++) {
        srcList.push(images[i].src);
    }
    return srcList;
}