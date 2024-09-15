const newTaskInput = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

// Add a new task
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return; // Prevent empty tasks

  // Create a new task
  const listItem = document.createElement('li');
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.value = taskText;
  taskInput.disabled = true;

  // jhedit and delete buttons
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  // Append the task and buttons to the list item
  listItem.appendChild(taskInput);
  listItem.appendChild(buttonsDiv);
  todoList.appendChild(listItem);

  // Clear the input field
  newTaskInput.value = '';

  // Event listener to edit the task
  editBtn.addEventListener('click', () => {
    if (editBtn.textContent === 'Edit') {
      taskInput.disabled = false;
      taskInput.focus();
      editBtn.textContent = 'Save';
    } else {
      taskInput.disabled = true;
      editBtn.textContent = 'Edit';
    }
  });

  //Delete  task
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });
}

// Event listener for the Add Task button
addTaskBtn.addEventListener('click', addTask);

newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

