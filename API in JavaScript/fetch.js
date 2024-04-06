//the fetch api provides an interface for fetching (sending/receiving) rsources
//it uses request and response objects

const url = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(url)
// console.log(promise)
const fact = document.querySelector(".fact");
const btn = document.querySelector("#get")


const getdata = async () => {
    let response = await fetch(url);//by default get request
    console.log(response) //json format
    let data = await response.json();
    // console.log(data)
    fact.innerHTML = data[0].text;
}

function getFacts(){
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        fact.innerHTML = data[0].text;
    })
}

btn.addEventListener("click",getFacts);

//AJAX => asynchronous js & xml
//JSON => Javascript object notation
//json() method => returns a second promise that resolves with the result of parsing the response body text as JSON. (input is json , output is js object)

//Requst and response => HTTP verbs , Response Status Code