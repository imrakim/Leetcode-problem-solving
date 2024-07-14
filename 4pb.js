function expect(val) {
    return {
        toBe(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Example usage:
try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).toBe(4)); // Error: Not Equal
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).notToBe(4)); // true
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).notToBe(5)); // Error: Equal
} catch (e) {
    console.error(e.message);
}
