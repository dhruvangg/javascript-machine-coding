const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 Success!");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise2 Reject!");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3 Success!");
    }, 4000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise4 Reject!");
    }, 5000);
});

Promise.myrace = function (promises) {
    return new Promise(function (resolve, reject) {
        promises.forEach(promise => Promise.resolve(promise).then(resolve, reject));
    })
}

Promise.myrace([promise1, promise2, promise3, promise4]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.error(error);
});
Promise.race([promise1, promise2, promise3, promise4]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.error(error);
});