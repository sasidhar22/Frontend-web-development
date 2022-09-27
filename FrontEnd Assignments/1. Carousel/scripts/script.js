// Array that stores the images of avengers
var imageArray = [
    "assets/images/Avengers1.jpg",
    "assets/images/Avengers2.jpg",
    "assets/images/Avengers3.jpg",
    "assets/images/Avengers4.jpg",
    "assets/images/Avengers5.jpg",
];

var currImageNumber = 0;

//Manual image sliding
function nextImage(incrementValue) {
    displayImage(currImageNumber += incrementValue)
}


var interval = setInterval(showSlides, 3000);  // Change image every 1000 milli seconds

function displayImage(value) {
    clearInterval(interval);
    interval = setInterval(showSlides, 3000);
    // hide prev button on first image
    if (currImageNumber == 0 || value == 1) {
        document.querySelector('#prev').style.display = "none";
    } else {
        document.querySelector('#prev').style.display = "block";
    }
    // hide next button on last image
    if (value == imageArray.length) {
        document.querySelector('#next').style.display = "none";
    } else {
        document.querySelector('#next').style.display = "block";
    }

    if (value > imageArray.length) {
        currImageNumber = imageArray.length;
    }
    if (value < 1) {
        currImageNumber = 1;
    }
    // imageArray[currImageNumber - 1].style.display = "block";
    console.log(currImageNumber);
    document.getElementsByClassName("img-avengers")[0].src = imageArray[currImageNumber-1];
}


//Auto image sliding
let slideIndex = 0;
showSlides();

function showSlides() {
    //hide prev button on first image
    if ((slideIndex % imageArray.length)==0) {
        document.querySelector('#prev').style.display = "none";
    } else {
        document.querySelector('#prev').style.display = "block";
    }
    //hide next button on last image
    if ((slideIndex%imageArray.length)==imageArray.length-1) {
        document.querySelector('#next').style.display = "none";
    } else {
        document.querySelector('#next').style.display = "block";
    }
    
    slideIndex++;
    if (slideIndex > imageArray.length) { slideIndex = 1 }
    document.getElementsByClassName("img-avengers")[0].src = imageArray[slideIndex-1];
}