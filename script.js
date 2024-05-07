// Preview

// Variables to store HTML elements
let previewBtnEl = document.getElementById("preview");
let redInEl = document.getElementById("red");
let greenInEl = document.getElementById("green");
let blueInEl = document.getElementById("blue");
let rgbStringOutEl = document.getElementById("rgb");
let displayEl = document.getElementById("box");
let widthInEl = document.getElementById("width");
let heightInEl = document.getElementById("height");

// Event Listener
redInEl.addEventListener("input", preview);
greenInEl.addEventListener("input", preview);
blueInEl.addEventListener("input", preview);

function preview() {
  // Input
  let red = +redInEl.value;
  let green = +greenInEl.value;
  let blue = +blueInEl.value;

  // Validate Colours (Constrain colours between 0 - 255)
  // check red
  if (red < 0) {
    red = 0;
    redInEl.value = 0;
  } else if (red > 255) {
    red = 255;
    redInEl.value = 255;
  }
  // check green
  if (green < 0) {
    green = 0;
    greenInEl.value = 0;
  } else if (green > 255) {
    green = 255;
    greenInEl.value = 255;
  }

  // check blue
  if (blue < 0) {
    blue = 0;
    blueInEl.value = 0;
  } else if (blue > 255) {
    blue = 255;
    blueInEl.value = 255;
  }

  // Process
  var rgb = `rgb(${red}, ${green}, ${blue})`;

  // Output
  rgbStringOutEl.innerHTML = rgb;
  displayEl.style.background = rgb;
}

// Black Button
// Event Listener
document.getElementById("black").addEventListener("click", black);

function black() {
  // Process
  var black = `rgb(0, 0, 0)`;

  // Output
  document.getElementById("rgb").innerHTML = black;
  document.getElementById("box").style.background = "black";
  redInEl.value = 0;
  greenInEl.value = 0;
  blueInEl.value = 0;
}

// White Button
// Event Listener
document.getElementById("white").addEventListener("click", white);

function white() {
  // Process
  var white = `rgb(255, 255, 255)`;

  // Output
  document.getElementById("rgb").innerHTML = white;
  document.getElementById("box").style.background = "white";
  redInEl.value = 255;
  greenInEl.value = 255;
  blueInEl.value = 255;
}

// Dimensions
// Event Listener
widthInEl.addEventListener("input", changeSize);
heightInEl.addEventListener("input", changeSize);

function changeSize() {
  // Input
  let width = +widthInEl.value;
  let height = +heightInEl.value;

  // Validate
  // Width
  if (width < 50) {
    width = 50;
    widthInEl.value = 50;
  } else if (width > 400) {
    width = 400;
    widthInEl.value = 400;
  }

  // Height
  if (height < 50) {
    height = 50;
    heightInEl.value = 50;
  } else if (height > 200) {
    height = 200;
    heightInEl.value = 200;
  }

  // Output
  displayEl.style.width = `${width}px`;
  displayEl.style.height = `${height}px`;
}
