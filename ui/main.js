console.log('Loaded!');

//change the text of the content
var element=document.getElementById('main-text');
element.innerHTML='New Value';

//make the image move

var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
var img=document.getElementById('madi');
img.onclick=function () {
    var interval=setInterval(moveRight,50);
};