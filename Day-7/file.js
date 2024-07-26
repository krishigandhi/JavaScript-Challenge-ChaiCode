// Activity - 1
let ObjBook = {
    title: "abc",
    author: "me",
    year: 2024,
    getdetails: function () {
        return `Title : ${this.title} ,Author ${this.author}`;
    },
    updateYear: function(newYear){
        return this.year = newYear
    }
}
// console.log(ObjBook);
// console.log(ObjBook.title,ObjBook.author)

// Activity - 2
    // console.log(ObjBook.getdetails());
ObjBook.updateYear(2024) ;
// console.log(ObjBook.year);

// Activity - 3
let Library = {
    Lib1: {
        name:" myLib1",
     books : ['a','b','c','d'],
     title: "fictional ",
     year: 2021,

     book1Obj: function(title,year) {
        return `${this.title} , ${this.year}`
     }
    },

    Lib2: {
        name: "myLib2",
    books : ['e','f','g','h'],
        title: "Non Fictional",
     year: 2022,
     book2Obj: function(title,year) {
        return `${this.title} , ${this.year}`
     }

    }
    
}
// console.log(Library);
console.log(Array.isArray(Library.Lib1.books));

for (let libkey in Library) {
      let library = Library[libkey];
        // console.log(`Library Name:  ${library.name}`);
        // console.log(`Books:  ${library.books.join(',')}`);
        // console.log(`Title:  ${library.title}`);

    }


// Activity - 4

// console.log(Library.Lib1.book1Obj() , Library.Lib2.book2Obj());

// Activity-5
console.log(Object.keys(Library.Lib1),Object.keys(Library.Lib2));
console.log(Object.values(Library.Lib1),Object.values(Library.Lib2));
