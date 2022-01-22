"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const jennie = new Human("jennie", 25, "female");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(jennie));
//# sourceMappingURL=tutorial.js.map