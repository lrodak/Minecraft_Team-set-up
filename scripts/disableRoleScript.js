function disableRole(parentinput){
 
 var parentTMPColorHolder = parentinput.style.background;
   // alert(parentTMPColorHolder);
    switch(parentTMPColorHolder)
    {
        case 'FireBrick none repeat scroll 0% 0%':
            parentTMPColorHolder='DarkOliveGreen';        
            break;
        case 'darkolivegreen none repeat scroll 0% 0%':
            parentTMPColorHolder='FireBrick';
            break;
        case 'FireBrick':
            parentTMPColorHolder='DarkOliveGreen';     
            break;
        case 'DarkOliveGreen':
            parentTMPColorHolder='FireBrick';
            break;
        default:
            parentTMPColorHolder = 'DarkOliveGreen';
            break;
    }

    parentinput.style.background = parentTMPColorHolder;
}