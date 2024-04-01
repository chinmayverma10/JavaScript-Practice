//Async-Await-Callback

//async await >> promise chains >> callback hell

//Synchronous => Code executed in a sequence and every line of code waits for the previous line of code to be completely executed

//Asynchronous => sometimes synchronous causes delay in ui, 
//executes next instruction immediately and doesnt block the flow
//execution goes parallely

console.log(1)
setTimeout(()=>{
    console.log("hello")
},4000)
console.log(2)

// Callback => it is function passed as an argument in another function
// Callback hell => nested callback stacked below one another forming pyramid structure (pyramid of dom)

function data(data,nextdata){
    setTimeout(()=>{
        console.log(data)
        if(nextdata){
            nextdata()
        }
    },3000)
}

data(1,()=>{
    data(2,()=>{
        data(3,()=>{
            data(4)
        })
    })
})