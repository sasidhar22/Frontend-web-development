//Checks if all input fields are valid, and alerts if any field is invalid
function validator(event) {
    const first_name = validateFirstName();
    const last_name = validateLastName();
    const email_address = validateEmail();
    const password = validatePassword();

    if (
        (first_name == true) &&
        (last_name == true) &&
        (email_address == true) &&
        (password == true)
    ) {
        return true;
    }
    return false;
}

// function to validate the first name of the user
function validateFirstName() {
    var error = document.getElementById("first_name_err");
    var firstName = document.getElementById("firstName").value;
    if (firstName.length == 0) {
        error.innerHTML = "*First Name is required";
        return false;
    } else if (
        !firstName.match(/^[A-Z][a-z]{1,}$/)
    ) {
        error.innerHTML = "*First Name invalid";
        return false;
    }
    error.innerHTML = '<i class="valid-input">valid</i>';
    return true;
}

// function to validate the last name of the user
function validateLastName() {
    var error = document.getElementById("last_name_err");
    var lastName = document.getElementById("lastName").value;
    if (lastName.length ==0) {
        error.innerHTML = "*Last Name is required";
        return false;
    } else if (
        !lastName.match(/^[A-Z][a-z]{1,}$/)
    ) {
        error.innerHTML = "*Last Name invalid";
        return false;
    }
    error.innerHTML = '<i class="valid-input">valid</i>';
    return true;
}

// function to validate the email of the user
function validateEmail() {
    var emailError = document.getElementById("email_err");
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.innerHTML = "*Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = "*Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="valid-input">valid</i>';
    return true;
}

// function to validate the password of the user
function validatePassword() {
    var error = document.getElementById("password_err");
    var paswd = document.getElementById("password").value;
    if (paswd.length == 0) {
        error.innerHTML = "*Password is required";
        return false;
    } 
    else if (
        !paswd.match(/^[A-Za-z\._\-[0-9]{8,}$/)
    ) {
        error.innerHTML = "*Password Invalid";
        return false;
    }
    error.innerHTML = '<i class="valid-input">valid</i>';
    return true;
}


