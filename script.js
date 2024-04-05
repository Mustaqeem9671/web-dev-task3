// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button onclick="completeTask(this)">Complete</button>
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
  // Function to mark a task as completed
  function completeTask(button) {
    const taskItem = button.parentNode.parentNode;
    taskItem.classList.toggle('completed');
  }
  
  // Function to edit a task
  function editTask(button) {
    const taskItem = button.parentNode.parentNode;
    const taskText = taskItem.querySelector('span').innerText;
    const newText = prompt('Edit Task', taskText);
    if (newText !== null && newText.trim() !== '') {
      taskItem.querySelector('span').innerText = newText;
    }
  }
  
  // Function to delete a task
  function deleteTask(button) {
    const taskItem = button.parentNode.parentNode;
    taskItem.remove();
  }
  