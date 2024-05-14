document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.getElementById("filterBtn");
    const filterOptions = document.getElementById("filterOptions");
    const eventCards = document.getElementById("eventCards");

    filterBtn.addEventListener("click", function() {
        if (filterOptions.style.display === "none") {
            filterOptions.style.transition = "all 1s ease";
            filterOptions.style.display = "block";
            eventCards.style.marginTop = "20px";
        } else {
            filterOptions.style.transition = "all 1s ease";
            filterOptions.style.display = "none";
            eventCards.style.marginTop = "0";
        }
    });
});

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

