const form = document.getElementById('form');
const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const email = document.getElementById('email');
const textMessage = document.getElementById('message');
const msg = document.querySelectorAll('.msg');
const resetButton = document.getElementById('reset');

// If all validation functions are successful, the form is submitted. 
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const success = validateFname() && validateLname() && validateEmail() && validateTextMessage();

    if (success) {
        msg[4].innerHTML = "Thank you " + fname.value + "! Your message has been submitted."
        setTimeout(clearForm, 3000);
    }
});

resetButton.addEventListener('click', clearForm);
fname.addEventListener('input', validateFname);
lname.addEventListener('input', validateLname);
email.addEventListener('input', validateEmail);
textMessage.addEventListener('input', validateTextMessage);

// Clears all fields, border styles, and messages
function clearForm() {
    fname.style.border = "";
    fname.value = "";
    lname.style.border = "";
    lname.value = "";
    email.style.border = "";
    email.value = "";
    textMessage.style.border = "";
    textMessage.value = "";

    msg.forEach(function(m) {
        m.innerHTML = "";
        m.style.color = "";
    });
}

// Function to show error message
function showError(object, msgNr, message) {
    msg[msgNr].innerHTML = message;
    msg[msgNr].style.color = "red";
    object.style.border = "3px solid red"
}

// Function to show success message
function showSuccess(object, msgNr, message) {
    msg[msgNr].innerHTML = message;
    msg[msgNr].style.color = "green";
    object.style.border = "3px solid green"
}

// Validates first name using regex
function validateFname() {
    const regex = /^[A-Za-z]+$/;
    const success = regex.test(fname.value);

    if(!success) {
        showError(fname, 0, "Please enter valid first name.");
        return false;
    }
    showSuccess(fname, 0, "");
    return true; 
}

// Validates last name using regex
function validateLname() {
    const regex = /^[A-Za-z]+$/;
    const success = regex.test(lname.value);

    if(!success) {
        showError(lname, 1, "Please enter valid last name.");
        return false;
    }
    showSuccess(lname, 1, "");
    return true; 
}

// Validates email using regex
function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const success = regex.test(email.value);

    if(!success) {
        showError(email, 2, "Please enter valid email address.")
        return false;
    }
    showSuccess(email, 2, "");
    return true;
}

// Validates length of message
function validateTextMessage() {
    const len = textMessage.value.length;

    if(len < 20) {
        showError(textMessage, 3, len + "/20 characters");
        return false;
    }
    showSuccess(textMessage, 3, len + "/20 characters");
    return true;
}
