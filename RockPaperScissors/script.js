
// https://www.youtube.com/watch?v=jaVNP3nIAv0&t=566s

let userScore = 0;
let computerScore = 0;
const myArray = ["ROCK", "PAPER", "SCISSORS"];
let highScore = 5;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result1_div = document.querySelector(".result1");
const result2_div = document.querySelector(".result2");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


// https://www.youtube.com/watch?v=vU2akkcSV-g
function checkScore() {
  if (userScore === 5 || computerScore === 5) {
    rock_div.disabled = true;
    paper_div.disabled = true;
    scissors_div.disabled = true;
  }
}


// https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D
// to randomise the array created above
function computerChoice() {
  return myArray[Math.floor(Math.random()*myArray.length)];
  }

// Updates the score on the screen
function win() {
  userScore++;
  userScore_span.innerHTML=userScore;
  checkScore();
}

// Updates the score on the screen
function lose() {
  computerScore++;
  computerScore_span.innerHTML=computerScore;
  checkScore();
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// Create a function for each section
function game(userChoice) {
  const compChoice = computerChoice();
  switch (userChoice + compChoice) {
    case "PAPERROCK":
    case "ROCKSCISSORS":
    case "SCISSORSPAPER":
      win();
      result1_div.innerHTML=userChoice + " beats " + compChoice;
      result2_div.innerHTML="User wins!";
      break;
    case "ROCKPAPER":
    case "SCISSORSROCK":
    case "PAPERSCISSORS":
      lose();
      result1_div.innerHTML=compChoice + " beats " + userChoice;
      result2_div.innerHTML="Computer wins!";
      break;
    case "ROCKROCK":
    case "SCISSORSSCISSORS":
    case "PAPERPAPER":
      result1_div.innerHTML="You both picked " + userChoice;
      result2_div.innerHTML="Its a draw!";
      break;
  }
}


// when clicked call the function within the varable created above based on the id in the html
function main() {
  rock_div.addEventListener("click", function() {
    game("ROCK");
  })

  paper_div.addEventListener("click", function() {
    game("PAPER");
  })

  scissors_div.addEventListener("click", function() {
    game("SCISSORS");
  })
}

main();
