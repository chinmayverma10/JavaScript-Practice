//class is a program or code-templete used to create a object

//used to create object of same type

class car {
    constructor(color,number){
        this.color = color,
        this.number = number
    }
    pcolor(){
        console.log(this.color)
    }
    seat(){
        console.log(number)
    }
}

let alto = new car("blue",4);
alto.pcolor()

//constructor is used to initialize a object 
// if constructor is not created => js will create it automatically