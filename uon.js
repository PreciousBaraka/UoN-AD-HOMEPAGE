function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
    
    let username = document.getElementById("AD Account").value;
    let password = document.getElementById("AD Password").value;
    
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }
    
    // You can add authentication logic here
    alert("Login successful for: " + username);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", handleLogin);