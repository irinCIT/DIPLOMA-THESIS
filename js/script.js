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
