console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => console.log('Microtask 1 inside Timeout 1'));
  setTimeout(() => console.log('Timeout 2 inside Timeout 1'), 0);
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => console.log('Timeout 3 inside Promise 1'), 0);
});

setTimeout(() => console.log('Timeout 4'), 0);

console.log('End');


// Expected Output Order:
// Start 
// End 
// Promise 1 
// Timeout 3 inside Promise 1
// Timeout 1 
// Microtask 1 inside Timeout 1
// Timeout 4 
// Timeout 2 inside Timeout 1

// Correct order:
// Start
// End
// Promise 1
// Timeout 1
// Microtask 1 inside Timeout 1
// Timeout 4
// Timeout 3 inside Promise 1
// Timeout 2 inside Timeout 1