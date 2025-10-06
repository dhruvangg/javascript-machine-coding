class MyPromise {
    constructor(executor) {
        this.state = "pending"; // "pending", "fulfilled", or "rejected"
        this.value = undefined; // Result of fulfillment or reason for rejection
        this.callbacks = []; // To store `then` callbacks

        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.callbacks.forEach((callback) => callback.onFulfilled(value));
            }
        };

        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.value = reason;
                this.callbacks.forEach((callback) => callback.onRejected(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handleCallback = () => {
                try {
                    if (this.state === "fulfilled") {
                        const result = onFulfilled ? onFulfilled(this.value) : this.value;
                        resolve(result);
                    } else if (this.state === "rejected") {
                        if (onRejected) {
                            const result = onRejected(this.value);
                            resolve(result);
                        } else {
                            reject(this.value);
                        }
                    }
                } catch (error) {
                    reject(error);
                }
            };

            if (this.state === "pending") {
                this.callbacks.push({
                    onFulfilled: () => handleCallback(),
                    onRejected: () => handleCallback(),
                });
            } else {
                setTimeout(() => handleCallback(), 0); // Ensure async execution
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            let fulfilledCount = 0;
            const results = [];

            promises.forEach((promise, index) => {
                MyPromise.resolve(promise)
                    .then((value) => {
                        results[index] = value;
                        fulfilledCount++;
                        if (fulfilledCount === promises.length) {
                            resolve(results);
                        }
                    })
                    .catch(reject);
            });
        });
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise) => {
                MyPromise.resolve(promise).then(resolve).catch(reject);
            });
        });
    }
}


export default MyPromise