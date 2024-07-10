
// Video to this project
// https://www.youtube.com/watch?v=dyhuaXeuyGo&list=LL&index=2&t=1082s

let click = true; 
let color = "black";

function fillShetchPad (size) {
    let board = document.querySelector(".board");
    // to remove all the divs created to repopulate the board
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    // this will let us create as many rows and columns as we want
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;

    let boardSize = size * size;
    for (let i = 0; i < boardSize; i++) {
        // creates a div/square
        let square = document.createElement('div');
        // change color of the square when hovering over
        square.addEventListener('mouseover', colorSquare);
        // makes each square 'white'
        square.style.backgroundColor = "white";
        // Appends that to 'board'
        board.insertAdjacentElement("beforeend", square);
    }
}

fillShetchPad(16);

// To populate the board with the input
function changeSize(input) {
  // To validate the input
  if (input >= 2 && input <= 100) {
      fillShetchPad(input);
  } else
      alert("Please pick a board size between 2 and 100 ")
  }
  

function changeColour(choice) {
  color = choice;
}

function colorSquare() {
  // if click is true
  if (click === true) {
      // if color is equal to the colourful option selected then make it colourful
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function reSet() {
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.style.backgroundColor = "white");
}


// Add a grey scale to the board when colouring over the same spot it gets darker and darker
// Add the click and drag to the board to click and colour 