const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

module.exports = {
    add,
    subtract,
    multiply,
    divide
};



// Modulce caching

class SuperHero {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name
    } 
    setName(name){
        this.name =name;
    }
}

module.exports = new SuperHero("superman")