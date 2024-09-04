const addTaskButton = `
  <button id="add-task-btn" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onclick="addTask()">
    Add Task
  </button>
`;

// const addTaskBtn = document.getElementById('add-task-btn');
const todoModal = document.getElementById('todo-modal');

function addTask(todoName, todoDate, todoPriority) {
  // Opens Modal for input
  todoModal.classList.remove('hidden');

  // Get the todo list element
  const todoList = document.getElementById("todo-list");

  // Ensure todoList exists before trying to append to it
  if (todoList) {
    // Create the list item element
    const li = document.createElement("li");
    li.className = "border-b border-gray-200 flex items-center justify-between py-4";
    li.innerHTML = `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2">
        <span>${todoName}</span>
      </label>
      <div>
        <span class="text-sm text-gray-500 mr-2">${todoDate}</span>
        <span class="text-sm font-bold ${getPriorityColor(todoPriority)} mr-2">${todoPriority}</span>
        <button class="text-red-500 hover:text-red-700 mr-2 delete-btn">Delete</button>
      </div>
    `;

    // Append the list item to the todo list
    todoList.appendChild(li);

    // Add event listener to the checkbox
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
      const taskText = this.nextElementSibling;
      if (this.checked) {
        taskText.classList.add('completed');
      } else {
        taskText.classList.remove('completed');
      }
    });
  } else {
    console.error("Element with id 'todo-list' not found");
  }
}

// Function to get the color based on the priority
function getPriorityColor(priority) {
  switch (priority.toLowerCase()) {
    case 'urgent':
      return 'text-red-600';
    case 'important':
      return 'text-yellow-600';
    case 'relaxed':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
}

// Event listener for form submission for the todo list
document.getElementById("todo-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const taskName = document.getElementById("todoName").value.trim();
  const todoDate = document.getElementById("todoDate").value;
  const todoPriority = document.getElementById("todoPriority").value;

  if (taskName !== "") {
    addTask(taskName, todoDate, todoPriority);
    
    // Clear the form fields
    document.getElementById("todoName").value = "";
    document.getElementById("todoDate").value = "";
    document.getElementById("todoPriority").value = "urgent";

    // Close the modal
    document.getElementById('todo-modal').classList.add('hidden');
  }
});

// Event listener for delete button click for the todo list
//  To close the modal when the user clicks on the close button
const closeTodotModal = document.querySelector('.todo-modal-close');
// Add the cursor-pointer class to the close button element
closeTodotModal.classList.add('cursor-pointer');
closeTodotModal.addEventListener('click', () => {
  todoModal.classList.add('hidden');
});

document.getElementById("todo-list")
.addEventListener("click",
  function (event) {
      if (event.target.classList.contains("delete-btn")) {
          event.target.parentElement.parentElement.remove();
      }
  });



// ##################################################################################
// Add a New/Editing a Project - using the Modal - display Project name on the right
// ##################################################################################

// Creating a new project
const projectForm = document.getElementById('project-form');
const projectCardsContainer = document.getElementById('project-cards-container');

// Add this at the top of your file
const projects = {};

// Function to handle Project creation
function createProjectCard(projectName) {
  const newProjectCard = document.createElement('div');
  newProjectCard.classList.add('project-card');
  
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'bg-gray-200', 'p-4');
  cardBody.innerHTML = `
    <button class="project-button w-full text-left font-bold mb-2" data-project-name="${projectName}">${projectName}</button>
  `;

  // Initialize an empty array for tasks when creating a new project
  projects[projectName] = [];

  // Edit Button
  const editButton = document.createElement('button');
  editButton.id = 'edit-btn';
  editButton.classList.add('edit-btn', 'bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded', 'mr-1', 'mt-2');
  editButton.textContent = 'Edit';
  // Added an event listener
  editButton.addEventListener('click', () => {
    const projectCard = editButton.closest('.project-card');
    projectCard.classList.add('editing');
    openEditModal(projectCard);
  });

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.id = 'delete-btn';
  deleteButton.classList.add('delete-btn', 'bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded', 'mr-1');
  deleteButton.textContent = 'Delete';

  // Add event listeners for delete button
  deleteButton.addEventListener('click', () => {
    newProjectCard.remove();
  });

  cardBody.appendChild(editButton);
  cardBody.appendChild(deleteButton);
  newProjectCard.appendChild(cardBody);

  // Add event listener for the project button
  const projectButton = cardBody.querySelector('.project-button');
  projectButton.addEventListener('click', () => {
    displayProjectContent(projectName);
  });

  // return both the newProjectCard and the editButton elements
  return { newProjectCard, editButton };
}

// Function to handle the click event on the "+" button and display the modal.
// Opens Modal for input
const addProjectButton = document.getElementById('addProjectButton');
const projectModal = document.getElementById('project-modal');

addProjectButton.addEventListener('click', () => {
  projectModal.classList.remove('hidden');
});

//  To close the modal when the user clicks on the close button
const closeProjectModal = document.querySelector('.project-modal-close');
// Add the cursor-pointer class to the close button element
closeProjectModal.classList.add('cursor-pointer');
closeProjectModal.addEventListener('click', () => {
  projectModal.classList.add('hidden');
});

// Open Modal for editing Project Name
function openEditModal(projectCard) {
  projectModal.classList.remove('hidden');

  const projectButton = projectCard.querySelector('.project-button');
  if (projectButton) {
    const projectName = projectButton.dataset.projectName;
    document.getElementById('project-name').value = projectName;
    document.getElementById('project-name').dataset.originalName = projectName;
  } else {
    console.error('Project button not found in the project card');
    document.getElementById('project-name').value = '';
  }
}

// Function to handle the click event on the "Save" button in the modal
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newProjectName = document.getElementById('project-name').value;
  const editingProject = document.querySelector('.project-card.editing');

  if (editingProject) {
    const projectButton = editingProject.querySelector('.project-button');
    if (projectButton) {
      const oldProjectName = projectButton.dataset.projectName;
      projectButton.textContent = newProjectName;
      projectButton.dataset.projectName = newProjectName;

      // Update the project button click event listener
      projectButton.removeEventListener('click', projectButton.clickHandler);
      projectButton.clickHandler = () => {
        displayProjectContent(newProjectName);
      };
      projectButton.addEventListener('click', projectButton.clickHandler);

       // Update the project name in the display-content section
      const displayContent = document.getElementById('display-content');
      const projectHeader = displayContent.querySelector('h2');
      if (projectHeader && projectHeader.textContent === oldProjectName) {
        projectHeader.textContent = newProjectName;
      }
      // Update the projects object with the new name
      if (projects[oldProjectName]) {
        projects[newProjectName] = projects[oldProjectName];
        delete projects[oldProjectName];
      }
    }
    editingProject.classList.remove('editing');
  } else {
    const { newProjectCard, editButton } = createProjectCard(newProjectName);
    projectCardsContainer.appendChild(newProjectCard);
  }

  projectForm.reset();
  projectModal.classList.add('hidden');
});

// Add this new function to display project content on right of Projects Sidebar
// Add Add task button 
function displayProjectContent(projectName) {
  const displayContent = document.getElementById('display-content');

  if (displayContent) {
    if (!projects[projectName]) {
      projects[projectName] = [];
    }
    displayContent.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">${projectName}</h2>
        ${addTaskButton}
      </div>
    `;

  } else {
    console.error("Element with id 'display-content' not found");
  }
}


