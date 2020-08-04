class Parent{
    constructor(){
        this.fatherName = "Schwarzenegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Tom');
console.log(baby);
console.log(baby.getFullName());