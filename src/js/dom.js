function addContent() {
  const container = document.getElementById('container');
  

  const addBook = document.createElement('div');
  addBook.classList.add('addBook');
  container.appendChild(addBook);

  const form = document.createElement('form')
  container.appendChild(form)
  

  const titleDiv = document.createElement('div')
  titleDiv.innerHTML = '<h3>Title</h3>' 
  const title = document.createElement('input');
  title.setAttribute('id', 'title');
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Title");
  titleDiv.appendChild(title);
  form.appendChild(titleDiv);


  const authorDiv = document.createElement('div')
  authorDiv.innerHTML = '<h3>Author</h3>'
  const author = document.createElement('input');
  author.setAttribute('id', 'auther');
  author.setAttribute("type", "text");
  author.setAttribute("placeholder", "Auther");
  authorDiv.appendChild(author);
  form.appendChild(authorDiv);


  const pagesDiv = document.createElement('div')
  pagesDiv.innerHTML = '<h3>pages</h3>'
  const pages = document.createElement('input');
  pages.setAttribute('id', 'pages');
  pages.setAttribute("type", "number");
  pages.setAttribute("placeholder", "Pages");
  pagesDiv.appendChild(pages);
  form.appendChild(pagesDiv);


  const readkDiv = document.createElement('div');
  readkDiv.innerHTML = `<h4>Read</h4>`
  const read = document.createElement('input');
  read.setAttribute('id', 'read');
  read.setAttribute('type', 'checkbox');
  readkDiv.appendChild(read);
  form.appendChild(readkDiv);


  const submitDiv = document.createElement('div');
  const submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "New Book";
  submitDiv.appendChild(submit);
  form.appendChild(submitDiv);


return addBook;
}

function createTable() {
  const contenr = document.getElementById('container');

  const table = document.createElement('table');
  table.classList.add('table');
  container.appendChild(table);
}

export {addContent};