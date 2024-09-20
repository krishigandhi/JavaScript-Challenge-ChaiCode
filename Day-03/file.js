// Activity - 1
let a = 0;
if(a>0){
    console.log("Positive")
}
else if(a<0){
    console.log("Negative")
}
else console.log("Zero")

let age = 24;{
if(age>18){
    console.log("Allow to vote")
}
else console.log("Not Allowed")
}
// Activity - 2
let b = 3;
let c = 14;
let d = 5;
if(d>b){
    if(d>c) {console.log("d is greater")}
        else console.log("c is greater")
}
if(b>d && b>c) console.log("b is greater")

// Activity - 3

function getDayName(dayNumber){
let dayname;
switch(dayNumber){
    case 0: 
    dayname= "Sunday" ;
    break;
    case 1:
          dayname= "monday" ;
        break;
    case 2: 
      dayname= "tuesday"  ;
   break;
    case 3:
      dayname= "Wednesday" ;
    break;
  case 4:
      dayname= "Thursday" ;
    break;
  case 5:
      dayname= "Friday" ;
    break;
  case 6:
      dayname= "Saturday" ;
      break;
    default:
        dayname = "Error";
}
  return dayname;
}
let dayNumber = 0;
let dayname = getDayName(dayNumber);
console.log(dayname);

////*************************************** *//
function getGrade(marks){
  let grade;
  switch(true){
  case (marks > 90 && marks<=100):
    grade = "A" ;
    break;
  case (marks > 80 && marks <=90):
    grade= "B";
    break;
    case (marks > 70 && marks <= 80):
      grade = "C";
      break;
    case (marks > 60 && marks <= 70):
      grade = "D";
      break;
    case (marks >= 0 && marks <= 60):
      grade = "F";
      break;
    default:
      grade = "Invalid marks";
    }
    return grade;
}
let mark = 92;
let grade = getGrade(mark) ;
console.log(grade) ;

// Activity - 4
let num = 41;
let result = (num % 2 == 0 ) ? "even" : "odd" ;
console.log(result );

// Activity - 5
let year = 2005;
if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0 ){
  console.log("Leap year")
}
else console.log("Not a leap year");

