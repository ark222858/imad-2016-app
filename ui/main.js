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

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
     var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //take some action
            if(request.status==200){
                //make the request to the server and send the names
                //capture a list of name and render it as a list
                var names=request.responseText;
                names=JSON.parse(names); 
                var list="";
                for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
            
        }
    };
     //make a request to cunter endpoint
     var nameInput=document.getElementById('name');
     var name=nameInput.value;
     request.open('GET','http://ark222858.imad.hasura-app.io/submit-name?name='+ name,true);
     request.send(null);
   
};