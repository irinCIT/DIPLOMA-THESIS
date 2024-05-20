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


document.getElementById('signupBtn').addEventListener('click', async function(event){
    event.preventDefault(); // prevent form from submitting and refreshing the page
    let name, lname, age, number, email, pass, gender;

    name = document.getElementById("first-name").value;
    lname = document.getElementById("last-name").value;
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;
    number = document.getElementById("phoneNumber").value;
    email = document.getElementById("signup-email").value;
    pass = document.getElementById("signup-password").value;

    var hashedPassword = CryptoJS.AES.encrypt(pass, 'diploma').toString();

    const data = {name, lname, age, gender, number, email, pass, hashedPassword};

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    const response = await fetch("/api", options);
    const json = await response.json();
    console.log(json);
});







// $(document).ready(function() {
//     $('#loginBtn').click(function() {
//         var email = $('#Lemail').val();
//         var password = $('#Lpassword').val();

//         // Hash the password using SHA-256
//         var hashedPassword = CryptoJS.AES.encrypt(password, 'diploma').toString();

//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Hashed Password:', hashedPassword);

//         $.ajax({
//             type: 'POST',
//             url: '../php/login.php',
//             data: {
//                 email: email, 
//                 hashedPassword: hashedPassword
//             },
//             success: function(response){
//                 console.log(response);
//             },
//             error: function(){
//                 console.log('Error occurred during AJAX request');
//             }
//         });
//     });
// });

