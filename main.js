function toggleLogin(){
    var login_popup = document.getElementById('login-popup');
    login_popup.classList.toggle('active');

    const targetElement = login_popup.nextElementSibling;

    if(targetElement.classList.contains('active')){
        targetElement.classList.remove('active');
    }
    
}

function toggleSignup(){
    var signup_popup = document.getElementById('signup-popup');
    signup_popup.classList.toggle('active');

    // signup_popup.nextSibling.getElementByClassName('popup').remove('active');
    const targetElement = signup_popup.previousElementSibling;
    
    if(targetElement.classList.contains('active')){
        targetElement.classList.remove('active');
    }
}

function closeModal(){
    var signup_popup = document.getElementById('signup-popup');
    signup_popup.classList.remove('active');

    var login_popup = document.getElementById('login-popup');
    login_popup.classList.remove('active');
}