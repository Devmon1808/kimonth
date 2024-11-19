// Get the button and the message elements
const button = document.getElementById("toggle-button");
const body = document.body;
const message = document.getElementById("message");
const lightImage = document.getElementById("light-image"); // Get the image element

// Event listener for the button click
button.addEventListener("click", function() {
  // Toggle the class to change the background and show the message
  body.classList.toggle("light-on");
  
  // Change button text based on the current state
  if (body.classList.contains("light-on")) {
    button.textContent = "Turn Off Lights"; // Button text when lights are on
  } else {
    button.textContent = "Turn On Lights"; // Button text when lights are off
  }

  // Toggle the visibility of the image and message
  if (body.classList.contains("light-on")) {
    lightImage.classList.remove("hidden"); // Show the image
  } else {
    lightImage.classList.add("hidden"); // Hide the image
  }
});
