function addData(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // two way to store data in localstorage

    // 1)
    localStorage.setItem('userEmail',email);
    localStorage.setItem('userPassword',password);

    // 2)
    localStorage.userEmail = email;
    localStorage.userPassword = password
} 