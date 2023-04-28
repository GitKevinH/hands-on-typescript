interface Book {    //interface for book w/ properties defined
  id: number;
  title: string;
  author: string;
  published: Date;
  available: boolean;
}

const books: Book[] = [    //Array of Book objects that follow the Book interface
  {
    id: 1,
    title: "book1",
    author: "Booker T Washington",
    published: new Date("1907-01-01"),
    available: true,
  },
  {
    id: 2,
    title: "book2",
    author: "Stephen King",
    published: new Date("1919-01-01"),
    available: true,
  },
  {
    id: 3,
    title: "book3",
    author: "Guy Guy",
    published: new Date("2007-01-01"),
    available: false,
  }
];

let bookTest:Book = {     // book object to be used to test
    id: 3,
    title: "book7",
    author: "Mon Sueir",
    published: new Date("2037-01-01"),
    available: false,

}

function addBook(book:Book):void{
    books.push(book)
}
// console.log(books);
// addBook(bookTest); // testing, works 
// console.log(books);



function findBookById(id: number): Book|undefined{
    
    let bookByID = books.filter(function (book){
        return book.id === id
    })

    if (bookByID[0].id){
        return bookByID[0]
    } else {
        return undefined
    }
}

// console.log(findBookById(2)); // testing, works


function updateBook(book:Book): boolean{
    
    let found = false;
    books.forEach(element => {
        if (element.id == book.id) {
            books[books.indexOf(element)] = book;
            found = true;
        }
    });

    return found

}

// console.log(books);  // Testing to show function works. Please make sure other function testing is not enable.
// updateBook(bookTest)
// console.log(books);

function removeBook(id:number):boolean{
    let found = false;
    books.forEach(element => {
        if (element.id == id) {
            books.splice(books.indexOf(element),1)
            found = true;
        }
    });

    return found

}

// console.log(books);  // Testing to show function works. Please make sure other function testing is not enable.
// removeBook(3)
// console.log(books);