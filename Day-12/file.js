// Activity - 1
// function er() {
//     throw new Error("Error throws intentallionally");
    
// }
// try {
//      er()
// } catch (error) {
//     console.log("errrrorrrr", error.message);
// }


// function div (n,d){
//     if(d==0){
//         throw new Error("D is 0 ")
//     }
//     else console.log(n/d)  ; 
// }

// try {
//     div(4,2)
// } catch (error) {
//     console.log(" 0 is error",error.message)
// }


// Activity - 2
// function div (n,d){
//     if(d==0){
//         throw new Error("D is 0 ")
//     }
//     else console.log(n/d)  ;  
// }

// try {
//     div(4,2)
// } catch (error) {
//     console.log(" 0 is error",error.message)
// }
// finally {
//     console.log("Both executed reached finally")
// }

// Activity - 3

// function check (input){
    
//    if(!input || input == "" ){
//     throw new ReferenceError ("Input cannot be empty ")
//    }
// }
// try {
//    let inp = prompt("Enter the input");
//    check(inp);
// } 
// catch (error) {
//     console.log(error.name)
//     console.log(error.stack)
//     console.log(error.message)

// }
// console.log("Show")

// Activity - 4
// let promise = new Promise((resolve,reject) => {
//     const num = Math.random();
//     if(num<0.5){
//         resolve("Resolved",num)
//     }
//     else{
//         reject("Rejected",num)
//     }
// })
// promise
// .then((message) => {
//     console.log("Num is resolved !")

// })  
//  .catch ((error) => {
//     console.log("Num is rejected refresh again !")
// })

async function number() {
    try {
        const num = Math.random();
    if(num<0.5){
       console.log (`Resolved,${num}`)
    }
    else{
      throw new Error(`${num}`)
    }

    } catch (error) {
        console.log("Rejected the num",error.message)
    } 
}
number()
    // Activity - 5
    