class Human {
    public name: string;
    // private age: number;
    public age: number;
    public gender: string;

    constructor(name:string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const jennie = new Human("jennie", 25, "female");

const sayHi = (person:Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(jennie));

export {};