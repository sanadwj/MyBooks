import { addContent} from './dom.js'


const container = document.getElementById('container');
const addBook = addContent();


container.appendChild(addBook);

let myBooks = [];

function Book(title, auther, pages, read) {
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
  

 
};



