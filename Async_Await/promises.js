//Promises => promise is for eventual completion of task. It is an object in js
//It is solution to callback hell

let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise")
    // resolve("Success")
    reject("sorry")
})



//A javascript promise object can be :-
//      pending - the result is undefined
//      resolved - the reult is a value (fulfilled)   resolve(result)
//      rejected - the result is an error object      reject(error)


//How to use promises .then() => for resolve and .catch() => for reject
promise.then((res)=>{
    console.log(res)
})
promise.catch((err)=>{
    console.log(err);
})

function async1()  {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success")
        },3000)
    })
}
function async2()  {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success")
        },3000)
    })
}

async1().then((res)=>{
    console.log("data1...")
    console.log(res)
    async2().then((res)=>{
        console.log("data2...")
        console.log(res)
    })
})
