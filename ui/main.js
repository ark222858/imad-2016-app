//counter code
var button=document.getElementById('counter');

button.onclick=function(){
    
    //create a request to cunter endpoint
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //take some action
            if(request.status==200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
            
        }
    };
     //make a request to cunter endpoint
     request.open('GET','http://ark222858.imad.hasura-app.io/counter',true);
     request.send(null);
};

//submit names
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make the request to the server and send the names
    //capture a list of name and render it as a list
    
    
     
};