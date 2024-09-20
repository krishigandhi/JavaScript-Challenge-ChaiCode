// Activity - 1
let name = 'Krishi' ;
let age = 22;  
// console.log(`Name: ${name} Age: ${age} i am Krishi`)

// Activity -  2   // Destructing 
let arr = [1,2,3,4,5];
let [a,b] = arr;
// console.log(a,b);
let book = {
    title: "mybook",
    author: "me",
}
let {title:c1,author:d1} = book;
// console.log(c1,d1)

// Activity - 3
let arr2 = [6,7,5];
let arr12 = [...arr,...arr2];
// console.log(arr12);
 function sum(...numbers){
    return numbers.reduce((total,num) => total+num, 0);
 }
//  console.log(sum(1,2,3));
//  console.log(sum(10,20,30))

// Activity - 4
let mul = 1; 
function pro(f,g){
    return mul = f*1;
}

// console.log(pro(6));

// Activity - 5

// let q = 23;
// let p = 3;
// let pq = {q,p};
// console.log(pq)

let key1 = 'name';
let key2 = 'age';

let person = {
    [key1]: 'Krish',
   [key2]: 22,
}

// console.log(person);
let fullname =  'Krishi';
let edu =  "CSE";
let year =  3;
let details ={
 fullname,
 edu,
 year,
 greet: function(){
    return ` My name is ${fullname} and i am in ${edu}`;
 },
 updateYear: function(newYear){
        this.year = newYear;
        return  this.year;
 }
} 
console.log(details.greet());
console.log(details.updateYear(4))