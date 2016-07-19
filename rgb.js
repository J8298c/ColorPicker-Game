var numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var square = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < square.length; i++) {
        //click listener for squares
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.background
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play again";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    //change color of square
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = "block";
            square[i].style.background = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}
resetButton.addEventListener("click", function () {
    reset();
})

function changeColors(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}