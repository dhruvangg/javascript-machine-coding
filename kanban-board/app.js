class KanbanBoard {
    constructor(createTaskForm, createTaskInput, columns) {
        this.createTaskForm = document.querySelector(createTaskForm);
        this.createTaskInput = document.querySelector(createTaskInput);
        this.columns = document.querySelectorAll(columns);

        this.draggedTask = null;

        this.initialize();
    }

    initialize() {
        this.createTaskForm.addEventListener('submit', (event) => this.handleTaskCreate(event));

        this.columns.forEach((column) => {
            column.addEventListener('dragover', (event) => this.handleDragOver(event));
            column.addEventListener('drop', (event) => this.handleDrop(event));
        })
    }

    handleTaskCreate(event) {
        event.preventDefault();
        const task = this.createTaskInput.value.trim();
        if (task) {
            const taskElement = this.createTaskElement(task)
            this.columns[0].appendChild(taskElement);
            this.createTaskInput.value = '';
        }
    }

    createTaskElement(task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.textContent = task;
        taskElement.draggable = true;

        taskElement.addEventListener('dragstart', (event) => this.handleDragStart(event));
        taskElement.addEventListener('dragend', (event) => this.handleDragEnd(event));

        return taskElement;
    }

    handleDragStart(event) {
        this.draggedTask = event.target;
        event.dataTransfer.setData('text/plain', event.target.textContent);
    }

    handleDragEnd(event) {
        event.dataTransfer.clearData();
    }

    handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    handleDrop(event) {
        event.preventDefault();
        const taskContent = event.dataTransfer.getData('text/plain');
        if (taskContent && this.draggedTask) {
            const taskElement = this.createTaskElement(taskContent)
            event.target.appendChild(taskElement);
            this.draggedTask.remove()
        }
    }
}

export default KanbanBoard