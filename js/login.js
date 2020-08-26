

$("#loginForm").submit(function(e) {
    e.preventDefault();
    var regno = $("#regno").val();
    var pass = $("#password").val();

    let body = {
        "reg" : regno,
        "password" : pass
    };


console.log(body);
    $.ajax({
        type: "POST",
        url:'https://adg-ccr.herokuapp.com/login',
        data: body,
        success: function(AJAXresult){
            
            if(AJAXresult==='error'){
                alert ("Invalid details");
            }
            else{
                
                sessionStorage.setItem("userData", JSON.stringify(AJAXresult));
                
                window.open("home.html","_self");
            }
            
            
        },
        error : function(xhr,status,error){
            if(error){
                alert ("Invalid input");
            }
        }
    });
    
    
});

// function getUser(){
    
//      return userData;
// }