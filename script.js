const container = document.querySelector(".library")

//array of books
let myLibrary = []

//constructor
function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;

};

//button on sidebar
const addButton = document.querySelector(".addBook")

addButton.addEventListener("click", () => {


//takes info from sidebar inputs and uses constructor to make a new Book object
    const inputName = document.querySelector("#inputName");
    const inputAuthor = document.querySelector("#inputAuthor");
    const inputPages = document.querySelector("#inputPages");
    const inputStatus = document.querySelector("#inputStatus");
    const newBook = new Book(inputName.value, inputAuthor.value, inputPages.value, inputStatus.value);
 
//creates html elements for the Book cards
    const bookCard = document.createElement("div");
    const bookName = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookStatus = document.createElement("div");
    const remove = document.createElement("img");

//adds a Book object to the array, including remove button which is used for filter function
    myLibrary.push([newBook, remove])

//styling and adding content to the Book cards
    bookCard.setAttribute("style", "position: relative; height: 200px; width:200px; border: white solid 2px; display: flex; flex-direction: column; gap: 10px; flex-wrap: wrap; border-radius: 25px; padding: 15px; background-color: rgb(31 41 55); color: white; ");
    bookName.textContent = "Name: " + newBook.name;
    bookAuthor.textContent = "Author: " + newBook.author;
    bookPages.textContent = "Pages: " + newBook.pages;
    bookStatus.textContent = "Status: " + newBook.status;
    remove.src = "./img/delete-svgrepo-com.svg";
    remove.setAttribute("style", "position: absolute; bottom: 15px; right: 10px; width: 50px; height: 30px");

//appends all the elements to the html
    bookCard.appendChild(bookName);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookStatus);
    bookCard.appendChild(remove);
    container.appendChild(bookCard);

//removes parent html element from corresponding card of remove button
//filters library so that book in array from targeted remove button gets removed
    remove.addEventListener("click", event => {
        event.target.parentNode.remove();
        myLibrary = myLibrary.filter(book => book[1] !== event.target)     
    })

//clears sidebar inputs
    inputName.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputStatus.value = "";
})

