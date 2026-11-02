const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    const success = validateFname() && validateLname() && validateEmail() && validateMessage();

    if (!success) {
        event.preventDefault();

    } else {
        alert("Form submitted!");
    }
});

// Validates first name using regex
function validateFname() {
    const fname = document.getElementById('firstName').value;
    const regex = /^[A-Za-z]+$/;
    const success = regex.test(fname);

    if(!success) {
        return false;
    }
    return true; 
}

// Validates last name using regex
function validateLname() {
    const lname = document.getElementById('lastName').value;
    const regex = /^[A-Za-z]+$/;
    const success = regex.test(lname);

    if(!success) {
        return false;
    }
    return true; 
}

// Validates email using regex
function validateEmail() {
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const success = regex.test(email);

    if(!success) {
        return false;
    }
    return true;
}

function validateMessage() {
    return true;
}
