var colorflag=0;
function colorFunction(){

    
    var colors= document.getElementsByClassName('mainnavcc');
    var fontColorss=document.getElementsByClassName('font');
    
    if(colorflag==0)
    {
        colors[0].style.backgroundColor='#7a7676';
        fontColorss[0].style.color='#ededed';
        fontColorss[1].style.color='#ededed';
        colorflag=1;
    }
    else
    {
        colors[0].style.backgroundColor='';
        fontColorss[0].style.color='';
        fontColorss[1].style.color='';
        colorflag=0;
    }

}