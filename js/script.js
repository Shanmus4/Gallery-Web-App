var colorflag=0;
function colorFunction(){

    
    var colors= document.getElementsByClassName('mainnavcc');
    var fontColors=document.getElementsByClassName('font');
    var cardcolor=document.getElementsByClassName('bottom-card')
    
    if(colorflag==0)
    {
        colors[0].style.backgroundColor='#7a7676';
        fontColors[0].style.color='#ededed';
        fontColors[1].style.color='#ededed';
        cardcolor[0].style.backgroundColor='#7a7676';
        colorflag=1;
    }
    else
    {
        colors[0].style.backgroundColor='#b7b7b7';
        fontColors[0].style.color='';
        fontColors[1].style.color='';
        cardcolor[0].style.backgroundColor='#b7b7b7';

        colorflag=0;
    }

}

function deleteFunction(e){
    var li=e.target.parentElement;
    removeChild(li);
}