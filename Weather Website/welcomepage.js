document.getElementById('loginButton').addEventListener('click', function () {
    document.getElementById('loginFormContainer').style.display = 'block';
});

function authenticate() {
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    // Replace these with your actual username and password for verification
    var validUsername = "Admin1";
    var validPassword = "pass123";

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        alert("Login successful!");
        // Redirect to a welcome page or dashboard upon successful login
        window.location.href = "profilepage.html"; // You might want to change the URL
    } else {
        alert("Invalid username or password. Please try again.");
    }

}


// Add this code to handle the sign-up pop-up
const signupButton = document.getElementById('signupButton');
const signupFormContainer = document.getElementById('signupFormContainer');
const registrationMessage = document.getElementById('registrationMessage');
const popupMessage = document.getElementById('popupMessage');
const popupContent = document.getElementById('popupContent');

// Show the sign-up form on button click
signupButton.addEventListener('click', function () {
    signupFormContainer.style.display = 'block';
});

// Function to handle sign-up submission
function submitSignUp() {
    const username = document.getElementById('signupUsername').value;
    const address = document.getElementById('address').value;
    const birthdate = document.getElementById('birthdate').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;

    // You can perform actions with this data (e.g., validation, sending to a server, etc.)
    // For example:
    console.log('Username:', username);
    console.log('Address:', address);
    console.log('Birthdate:', birthdate);
    console.log('Contact Info:', contactInfo);
    console.log('Email:', email);
    console.log('Position:', position);

    registrationMessage.innerHTML = "Registration Complete <i class='fas fa-check'></i>";
    signupFormContainer.style.display = 'none';

    // Show pop-up message
    popupContent.innerHTML = "Registration is complete!";
    popupMessage.style.display = 'block';

    // Close the sign-up form after submission
    signupFormContainer.style.display = 'none';
}

signupButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior (if it's an anchor tag)
    signupFormContainer.style.display = 'block';
});
