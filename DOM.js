console.dir(document)
console.log(document)

document.querySelector("html") //--> Will return conplete html code
document.querySelector("html").children[1]; //--> Will return body tag


let div = document.querySelector("div");
console.log(div);
// div.innerText = "Dragon Fruit";
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.tagName);
console.log(div.textContent);

let h2 = document.querySelector(".hellonew");
h2.innerText = h2.innerText + " from apna college students";
