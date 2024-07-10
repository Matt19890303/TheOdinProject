
// https://www.youtube.com/watch?v=QS6Y0ezhyCs

let history = document.getElementById("history");
let screen = document.getElementById("screen");
let buttons = Array.from(document.getElementsByClassName("Button"));

// this shows the element that triggered the event and shows that the click is working
// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         console.log('clicked');
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.innerText);
//     })
// });

// this takes the above example and displays what element was clicked on the screen
// Adding the break here stops it from displaying it on the screen
// eval() takes a string as a parameter and executes it as JavaScript code/equation
buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case 'AC':
                    screen.innerText = "";
                    break;
                case '🔙':
                    screen.innerText = screen.innerText.slice(0, -1);
                    break;
                case '=':
                    try {
                        screen.innerText = eval(screen.innerText);
                    } catch {
                        screen.innerText = "Error"
                    }
                    break;
                default:
                    screen.innerText += e.target.innerText;
            }
        })
    });
