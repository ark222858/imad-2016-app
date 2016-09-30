//counter code
var button=document.getElementById('counter');
var count=0;
button.onclick=function(){
    
    //make a request to cunter endpoint
    
    //capture the response and store it in a variable
    
    //rander the variable in the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=count.toString();
}