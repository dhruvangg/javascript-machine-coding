console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

async function async1() {
  console.log('Async1 Start');
  await async2();
  console.log('Async1 End');
}

async function async2() {
  console.log('Async2 Start');
  await Promise.resolve();
  console.log('Async2 End');
}

async1();

Promise.resolve().then(() => console.log('Promise 1'));

setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');


// Start
// Async1 Start
// Async2 Start
// End
// Async2 End
// Async1 End
// Promise 1
// Timeout 1
// Timeout 2