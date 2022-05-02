const addButton = document.querySelector('.add-btn');
const addContainer = document.querySelector('.add');
const bookForm = document.querySelector('.book-form');
const cancelBtn = document.getElementById('cancel-btn');
const submitBtn = document.getElementById('submit-btn');

const newWindow = document.querySelector('.window');
const bookShelf = document.getElementById('book-shelf');
const footer = document.querySelector('footer');

let bookLibrary = [];

class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.hasRead = hasRead
    }

    toggleRead() {
        if (this.hasRead === "yes") {
            this.hasRead === "no"
        } else {
            this.hasRead === "yes";
        }
    }

    removeBook() {
        //remove book from library display and arr
    }
}

addButton.addEventListener('click', e => {
    const showForm = bookForm.style.display = "block";
    const newBackground = newWindow.style.display = "flex";
    const hideAddBtn = addButton.style.display = "none";
    const hideAddContainer = addContainer.style.display = "none";
    const hideBookShelf = bookShelf.style.display = "none";
    const showFooter = footer.style.display = "block";
})
submitBtn.addEventListener('click', addToLibrary);


function addToLibrary() {
    const titleInput = document.getElementById('title').value;
    const authorInput = document.getElementById('author').value;
    const pagesInput = document.getElementById('pages').value;
    const hasReadInput = document.querySelector('input[name="read-status"]:checked').value;
    const clearBtn = document.getElementById('clear-btn');

    if (document.getElementById('title').value === "" || 
        document.getElementById('author').value === "" || 
        document.getElementById('pages').value === "") {
            alert("You must enter the book information before submitting.")
    } else {
        let newBook = new Book(titleInput, authorInput, pagesInput, hasReadInput);
        bookLibrary.push(newBook);
        console.log({bookLibrary});
    }

    clearBtn.addEventListener('click', clearForm);
    cancelBtn.addEventListener('click', closeForm);

    function clearForm() {
        document.querySelector('.book-form').reset();
        // titleInput = "";
        // authorInput = "";
        // pagesInput = "";
    }

    function closeForm() {
        const disableForm = bookForm.style.display = "none";
        const originalBackground = newWindow.style.display = "none";
        const showAddBtn = addButton.style.display = "block";
        const showAddContainer = addContainer.style.display = "block";
        const hideBookShelf = bookShelf.style.display = "grid";
        const showFooter = footer.style.display = "none";
        clearForm();
    }

    
}
//     //DOM ELEMENTS
//     const bookEntry = document.createElement('div');
//     bookEntry.classList.add('book-entry');
//     bookShelf.appendChild(bookEntry);
//     const titleEntry = document.createElement('h2');
//     bookEntry.appendChild(titleEntry);
//     titleEntry.textContent = book.title 
//     const authorEntry = document.createElement('h3');
//     bookEntry.appendChild(authorEntry);
//     authorEntry.textContent = book.author;
//     const pagesEntry = document.createElement('h4');
//     bookEntry.appendChild(pagesEntry);
//     pagesEntry.textContent = `${book.pages} pages`;
//     const innerContainer = document.createElement('div');
//     innerContainer.classList.add('inner-container');
//     bookEntry.appendChild(innerContainer);
//     const readIcon = document.createElement('img');
//     if (document.querySelector('input[name="read-status"]:checked').value === "yes") {
//         readIcon.src = "/images/yes.png";
//         readIcon.classList.add('yes');
//     } else {
//         readIcon.src = "/images/no.png";
//         readIcon.classList.add('no');
//     }
//     innerContainer.appendChild(readIcon);
//     const removeIcon = document.createElement('img');
//     removeIcon.setAttribute('id', 'remove-icon');
//     removeIcon.src = "/images/remove.png";
//     innerContainer.appendChild(removeIcon);
//     //REMOVE BUTTON
//     removeIcon.addEventListener('click', e => {
//         removeIcon.parentElement.parentElement.remove();
//     });
//     //TOGGLE THE READ ICON
//     readIcon.addEventListener('click', e => {
//         if (readIcon.className === "yes") {
//             readIcon.src = "/images/no.png"
//         } else {
//             readIcon.src = "/images/yes.png"
//         }
//     })
// }}



