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

// async function wait() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(45)
//         },2500);
//     })
// }

// async function main() {
    
//     console.log("A")
//     console.log("B")
//     console.log("get data");
//     let data = await wait();
//     console.log(data);
//     console.log("Done waiting");
// }
// main()


// const rej = () => {
//     return new Promise (( resolve,reject ) => {
//         reject("Code Rejected Activity - 3 task 2")
//     }) ;
// };


// const handleError = async () => { 
//     try {
//        const result =  await rej() ;
//        console.log(result)
//     } catch (error) {
//         console.log("Error exeuted ", error)
//     }
//  }

//  handleError()

// Activity - 4
//  fetch ('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('Error: ' ,error))

// let fdata = fetch ('https://jsonplaceholder.typicode.com/todos/1')
// async function getData() {
//     let data =  await fdata;
//     let response = await data.json();
//     console.log(response);
// }

// getData()

// Activity - 5

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Hii')
    }, 3000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return    resolve('Hiii ')
    }, 1000);

});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Hii ii')
    }, 1500);
});
// Promise.all([p1,p2,p3]).then((values)=> {console.log(values)})

Promise.race([p1,p2,p3]).then((x)=> {console.log(x)})