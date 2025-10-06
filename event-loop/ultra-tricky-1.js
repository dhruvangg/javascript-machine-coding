console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

async function asyncFunc() {
  console.log('Async Start');
  await Promise.resolve();
  console.log('Async End');
}

asyncFunc();

Promise.resolve().then(() => console.log('Promise 1'));

console.log('End');

// Start
// Async Start 
// End 
// Async End 
// Promise 1 
// Timeout 1