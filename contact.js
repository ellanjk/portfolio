const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    var success = validateFname() && validateLname() && validateEmail() && validateMessage();

    if (!success) {
        event.preventDefault();

    } else {
        alert(success);
        alert("Form submitted!");
    }
});

function validateFname() {
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
