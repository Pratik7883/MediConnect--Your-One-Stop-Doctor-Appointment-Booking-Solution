function openTab(event, tabName) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-link");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");

    // Show profile form only when Profile tab is clicked
    if (tabName === "profile") {
        document.getElementById("profile-container").style.display = "block";
    } else {
        document.getElementById("profile-form").style.display = "none";
    }
}
