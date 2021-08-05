function disableRole(parentinput){
 
 var parentTMPColorHolder = parentinput.style.background;

    switch(parentTMPColorHolder)
    {
        case 'red none repeat scroll 0% 0%':
            parentTMPColorHolder='green';        
            break;
        case 'green none repeat scroll 0% 0%':
            parentTMPColorHolder='red';
            break;
        case 'red':
            parentTMPColorHolder='green';        
            break;
        case 'green':
            parentTMPColorHolder='red';
            break;
        default:
            parentTMPColorHolder = 'green';
            break;
    }

    parentinput.style.background = parentTMPColorHolder;
}