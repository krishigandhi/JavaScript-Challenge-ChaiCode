// Activity - 1
class Person{
    constructor(firstname,lastname,age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    static greeting(){
        console.log("Helllloooo")
    }

    get Fullname (){
        // return this.firstname  + " " +   this.lastname;
    }
    set Fullname(name){
        const parts = name.split(" ");
        this.firstname = parts[0].toUpperCase();
        this.lastname = parts[1].toUpperCase();
    }
    greet(){
        // console.log(`Welcome ${this.name} age ${this.age}`);
    }
    updateAge(newAge) {
        this.age = newAge;
        // console.log(`updated age is ${this.age}`)
       }
}

// Person.Fullname("Krishi","Gandhi")
let Person1 = new 
Person ("Kris","G",22);
let Person2 = new Person( "Ruchi S" , "Gandhi")
// console.log(Person2.Fullname)
Person1.Fullname = "Ruchi Gandhi";
// console.log(Person1.Fullname)

// console.log(`Firstname: ${Person2.Fullname}`)


// Person1.updateAge(23);
 Person1.greet();

// Activity - 2
class Student extends Person{
    static count = 0;
    constructor(name,age,studentId){
        super(name,age)
        this.studentId = studentId;
        Student.count ++;
    }

    stu(){
        console.log(`Welcome ${this.name} age ${this.age} Student id is ${this.studentId}`)
    }
    greet(){
        console.log(`Greeting to  ${this.name} age ${this.age} Student id is ${this.studentId} `)
    }
}

// const studentId1 = new Student("K",23,1234);
// const studentId2 = new Student("K",22,1234);
// console.log(`Student count is ${Student.count}`)

// studentId1.stu()
// studentId1.greet();
// Person.greeting()

// Activity - 3

// Activity - 4

// Activity - 5
class Account {
    #balance;
    constructor(initialBalance = 0) {
       this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited:  Rs.${amount} &&&  Total = Rs.${this.#balance}`)
        }
        else{
            console.log(`Deposited amount must be +ve`)
        }
    }
    withdraw(amount){
        if(amount>0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Money withdraw: Rs.${amount} &&&  Total = Rs.${this.#balance}`)
        }
        else if(amount>0 && amount>this.#balance){
            console.log(`Money insufficent you can withdraw upto Rs.${this.#balance} only`)

        }
        else{
            console.log(`Enter properly`)
        }
    }


getBalance(){
return this.#balance
}
}

const myAcc = new Account(100);
console.log(`${myAcc.getBalance()}`)

myAcc.deposit(1000)
myAcc.deposit(1000)

myAcc.withdraw(100)
myAcc.withdraw(10000)

