function expect(val) {
    return {
        toBe(expected) {
            if (val === expected) {
                console.log('Success');
            } else {
                console.error(`Error: expected ${val} to be ${expected}`);
            }
        },
        toEqual(expected) {
            const isEqual = (a, b) => {
                if (a === b) return true;

                if (typeof a !== typeof b) return false;

                if (typeof a === 'object' && a !== null && b !== null) {
                    if (Object.keys(a).length !== Object.keys(b).length) return false;

                    for (let key in a) {
                        if (!isEqual(a[key], b[key])) return false;
                    }
                    return true;
                }
                return false;
            };

            if (isEqual(val, expected)) {
                console.log('Success');
            } else {
                console.error(`Error: expected ${JSON.stringify(val)} to equal ${JSON.stringify(expected)}`);
            }
        }
    };
}

// Example usage:
expect(5).toBe(5); // Success
expect(5).toBe(4); // Error: expected 5 to be 4
expect({ a: 1 }).toEqual({ a: 1 }); // Success
expect({ a: 1 }).toEqual({ a: 2 }); // Error: expected {"a":1} to equal {"a":2}
