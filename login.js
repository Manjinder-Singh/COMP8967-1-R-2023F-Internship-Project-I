function checkData(){
    var enterEmail = document.getElementById('email').value;
    var enterPassword = document.getElementById('password').value;

    // get data from localstorage
    var getEmail = localStorage.getItem('userEmail');
    var getPassword = localStorage.getItem('userPassword');

    if(getEmail != null && getPassword != null){
        if(enterEmail == getEmail){
            if(enterPassword == getPassword){
                alert("Login Successful");
            }
            else{
                alert("Wrong Password");
            }
        }else{
            alert("Invalid details");
        }
    }else{
        alert("Error");
    }
    
} 