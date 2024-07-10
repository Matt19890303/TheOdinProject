 
// 3 - a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.



const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// 1 - a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.style.color = 'red'; 
paragraph.textContent = "Hey I'm red!"

// 2 - an <h3> with blue text that says “I’m a blue h3!”
const header = document.createElement('h3');
header.classList.add('header');
header.style.color = 'blue'; 
header.textContent = "I’m a blue h3!";


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header);

