const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 Success!");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise2 Reject!");
    }, 3000);
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

Promise.myall = function (promises) {
    const promise = new Promise(function (resolve, reject) {
        let count = 0;
        const results = [];
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(res => {
                results[i] = res;
                count++;
                if (count === promises.length) {
                    resolve(results);
                }
            }).catch((err) => reject(err))
        });
    })
    return promise;
}

Promise.myall([promise1, promise2, promise3, promise4]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.error(error);
});
Promise.all([promise1, promise2, promise3, promise4]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.error(error);
});