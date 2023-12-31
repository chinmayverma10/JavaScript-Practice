//CHAPTER --> 1

console.log("Hello World");
fullName = "Chinmay";
console.log(fullName);
let name = "Chinmay";
// var age = 18;
const year = 50;
console.log(typeof year)

const student = {
    fullName : 'Chinmay',
    age : 20,
    cgps : 7.7
};
console.log(student);


//Practice question on objects
const socialMedia = {
    username : 'chinmayverma',
    isFollow : true,
    followers : 350,
    following : 100
};
console.log(socialMedia);


//CHAPTER --> 2

//This is single line comment
/*Thus is multi line comment*/

//Conditional-Statements
let color;
let mode = 'dark-mode';
if(mode === "dark-mode"){
    color = "black";
}
console.log(color)

let age = 15;
age >= 18 ? console.log('adult') : console.log('young');



//Practice ques
// let num = prompt("Enter a number");
// num%5 === 0 ? console.log("yes") : console.log("no");


let marks = prompt("Enter marks");

if(marks>=90 && marks<=100){
    console.log("A");
}else if(marks>=80 && marks<=89){
    console.log("B");
}else if(marks>=70 && marks<=79){
    console.log("C");
}else if(marks>=60 && marks<=69){
    console.log("D");
}else {
    console.log("F");
}
