//counter code
var button=document.getElementById('counter');
var count=0;
button.onclick=function(){
    
    //make a request to cunter endpoint
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechanfe=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //take some action
            if(reuest.status==200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
            
        }
    };
};