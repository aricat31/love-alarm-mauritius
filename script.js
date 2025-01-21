document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Example: Simple authentication logic
    if (username && password) {
        alert("Welcome, " + username + "!");
        document.getElementById("love-meter").style.width = "70%";  // Simulate Love Meter increase
    } else {
        alert("Please enter valid credentials.");
    }
});
