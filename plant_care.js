            function login(){
                let userName =document.getElementById("userName").value;
                let password2 =document.getElementById("password_user").value;
                let text_show=document.getElementById("text_show");
            let website_username="PlantCareReminder";
            let website_password="123456789";
            if(userName==website_username && password2==website_password){
                window.location="plant_care.html"


            }
            else if(userName==""&&password2==""){
                alert("please enter the username and password");
            }
            else if(userName==website_username&&password2!=website_password){
                document.getElementById("userName").style.border="1px solid green"
                document.getElementById("password_user").style.border="1px solid red"
                text_show.innerHTML="Here username is correct but the password is incorrect"
            }
            else if(userName!=website_username && password2==website_password){
                document.getElementById("userName").style.border="1px solid red"
                document.getElementById("password_user").style.border="1px solid green"
                text_show.innerHTML="Here username is not correct but the password is correct"
            }
            else{
                 document.getElementById("userName").style.border="1px solid green"
                document.getElementById("password_user").style.border="1px solid red"
            }
            
            
            
        }