import { addContent, createTable} from './dom.js'


const container = document.getElementById('container');
const addBook = addContent();
const submit = document.getElementById("submit");


let myBooks = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBooks = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

 
  const newBook = new Book(title, author, pages, read);
  myBooks.push(newBook);
  localStorage.setItem('data', JSON.stringify(myBooks));
  
 
 
};


const render = () => {
  localStorage.getItem("data")
  myBooks = JSON.parse(localStorage.getItem("data"));
  for (let i = 0; i < myBooks.length; i = i + 1) {
    const tr = createTable(myBooks[i]);
    
  }
  
  
};

container.appendChild(addBook)



submit.onclick = function (e) {
  e.preventDefault();
  addBooks();
  console.log(myBooks)
};

window.onload = () => {
  render();
};


