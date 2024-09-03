document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        const editButton = listItem.querySelector('.edit-button');
        const deleteButton = listItem.querySelector('.delete-button');
        const taskSpan = listItem.querySelector('.task-text');

        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', taskSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskSpan.textContent = newTaskText.trim();
            }
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
    }

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        addTask(taskText);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
