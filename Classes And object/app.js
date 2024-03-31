const student = {
    name: "Chinmay",
    marks: 7,
    display: function() {
        console.log(this.marks)
    }
}

console.log(student)



const employe = {
    tax() {
        console.log("tax is 10%")
    }
}

//if proto and object have same function => object's function will be executed


const karan = {
    salary: 10
}

karan.__proto__ = employe

console.log(karan.tax())