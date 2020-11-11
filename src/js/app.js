import { addContent, createTable} from './dom.js'


const addBook = addContent();

const submit = document.getElementById("submit");

let myBooks = [];
let bookId = 0;




function Book(title, author, pages, read, i) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? true : false;
  this.id = bookId;
  
  
}

const addBooks = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read') ; 
  const id = document.getElementById('id')
  
  
  if (title && author && pages) {
    const newBook = new Book(title, author, pages, read , id);
    
    myBooks.unshift(newBook);
    localStorage.setItem('data', JSON.stringify(myBooks));
    
  }
};

submit.onclick = function (e) {
 e.preventDefault()
  addBooks();
  window.location.reload() 
};


const render = () => {
  if (localStorage.getItem("data")) {
    myBooks = JSON.parse(localStorage.getItem("data"));
    myBooks.forEach((book) => {
     createTable(book); 
    })
  }; 
}

window['deleteBook'] = (i) => {
  myBooks = JSON.parse(localStorage.getItem("data"));
  myBooks.splice(getBookByID(i), 1)
  localStorage.setItem('data', JSON.stringify(myBooks))
  window.location.reload() 
}


window['updateReadStatus'] = (i) => {
  myBooks = JSON.parse(localStorage.getItem('data'))
  getBookByID(i).read = !getBookByID(i).read;
  localStorage.setItem('data', JSON.stringify(myBooks))
}

const getBookByID = (id) => {
  return myBooks.filter((book) => book.id == id)[0];
}



window.onload = () => {
  
  render()
  
}

