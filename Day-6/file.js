// Activity - 1
let arr = [1,2,3,4,5];
// console.log(arr);
//  console.log(arr[0], arr[4])

// Activity - 2
 arr.push(6,7);
// console.log(arr);
arr.pop(7);
// console.log(arr);
arr.shift()
// console.log(arr);
arr.unshift(0)
// console.log(arr);

// Activity - 3
function double(n){
    return n*2;
}
let arrr = [1,2,3,4,5];
let arrr2 = arrr.map(double);
// console.log(arrr2)

//Filter method 
function even(n){
    return n%2==0;
}
let arr3 = arrr.filter(even);
// console.log(arr3)

//Reduce
let s=0;
function sum(s,n){
    return s+=n
}
let arr4 = arrr.reduce(sum);
// console.log(arr4)

// Activity - 4
let array = [1,2,3,4,5,6,7,8,9];
{for(let i=0;i<array.length;i++)
    // console.log
    (array[i]);
    }
{
array.forEach(function foreaach(e) {
    //console.log(e)
})

}
// Activity-5
let a1 = [
[1,2,3,4] ,
[5,6,7,8],
[9,10,11,12]
];
// console.log(a1);
let a2 = a1[0][2]
console.log(a2)
