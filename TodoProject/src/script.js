// Sidebar
const mylistsButton = document.querySelector('#mylists_button');
const sideBarList = document.querySelector('#sideBar_List');
// Assignee
const assigneeDropdown = document.querySelector('#assignee-dropdown');

// Tasks
const input_task = document.getElementById("title");

// Priority button
const dropdownButton = document.getElementById('dropdownDefaultButton');
const dropdownMenu = document.getElementById('dropdown');

// Due date button
const dueDateButton = document.getElementById('dueDateButton');
const dueDateInput = document.getElementById('dueDateInput');
const dueDateText = document.getElementById('dueDateText');
// Calendar
const taskForm = document.getElementById('taskForm');



// Creating a task
function addTask() {
    if (input_task.value === "") {
        alert("please enter a value here");
    } else {
        let task = document.createElement("li");
        task.innerHTML = input_task.value;

        let selectedPriority = '';
        // Create a span element to display the selected priority
        let prioritySpan = document.createElement("span");
        prioritySpan.textContent = selectedPriority ? `(${selectedPriority})` : '';
        prioritySpan.classList.add('priority-text');

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "\u00d7";
        deleteButton.addEventListener("click", deleteTask);

        // let editButton = document.createElement("button");
        // editButton.innerHTML = "edit";
        // editButton.addEventListener("click", editTask);
        
        // Article
        // https://gomakethings.com/how-to-add-multiple-to-an-element-with-vanilla-js/
        // Setup the styles object
        var styles = {
            backgroundImage: 'url("images/unchecked.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '25px',
            backgroundPosition: 'left center',
            paddingLeft: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between',
            border: '1px solid green',
        };

        var delete_styles = {
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ff0000',
            fontSize: '1.4rem',
            cursor: 'pointer',
            marginRight: '0.5rem',
            fontFamily: 'Font Awesome 5 Free', // Add this line (Specify the font family for Font Awesome)
            fontWeight: 900, // Use the solid style for Font Awesome icons
        };

        var edit_styles = {
            backgroundColor: 'transparent',
            border: 'none',
            color: '#00ff04',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginLeft: '0.5rem',
        };

        // Add the class
        Object.assign(task.style, styles);
        Object.assign(deleteButton.style, delete_styles);
        // Object.assign(editButton.style, edit_styles);
 
        task_list.appendChild(task);
        task.appendChild(deleteButton);
        task_list.appendChild(prioritySpan);
        // task.appendChild(editButton);

        // Clear the input field
        input_task.value = "";

      // Priority dropdown
        const priorityLinks = document.querySelectorAll('#dropdown a');
        priorityLinks.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            selectedPriority = this.textContent; // Store the text content of the link
          });
        });


        // Checked task
        // Add event listener to the new task item
        task.addEventListener('click', function(event) {
          const isChecked = this.style.textDecoration === 'line-through';
          const backgroundImage = isChecked ? 'url("images/unchecked.png")' : 'url("images/checked.png")';
          const textDecoration = isChecked ? 'none' : 'line-through';

          this.style.backgroundImage = backgroundImage;
          this.style.textDecoration = textDecoration;
      });
    }
}

// Deleting a task
function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskItem.remove();
}

// Due date
const datePicker = flatpickr(dueDateInput, {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "d-m-Y",
  position: "below",
  onChange: function(selectedDates, dateStr, instance) {
    dueDateText.textContent = dateStr;
  }
});

dueDateButton.addEventListener('click', () => {
  dueDateInput.classList.remove('hidden');
  datePicker.open();
});



// // Article where I found the code for the edit task functionality
// // https://dev.to/gabriellend/how-to-make-your-to-do-list-editable-with-javascript-5119
function editTask(event) {}
// {


// Priority
// dropdownButton.addEventListener('click', function() {
//   dropdownMenu.classList.toggle('hidden');
//     dueDateText.textContent = dateStr;
//   }
// })

dropdownButton.addEventListener('click', function() {
  console.log('Dropdown button clicked');
  dropdownMenu.classList.toggle('hidden');
});


