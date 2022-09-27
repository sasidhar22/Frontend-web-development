// Checks if the all the groups are valid
function validator(e) {
    const subject = document.getElementById('subject');
    const isSubjectEmpty = subject.value == '';

    const email = validateEmail('toEmail', 'toEmail-error');
    const toEmail = document.getElementById('toEmail');

    const textMessage = document.getElementById('text-message');
    const isMessageEntered = textMessage.value != '';

    if (!email || isSubjectEmpty || !isMessageEntered) {
        let message = '';
        if(!email){
            message += "*To Email is invalid /";
            toEmail.focus();
        }
        if (isSubjectEmpty) {
            message += "*Subject is empty / ";
            if(email){
                subject.focus();
            }
        }
        if (!isMessageEntered) {
            message += "*Message is empty";
            if(!isSubjectEmpty){
                textMessage.focus();
            }
        }
        alert(message);
        e.preventDefault();
        return false;
    }
}

//Checking if the senderss email is valid
function validateFromEmail() {
    var fromEmailError = document.getElementById("fromEmail-error");
    var email = document.getElementById("fromEmail").value;
    if (email.length == 0) {
        fromEmailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        fromEmailError.innerHTML = "Email Invalid";
        return false;
    }
    fromEmailError.innerHTML = '<i class="valid-input">valid</i>';
    return true;
}

//Checking if the receiver's email is valid
function validateEmail(id, err) {
    var toEmailError = document.getElementById(err);
    var value = document.getElementById(id).value.trim();
    let emails = value.split(';');
    for(var idx=0;idx<emails.length;idx++){
        emails[idx] = emails[idx].trim();
    }
    if (!emails[emails.length - 1].match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        toEmailError.innerHTML = "Email Invalid";
        return false;
    }
    toEmailError.innerHTML = '<i class="valid-input">valid</i>';
    return true;
}

// Separate emails by semicolon, on hitting space or tab
function emailsSeparator(event) {
    console.log(event);
    if (event.key == ' ' || event.key == 'Tab') {
        var target = event.target;
        var id = target.id;
        if (id == "toEmail") {
            if (validateEmail(id, "toEmail-error")) {
                event.target.value = target.value.trim() + ';';
            }
        } else if (id == "box-cc") {
            if (validateEmail(id, "ccEmail-error")) {
                target.value = target.value + ';';
            }
        } else if (id == "box-bcc") {
            if (validateEmail(id, "bccEmail-error")) {
                target.value = target.value + ';';
            }
        }
    }
}

// Function to show/hide CC, BCC
function showHideDiv() {
    if (document.getElementById('div-cc-bcc').style.display == "block") {
        document.getElementById('div-cc-bcc').style.display = "none";
        document.getElementById('cc-bcc').value = "Cc/Bcc";
    } else {
        showCcBcc();
        document.getElementById('cc-bcc').value = "Hide Cc/Bcc";
    }
}
function showCcBcc() {
    document.getElementById("div-cc-bcc").style.display = "block";
}


//Convert text to bold on clicking B, and italic on clicking I
let convertToBold = document.getElementById("to-bold");
let convertToItalic = document.getElementById("to-italic");
let text = document.getElementById("text-message");
convertToBold.addEventListener('click', e => {
    text.classList.toggle('bold');
})
convertToItalic.addEventListener('click', e => {
    text.classList.toggle('italic');
})


// Function to select files, and show selected files
function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
        //to get files that are selected
        let files = Array.from(input.files);
        var selected = document.getElementById("selected");
        var idx;
        // selected.innerHTML="files selected: "
        for(idx=0; idx<files.length;idx++){
            selected.innerHTML+=files[idx].name + ' '
        }
    };
    input.click();
}


// To change focus color of From, To, Cc, Bcc, and Subject divs
const focusFrom = document.getElementById("div-from");
focusFrom.addEventListener("focusin", (e) => {
    var idToColour = document.getElementById('label-from');
    idToColour.style.color = "#0096FF";
    focusFrom.style.borderBottom = "1px solid #0096FF";
});
focusFrom.addEventListener("focusout", (e) => {
    var idToColour = document.getElementById('label-from');
    idToColour.style.color = "";
    focusFrom.style.borderBottom = "";
});

const focusTo = document.getElementById("div-to");
focusTo.addEventListener("focusin", (e) => {
    var idToColour = document.getElementById('label-to');
    idToColour.style.color = "#0096FF";
    focusTo.style.borderBottom = "1px solid #0096FF";
});
focusTo.addEventListener("focusout", (e) => {
    var idToColour = document.getElementById('label-to');
    idToColour.style.color = "";
    focusTo.style.borderBottom = "";
});

const focusCc = document.getElementById("div-cc");
focusCc.addEventListener("focusin", (e) => {
    var idToColour = document.getElementById('label-cc');
    idToColour.style.color = "#0096FF";
    focusCc.style.borderBottom = "1px solid #0096FF";
});
focusCc.addEventListener("focusout", (e) => {
    var idToColour = document.getElementById('label-cc');
    idToColour.style.color = "";
    focusCc.style.borderBottom = "";
});

const focusBcc = document.getElementById("div-bcc");
focusBcc.addEventListener("focusin", (e) => {
    var idToColour = document.getElementById('label-bcc');
    idToColour.style.color = "#0096FF";
    focusBcc.style.borderBottom = "1px solid #0096FF";
});
focusBcc.addEventListener("focusout", (e) => {
    var idToColour = document.getElementById('label-bcc');
    idToColour.style.color = "";
    focusBcc.style.borderBottom = "";
});

const focusSubject = document.getElementById("div-subject");
focusSubject.addEventListener("focusin", (e) => {
    focusSubject.style.borderBottom = "1px solid #0096FF";
});
focusSubject.addEventListener("focusout", (e) => {
    focusSubject.style.borderBottom = "";
});



