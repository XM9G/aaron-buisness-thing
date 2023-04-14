// Get the element that you want to change the text color of
const rainbowText = document.getElementById('rainbow-text');

// Define an array of colors in the order you want to cycle through them
const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];

// Set an initial color index and a delay between color changes (in milliseconds)
let colorIndex = 0;
const delay = 100;

// Define a function to change the text color
function changeColor() {
  // Set the text color to the current color in the array
  rainbowText.style.color = colors[colorIndex];
  // Increment the color index for the next cycle
  colorIndex = (colorIndex + 1) % colors.length;
  // Call this function again after a delay
  setTimeout(changeColor, delay);
}

// Call the function to start the color cycling
changeColor();
