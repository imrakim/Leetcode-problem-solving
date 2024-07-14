function createCounter(init) {
    let currentValue = init;

    return {
        increment() {
            currentValue += 1;
            return currentValue;
        },
        decrement() {
            currentValue -= 1;
            return currentValue;
        },
        reset() {
            currentValue = init;
            return currentValue;
        }
    };
}

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
