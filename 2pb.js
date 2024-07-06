var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};
let counter= createCounter(10);
counter()
counter()
console.log(counter());