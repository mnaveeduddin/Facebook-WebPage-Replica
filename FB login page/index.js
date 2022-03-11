

function loginfunction(){

    var uname = document.getElementById("email").value;
		var pwd = document.getElementById("password").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var filterPwd =  /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})+$/;
        
		if(uname =='')
		{
			alert("please enter E-mail address.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(!filterPwd.test(pwd))  
        //   
        //   document.pattern.value==false
		{
			alert("Please enter password in correct format.");
		}
		else
		{
	     alert('Thank You for Login & You are Redirecting to Facebook HomePage');
         window.location.href = "./login.html";
			}
        }



function createfunction(){
    window.location.href = "./createaccount.html";
    }
	
// function emailfunction(){
//     var validate = document.getElementById("email");
//     validate.value = !filter.test(uname);

// }        
//     let x = 
//     if 
//     return false;
// }
//     else {
//         window.location.href = "./login.html";

//     }

    // let x = document.forms["myform"]["username"].value;

    
    // if (x==""){
    //     alert("Please enter E-mail address");
    //     return false;
    // }
    // else {
    // }




