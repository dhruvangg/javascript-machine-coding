console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => console.log('Microtask inside Timeout'));
}, 0);

Promise.resolve().then(() => console.log('Promise 1'));

console.log('End');

// Start
// End
// Promise 1
// Timeout 1
// Microtask inside Timeout