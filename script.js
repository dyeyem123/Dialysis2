document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function (event) {
        // Prevent form submission to handle validation manually
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Set your predefined username and password here
        const correctUsername = "admin";
        const correctPassword = "password123";

        // Check if the username and password match the predefined values
        if (username === correctUsername && password === correctPassword) {
            // If username and password are correct, redirect to the next page
            window.location.href = "DialysisCenter.html"; // Redirect to the next page after login
        } else {
            // If incorrect, show an alert
            alert('Incorrect username or password. Please try again.');
        }
    });
});