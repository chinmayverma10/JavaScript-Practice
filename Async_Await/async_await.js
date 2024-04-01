//Async function always returns a promise 
//await pauses the execution of its surrounding async function until the promise is settled

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather api");
            resolve(200);
        },2000)
    })
}

// await api();

// async function getapi(){
//     await api();
//     await api().then((res)=>{
//         console.log(res);
//     });
// }
// getapi()


//IIFE => Immediately invoked function expression
//It is a function called immediately as soon as it is defined

(async function getapi(){
    await api();
    await api().then((res)=>{
        console.log(res);
    });
})();