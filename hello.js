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



//CHAPTER --> 3

for(let i=0;i<5;i++){
    console.log("Jai shree ram");
}
let i = 0;
while(i<5){
    console.log("Jai shree ram");
    i++;
}
do{
    console.log("jai Shree ram");
    i++;
}while(i==5);
let r = "Ram";
for(let i of r){
    console.log(i);
}

const student1 = {
    name : "Chinmay",
    pass : true
};
for(let i in student1){
    console.log(i);
    console.log(student1[i]);
}

let str = "ram";
console.log(str[1]);

let template_literal = `Jai Shree ram`;
console.log(`the str is ${str}`);

let username = prompt("Enter your name");
console.log(username+username.length);

//CHAPTER --> 4 

let marksArray = [10,20,50,32,2];
console.log(marksArray)
let sum=0;
for(let i=0;i<marksArray.length;i++){
    sum = sum + marksArray[i];
}

console.log(sum/marksArray.length);

marksArray.push(55);
console.log(marksArray);

//CHAPTER --> 5


function print(strin){
    console.log(strin);
};
print("Hello")
let a = 5;
let b = 10;
const func = (a,b) => {
    return a+b;
}
console.log(func(a,b));

let arr = [1,2,5,3,5];
arr.forEach(function fun(val){
    console.log(val**2);
});

let newArray = arr.map((val)=>{
    return val * 2;
});
console.log(newArray);
let newArr = arr.filter((val)=>{
    return val%2!==0;
});
console.log(newArr);
const outp = arr.reduce((res,val)=>{
    return res+val;
});
console.log(outp);
