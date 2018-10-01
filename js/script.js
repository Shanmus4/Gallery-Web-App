var colorflag=0;
function colorFunction(){

    
    var colors= document.getElementsByClassName('mainnavcc');
    var fontColors=document.getElementsByClassName('font');
    
    if(colorflag==0)
    {
        colors[0].style.backgroundColor='#7a7676';
        fontColors[0].style.color='#ededed';
        fontColors[1].style.color='#ededed';
        colorflag=1;
    }
    else
    {
        colors[0].style.backgroundColor='#b7b7b7';
        fontColors[0].style.color='';
        fontColors[1].style.color='';
        colorflag=0;
    }

}