let newDiv = document.querySelector(".newDiv");
// newDiv.onmouseover = () => {
//     alert("Mouse hata")
// };
let btn = document.querySelector("button");
btn.addEventListener("click",() => {
    console.log("Mouse was clicked");
});

let modebtn = document.querySelector("#modebtn");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode = "dark";
        body.style.backgroundColor = "black";
    }else {
        currmode = "light";
        body.style.backgroundColor = "white";
    }
});