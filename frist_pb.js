var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

const helloWorld = createHelloWorld();
console.log(helloWorld());