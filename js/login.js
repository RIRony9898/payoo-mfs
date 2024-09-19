document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(mobileNumber === '0178' && pinNumber === '1234') {
        console.log('Login Successful');
        window.location.href='../home.html'
    }
    else{
        alert('Wrong mobile number or pin.');
    }
})