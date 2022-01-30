const form = document.querySelector('#submit-form')

const addBtn = document.querySelector('#add-btn')
addBtn.addEventListener('click', addBookToLibrary);

let myLibrary = [];
let newBook;

class Book {
    constructor(title, author, page, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.page = form.page.value;
        this.read = form.read.checked;
    }
}



function addBookToLibrary(event) {
    event.preventDefault();
    //create and add new book to array
    newBook = new Book();
    myLibrary.push(newBook)
    render();
    form.reset();

}

function render() {
    const books = document.querySelectorAll('.book');
    const library = document.querySelector('.library');
    books.forEach(book => library.removeChild(book));

    for(let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i])
    }

    const submitFormWrapper = document.querySelector('.form-wrapper');
    const submitForm = document.querySelector('#submit-form');
    submitForm.style.display = 'none';
    submitFormWrapper.style.display = 'none';
}


function createBook(item) {
    const library = document.querySelector('.library')
    const book = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const page = document.createElement('div')
    const read = document.createElement('div')
    const readToggle = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const readToggleDisplay = function() {
        if(item.read == true) {
            read.textContent = 'Completed'
            book.style.border = '2px solid #339b338c'
        } else {
            read.textContent = 'Not Completed'
            book.style.border = '2px solid #e4202096'
        }
    }
    
    book.classList.add('book');
    book.setAttribute('id', myLibrary.indexOf(item))

    title.textContent = item.title;
    title.classList.add('book-title');
    book.appendChild(title);

    author.textContent = item.author;
    author.classList.add('book-author')
    book.append(author);

    page.textContent = item.page;
    page.classList.add('book-page')
    book.appendChild(page)

    
    readToggleDisplay();
    read.classList.add('book-read')
    book.appendChild(read)

    readToggle.addEventListener('click', (e) => {
        item.read = !item.read;
        readToggleDisplay();
    })
    readToggle.textContent = '?'
    readToggle.setAttribute('id', 'toggle-read-btn')
    book.appendChild(readToggle);

    deleteBtn.innerHTML = '<i class="fa fa-times"></i>';
    deleteBtn.setAttribute('id', 'delete-btn')
    deleteBtn.addEventListener('click', (e) => {
        deleteBtn.parentElement.remove();
        myLibrary.splice(myLibrary.indexOf(item), 1)
        render();
    })
    book.appendChild(deleteBtn);

    library.appendChild(book);

}

const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', (e) => {
    const submitFormWrapper = document.querySelector('.form-wrapper');
    const submitForm = document.querySelector('#submit-form');
    
    submitForm.style.display = 'flex';
    submitFormWrapper.style.display = 'flex';
})