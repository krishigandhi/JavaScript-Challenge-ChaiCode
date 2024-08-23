// Activity - 1

// let promiseFun = new Promise((resolve, reject) => {
//     setTimeout(function(){
// // console.log ("resolved");
// resolve();
// }, 2000)
// });

// let promiseFun2 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         reject("Rejected error");
//     },2000);
// });
// promiseFun2.then((result) =>
    // {console.log(result)}) // To handle success case and this is not called
// .catch((error) => 
    // {console.log(error)});

// Activity - 2

// new Promise(function(resolve,reject){
//     // setTimeout(()=> resolve(1) ,1000);
// }).then(function(result) {
//     // alert (result);
//     return result*2 ;
// }).then(function(result){
//     // alert (result);
//     return result*2 ;
// });


// Activity - 3

async function wait() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("resoleved")
        },2500);
    })
}


console.log("A")
console.log("B")
console.log("get data")
let data = new wait()
console.log()

// Activity - 4
// Activity - 5