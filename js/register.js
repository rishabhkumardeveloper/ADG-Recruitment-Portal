$(document).ready(function() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    console.log(vars);
    if(vars.error) {
        alert('Something went wrong!');
    }


$( ".win" ).draggable();

function convertCase() {
    var reg = document.getElementById('regno');
    reg.value = reg.value.toUpperCase();
}

$("#contact-form").submit(function(e) {
    e.preventDefault();
    
    var name = $("#name").val();
    var regno = $("#regno").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();
    var social = $("#social").val();

    if(!name || !regno || !mobile || !email){
        e.preventDefault();
        return alert('Please enter the required fields!');
    } 
    var checkReg = new RegExp(/(^17|^18)[a-zA-z]{3}[0-9]{4}$/);
    
    if (!checkReg.test(regno)) {
        e.preventDefault();
        return alert('Please enter a valid registration number!');
    }
    var checkMob = new RegExp(/^[0-9]{1}[0-9]{9}/);
    if (!checkMob.test(mobile)) {
        e.preventDefault();
        return alert('Please enter a valid mobile number!');
    }
    var checkGmail = new RegExp(/\@vitstudent\.ac\.in$/);
    if (!checkGmail.test(email)) {
        e.preventDefault();
        return alert('Please enter your VIT gmail!');
    }

    let body = {
        "name": name,
        "mobile" : mobile,
        "reg" : regno,
        "email" : email,
    };

    console.log(body);


        console.log("form");
        $.ajax({
            type: "POST",
            url:'https://adgvit-recruitments.herokuapp.com/register',
            data: body,
            success: function(AJAXresult){
                console.log(AJAXresult);

                if (AJAXresult === "true") {
                    alert('Open your email ID for the credentials!');
                    window.open("login.html","_self");
                } else {
                    alert ("Invalid input / User already Registered!");
                    window.open("login.html","_self");
                }
            },
            error : function(xhr,status,error){
                if(error){
                    alert ("Invalid input / User already Registered!");
                }
            }
          });
        


    
    return;

});

});




