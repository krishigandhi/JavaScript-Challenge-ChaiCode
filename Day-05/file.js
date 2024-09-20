// Activity - 1
//let n;
{function oddEve(n){
     if(n%2 == 0){
        console.log("even");
     }
     else console.log("odd");
}
oddEve(32);
}

{function square(n){
  console.log( n*n) ;
}
square(3);
}

// Activity - 2
{function max(a,b){
if(a>b) console.log(`${a} is greater than ${b}`);
else console.log(`${b} is greater than ${a}`);
}
max(10,11)
}
{
function concateNum(a,b){
  console.log(a.concat(b))
}
concateNum("Hii"," Krishi")
  }
// Activity - 3
{
let add = (a,b) => {
  return a+b;
}
console.log(add(10,20));
}
{
let check = (str,char) => str.includes(char);
console.log(check("Krishi","o"));
console.log(check("Krishi","i"));
  }

// Activity - 4
{let mul = (a) => a * 10 ;
console.log(mul(10));
 }
{
 let greet = (naam,age=16) => console.log(`Hii ${naam} and your age is ${age}`)
 greet("Krishi")
  }
// Activity - 5
{
function call (a,times) {
  for( let i=0; i< times ; i++){
    a();
  } 
}

call(() => console.log("hii"),5);
 }

 function comp(fun1,fun2,value){
    let result = fun1(value);
    return fun2(result);
 }

 const mulBy2 = (x) => x*2;
 const sqre = (x) => x*x;

 const result = comp(mulBy2,sqre,5);
 console.log(result);




