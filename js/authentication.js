document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('login-form').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
        setTimeout(function() {
            document.getElementById('signup-form').style.opacity = '1';
        }, 50);
    }, 2000);
});

document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('signup-form').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        setTimeout(function() {
            document.getElementById('login-form').style.opacity = '1';
        }, 50);
    }, 2000);
});

$(document).ready(function() {
    $('#loginBtn').click(function() {
        var email = $('#Lemail').val();
        var password = $('#Lpassword').val();

        // Hash the password using SHA-256
        var hashedPassword = CryptoJS.AES.encrypt(password, 'diploma').toString();

        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Hashed Password:', hashedPassword);

        $.ajax({
            type: 'POST',
            url: '../php/login.php',
            data: {
                email: email, 
                hashedPassword: hashedPassword
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log('Error occurred during AJAX request');
            }
        });
    });
});