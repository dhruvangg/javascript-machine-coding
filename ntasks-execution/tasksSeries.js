const tasks = [
    async () => {
        console.log('Task 1 Started');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Task 1 Completed');
    },
    async () => {
        console.log('Task 2 Started');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Task 2 Completed');
    },
    async () => {
        console.log('Task 3 Started');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Task 3 Completed');
    }
]

async function tasksSeries(tasks) {
    for (const task of tasks) {
        await task();
    }
}

tasksSeries(tasks)
    .then(() => console.log('All Tasks Completed'))
    .catch(err => console.error(err));