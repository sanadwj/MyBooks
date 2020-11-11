
function addContent() {
  const container = document.getElementById('container');
  

  const addBook = document.createElement('div');
  addBook.classList.add('addBook');
  container.setAttribute('style', 'text-align: center ')
  container.appendChild(addBook);

  

  const form = document.createElement('form');
  form.innerHTML = 'Add a Book';
  form.setAttribute('style', 'margin: 1em');
  container.appendChild(form);
  

  const titleDiv = document.createElement('div')
  titleDiv.setAttribute('style', 'margin: 0.5em')
  const title = document.createElement('input');
  title.setAttribute('id', 'title');
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Title");
  titleDiv.appendChild(title);
  form.appendChild(titleDiv);


  const authorDiv = document.createElement('div')
  authorDiv.setAttribute('style', 'margin: 0.5em')
  const author = document.createElement('input');
  author.setAttribute('id', 'author');
  author.setAttribute("type", "text");
  author.setAttribute("placeholder", "Author");
  authorDiv.appendChild(author);
  form.appendChild(authorDiv);


  const pagesDiv = document.createElement('div')
  pagesDiv.setAttribute('style', 'margin: 0.5em')
  const pages = document.createElement('input');
  pages.setAttribute('id', 'pages');
  pages.setAttribute("type", "number");
  pages.setAttribute("placeholder", "Pages");
  pagesDiv.appendChild(pages);
  form.appendChild(pagesDiv);


  

  const submitDiv = document.createElement('div');
  submitDiv.setAttribute('style', 'margin: 0.5em')
  const submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "New Book";
  submitDiv.appendChild(submit);
  form.appendChild(submitDiv);





return addBook;
}


function createTable(book,i) {
  const container = document.getElementById('container');

  const table = document.createElement('table');
  table.classList.add('table');
  table.setAttribute('style', 'margin: 0.5em; width: 100%; display: inline-block; flex-direction: column; border-top: 2px solid gray');
  table.setAttribute('id', 'id');
  table.id = book.id++
  container.appendChild(table);
  
  
  
  
  const tDiv = document.createElement('div');
  const ttr = document.createElement('tr');
  ttr.innerHTML = `<td>Title: ${book.title} </td>`
  tDiv.appendChild(ttr);
  table.appendChild(tDiv);

  const aDiv = document.createElement('div');
  const atr = document.createElement('tr');
  atr.innerHTML = `<td>Author: ${book.author}</td>`
  aDiv.appendChild(atr);
  table.appendChild(aDiv);

  const pDiv = document.createElement('div');
  const ptr = document.createElement('tr');
  ptr.innerHTML = `<td>Pages ${book.pages}</td>`
  pDiv.appendChild(ptr);
  table.appendChild(pDiv);

  const rDiv = document.createElement('div');
 
  const rtr = document.createElement('a');
  rtr.setAttribute('id', 'check');
  rtr.setAttribute('href', '');
  rtr.setAttribute('onclick', `updateReadStatus(${book.id - 1})`)
  rtr.innerHTML = `${book.read ? "Read" : "Unread"}`
  rDiv.appendChild(rtr);
  table.appendChild(rDiv);


  const dDiv = document.createElement('div');
  const dtr = document.createElement('button');
  dtr.setAttribute('id', 'remove');
  dtr.setAttribute('onclick', `deleteBook(${book.id - 1})`)
  dtr.innerHTML = `Remove`
  dDiv.appendChild(dtr);
  table.appendChild(dDiv);
  
  
}

export {addContent, createTable};

