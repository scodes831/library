const header = document.querySelector('header');
const addButton = document.querySelector('.add-btn');
const addContainer = document.querySelector('.add');
const bookForm = document.querySelector('.book-form');
const cancelBtn = document.getElementById('cancel-btn');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const newWindow = document.querySelector('.window');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const hasReadInput = document.querySelector('input[name="read-status"]:checked');
const bookShelf = document.getElementById('book-shelf');

let bookLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.hasRead = hasRead
}

addButton.addEventListener('click', e => {
    const showForm = bookForm.style.display = "block";
    const newBackground = newWindow.style.display = "flex";
    const hideAddBtn = addButton.style.display = "none";
    const hideAddContainer = addContainer.style.display = "none";
    const hideBookShelf = bookShelf.style.display = "none";
})
submitBtn.addEventListener('click', addToLibrary);
clearBtn.addEventListener('click', clearForm);
cancelBtn.addEventListener('click', closeForm);

function addToLibrary() {
    //DON'T LET USER SUBMIT IF INPUTS ARE EMPTY
    if (document.getElementById('title').value === "" || 
        document.getElementById('author').value === "" || 
        document.getElementById('pages').value === "") {
            alert("You must enter the book information before submitting.")
    } else {
    //IF INPUTS ARE NOT EMPTY
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        hasRead: document.getElementById('has-read').value,
    }
    bookLibrary.push(book);
    console.log({bookLibrary});
    //DOM ELEMENTS
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book-entry');
    bookShelf.appendChild(bookEntry);
    const titleEntry = document.createElement('h2');
    bookEntry.appendChild(titleEntry);
    titleEntry.textContent = book.title 
    const authorEntry = document.createElement('h3');
    bookEntry.appendChild(authorEntry);
    authorEntry.textContent = book.author;
    const pagesEntry = document.createElement('h4');
    bookEntry.appendChild(pagesEntry);
    pagesEntry.textContent = `${book.pages} pages`;
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-container');
    bookEntry.appendChild(innerContainer);
    const readIcon = document.createElement('img');
    if (document.querySelector('input[name="read-status"]:checked').value === "yes") {
        readIcon.src = "/images/yes.png";
        readIcon.classList.add('yes');
    } else {
        readIcon.src = "/images/no.png";
        readIcon.classList.add('no');
    }
    innerContainer.appendChild(readIcon);
    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('id', 'remove-icon');
    removeIcon.src = "/images/remove.png";
    innerContainer.appendChild(removeIcon);
    //REMOVE BUTTON
    removeIcon.addEventListener('click', e => {
        removeIcon.parentElement.parentElement.remove();
    });
    //TOGGLE THE READ ICON
    readIcon.addEventListener('click', e => {
        if (readIcon.className === "yes") {
            readIcon.src = "/images/no.png"
        } else {
            readIcon.src = "/images/yes.png"
        }
    })
}}

function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}

function closeForm() {
    const disableForm = bookForm.style.display = "none";
    const originalBackground = newWindow.style.display = "none";
    const showAddBtn = addButton.style.display = "block";
    const showAddContainer = addContainer.style.display = "block";
    const hideBookShelf = bookShelf.style.display = "grid";
    clearForm();
}