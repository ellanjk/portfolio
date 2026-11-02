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

function validateLname() {
    return true; 
}

function validateEmail() {
    return true;
}

function validateMessage() {
    return true;
}
