class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
        return () => this.unsubscribe(eventName, listener); // Return a function to remove listener
    }

    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => listener(...args));
        }
    }

    unsubscribe(eventName, listener) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(l => l !== listener);
        }
    }
}

// Example Usage:
const eventEmitter = new EventEmitter();
const logData = data => console.log("Data received:", data);

const unsubscribe = eventEmitter.subscribe("data", logData);
eventEmitter.emit("data", { id: 1, message: "Hello, World!" });

setTimeout(() => {
    eventEmitter.emit("data", { id: 1, message: "Triggered After 3 seconds" });
    unsubscribe(); // Unsubscribe the listener
}, 3000);

