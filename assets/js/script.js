document.addEventListener("DOMContentLoaded", function () {
    const appointmentBtn = document.querySelector(".appointment-btn");
    const userIcon = document.getElementById("user-icon");
    const isLoggedIn = false; // Change to `true` if user is logged in

    // Toggle user icon visibility
    if (isLoggedIn) {
        userIcon.classList.remove("hidden");
    } else {
        userIcon.classList.add("hidden");
    }

    // Appointment button action
    appointmentBtn.addEventListener("click", function () {
        alert("Appointment booking feature coming soon!");
    });

    // Toggle mobile menu
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});
