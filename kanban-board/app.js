const taskInput = document.querySelector("#taskInput");

document.querySelector(".task-form").addEventListener('submit', (event) => {
    event.preventDefault()

    const task = taskInput.value.trim();

    if (task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.textContent = task;
        taskElement.draggable = true;
        document.querySelector('#backlog').appendChild(taskElement);
        taskInput.value = '';

        taskElement.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', task);
        });

        taskElement.addEventListener('dragend', (event) => {
            event.dataTransfer.clearData();
            document.querySelector('#backlog').removeChild(taskElement);
        });
    }
});

document.querySelectorAll(".task-list").forEach(list => {
    list.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    list.addEventListener('drop', (event) => {
        event.preventDefault();
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        
        taskElement.textContent = event.dataTransfer.getData('text/plain');
        taskElement.draggable = true;
        list.appendChild(taskElement);


        taskElement.addEventListener('dragstart', (event) => {            
            event.dataTransfer.setData('text/plain', event.target.textContent);
        });

        taskElement.addEventListener('dragend', (event) => {
            event.dataTransfer.clearData();
            list.removeChild(taskElement);
        });
    });

    list.addEventListener('allowDrop', (event) => {
        event.preventDefault();
    });
});