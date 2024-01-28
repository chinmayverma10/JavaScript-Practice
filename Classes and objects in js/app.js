const arr = ["apple","mango","Strawberry"];
console.log(arr);
arr.push("banana");// Inbuilt function inside prototype object
console.log(arr);


const employee =  {
    calcTax() {
        console.log(`Tax is 10%`);
    }
}
const chinmay = {
    salary: '1,00,000'
}
chinmay.__proto__ = employee;
console.log(chinmay.calcTax())



class Car {
    name;
    start(){
        console.log("Start")
    }
    stop(){
        console.log("Stop")
    }
    givename(){
        console.log(this.name)
    }
}

let alto = new Car;
alto.name = "AltoLXI";
// console.log(alto.name);
alto.givename()


class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("You are viewing data");
    }
}

class Admin extends User {
    constructor(name,email){
        super(name.email);
    }
    editData(data){
        console.log(`New Data ${data}`);
    }
}

let aman = new User("Aman","aman@cgc");
console.log(aman.email)
aman.viewData();