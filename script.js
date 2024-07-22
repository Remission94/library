const container = document.querySelector(".library")

const myLibrary = []

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status
};

function addBookToLibrary () {
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.setAttribute("style", "position: relative; height: 200px; width:200px; border: white solid 2px; display: flex; flex-direction: column; gap: 10px; flex-wrap: wrap; border-radius: 25px; padding: 15px; background-color: rgb(31 41 55); color: white; ");
        const bookName = document.createElement("div");
        bookName.textContent = "Name: " + book.name;
        const bookAuthor = document.createElement("div");
        bookAuthor.textContent = "Author: " + book.author;
        const bookPages = document.createElement("div");
        bookPages.textContent = "Pages: " + book.pages;
        const bookStatus = document.createElement("div");
        bookStatus.textContent = "Status: " + book.status;
        const remove = document.createElement("img");
        remove.src = "./img/delete-svgrepo-com.svg";
        remove.setAttribute("style", "position: absolute; bottom: 15px; right: 10px; width: 50px; height: 30px");

        bookCard.appendChild(bookName);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookStatus);
        container.appendChild(bookCard);
        bookCard.appendChild(remove);
    })
};

const addButton = document.querySelector(".addBook")
addButton.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);}
    const inputName = document.querySelector("#inputName");
    const inputAuthor = document.querySelector("#inputAuthor");
    const inputPages = document.querySelector("#inputPages");
    const inputStatus = document.querySelector("#inputStatus");
    const newBook = new Book(inputName.value, inputAuthor.value, inputPages.value, inputStatus.value);
    myLibrary.push(newBook)
    addBookToLibrary()
    inputName.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputStatus.value = "";
})
