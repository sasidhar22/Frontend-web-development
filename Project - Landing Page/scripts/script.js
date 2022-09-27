function validate(event) {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPhoneValid = validatePhone();

    let flag = true;
    if (!isNameValid) {
        let error = document.getElementById("nameError");
        error.innerHTML = '*Invalid';
        flag = false;
    }
    if (!isEmailValid) {
        let error = document.getElementById("emailError");
        error.innerHTML = '*Invalid';
        flag = false;
    }
    if (!isPhoneValid) {
        let error = document.getElementById('phoneError');
        error.innerHTML = '*Invalid';
        flag = false;
    }
    if (flag == false) {
        event.preventDefault();
    } else {
        alert("Valid");
    }
    return flag;
}

function validateName() {
    let val = document.getElementById('name').value;
    if (val.length == 0) {
        return false;
    } else if (
        !val.match(/^[A-Z][a-z]{3,}$/)
    ) {
        return false;
    }
    return true;
}

function validateEmail() {
    let val = document.getElementById("email").value;
    if (val.length == 0) {
        return false;
    }
    if (!val.match(/.+@(gmail|yahoo)(.com|.co.in)$/)) {
        return false;
    }
    return true;
}

function validatePhone() {
    let val = document.getElementById('phone').value;
    if (val.match(/^\d{10}$/)) {
        return true;
    } else {
        return false;
    }
}


let card1 = document.querySelector('#card1');
let card2 = document.querySelector('#card2');
let card3 = document.querySelector('#card3');
let card4 = document.querySelector('#card4');

card1.addEventListener('mouseover', () => {
    card1.classList.toggle('shadow-lg');
});
card1.addEventListener('mouseout', () => {
    card1.classList.toggle('shadow-lg');
});

card2.addEventListener('mouseover', () => {
    card2.classList.toggle('shadow-lg');
});
card2.addEventListener('mouseout', () => {
    card2.classList.toggle('shadow-lg');
});

card3.addEventListener('mouseover', () => {
    card3.classList.toggle('shadow-lg');
});
card3.addEventListener('mouseout', () => {
    card3.classList.toggle('shadow-lg');
});

card4.addEventListener('mouseover', () => {
    card4.classList.toggle('shadow-lg');
});
card4.addEventListener('mouseout', () => {
    card4.classList.toggle('shadow-lg');
});

