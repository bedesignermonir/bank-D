document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-check').value
    const pinNumber = document.getElementById('pin-check').value

    if (phoneNumber === '12345' && pinNumber === '1234') {
        window.location.href = 'home.html'
    }
    else {
        alert('Your Phone number or pin Number is Incorrect');
    }

})