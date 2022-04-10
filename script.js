const addButton = document.querySelector('.add-btn');
const bookForm = document.querySelector('.book-form');
const cancelBtn = document.getElementById('cancel-btn');
const submitBtn = document.getElementById('submit-btn');
const newWindow = document.querySelector('.window');


let bookLibrary = [];

addToLibrary();
closeForm();

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
})
submitBtn.addEventListener('click', addToLibrary)
    //add user input to bookLibrary array - push method? when submit button clicked
    //display newly added item on page

function addToLibrary() {
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        hasRead: document.getElementById('has-read').value,
    }
    bookLibrary.push(book);
    console.log({bookLibrary});
    
}

    function removeFromLibrary() {
    //add event listener on remove button
    //remove book from bookLibrary array
    //book will no longer appear on screen
}

function updateReadStatus() {
    //add event listner on has read/has not read button
    //toggle value of object hasRead key on click
    //book appears as 'has read' or 'has not read' on screen
}

function closeForm() {
    cancelBtn.addEventListener('click', e => {
        const disableForm = bookForm.style.display = "none";
        const originalBackground = newWindow.style.display = "none";
        const showAddBtn = addButton.style.display = "block";
    })
};