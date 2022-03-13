// add event handler in button
document.getElementById('login-btn').addEventListener('click', function () {
    // Get input value of user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // Get input value of user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // Check email or password
    if (userEmail == 'abc@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
    /*  if (userEmail !== 'abc@gmail.com') {
         document.getElementById('emailError').classList.remove('hidden')
     }
     if (userPassword !== 'secret') {
         document.getElementById('passError').classList.remove('hidden')
     } */
    if (userEmail !== 'abc@gmail.com' || userPassword !== 'secret') {
        document.getElementById('Error').classList.remove('hidden')
    }
})