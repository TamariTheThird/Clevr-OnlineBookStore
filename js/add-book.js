// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//   alert('welcome');
// }

let allBooks = [];
let i = 19;

const addBook = (e) => {
  e.preventDefault(); //to stop the form submitting

  let book = {
    id: i++,
    dateAdded: Date.now(),
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    category: document.getElementById('category').value,
    publisher: document.getElementById('publisher').value,
    year: document.getElementById('year').value,
    price: document.getElementById('price').value,
    discount: document.getElementById('discount').value,
    // bestseller: document.getElementById('bestseller').value,
    rating: document.getElementById('raiting').value,
    format: document.getElementById('format').value,
    reviews: document.getElementById('reviews').value,
    isbn: Math.floor(Math.random() * 10000000000 + 1),
    pages: document.getElementById('pages').value,
    language: document.getElementById('language').value,
    totalAmount: document.getElementById('total-amount').value,
    soldOut: document.getElementById('sold-out').value,
    image: document.getElementById('img').value,
  };
  allBooks.push(book);

  //for display purposes only
  console.warn('added', { allBooks });
  let pre = document.querySelector('.all pre');
  pre.textContent = '\n' + JSON.stringify(allBooks, '\t', 2);

  //saving to localStorage
  localStorage.setItem('BookList', JSON.stringify(allBooks));
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addBook);
});

document.getElementById('btn-reset').addEventListener('click', function () {
  document.querySelector('form').reset();
});
