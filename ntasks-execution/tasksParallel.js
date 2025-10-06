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

async function tasksParallel(tasks) {
    try {
        const results = await Promise.all(tasks.map(task => task()));
        console.log(results);
    } catch (error) {
        console.error(error);
    }
}

tasksParallel(tasks).then(() => console.log('All Tasks Completed')).catch(err => console.error(err));