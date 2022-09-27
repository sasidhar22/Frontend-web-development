// Array to store the images of pets
var images = [
    "assets/images/dog.jpg",
    "assets/images/cat.jpg",
    "assets/images/parrot.jpg"
];


// Event listener to hide clicked button and show the target image of the clicked button
document.getElementById("btn-group").addEventListener("click", e => {
    if (e.target.nodeName == "BUTTON") {
        document.querySelectorAll(".btn").forEach(button => button.disabled = false);
        e.target.disabled = true;
        document.querySelectorAll(".btn").forEach((button, imageIndex) => {
            if (button.disabled == true) {
                document.getElementById("image").src = images[imageIndex];
            }
        });
    }
});

