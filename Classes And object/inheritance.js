//inheritance is passing down of properties and methods from a parent class to child class
// we use "extend" keyword to implement inheritance

//if child and parent class have same function (method overriding) => child's method will be executed

class parent{
    constructor(name){
        this.name = name;
        console.log("i am human")
    }
}
class child extends parent {
    constructor(name,cname){
        super(name);
        this.cname = cname;
    }
    display(){
        console.log(this.cname)
    }
}
let obj = new child("lokesh","chinmay");
obj.display()

//super keyword => used to call parent class's constructor ,properties and methods