import { url } from "./metadata.js";

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");
const addBtn = document.getElementById("addBtn");
const booksDiv = document.getElementById("books");

addBtn.onclick = function () {
  const book = {
    title: titleInput.value,
    author: authorInput.value,
    price: priceInput.value,
    image: imageInput.value,
  };

  fetch(`${url}/books.json`, {
    method: "POST",
    body: JSON.stringify(book),
  }).then(() => {
    titleInput.value = "";
    authorInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    loadBooks();
  });
};

function loadBooks() {
  fetch(`${url}/books.json`)
    .then((res) => res.json())
    .then((data) => {
      booksDiv.innerHTML = "";

      for (let id in data) {
        const book = data[id];

        booksDiv.innerHTML += `
          <div class="card">
            <img src="${book.image}" />
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ₹${book.price}</p>

            <button onclick="updateAuthor('${id}')">Update Author</button>
            <button onclick="deleteBook('${id}')">Delete</button>
            <button onclick="viewDetails('${book.title}','${book.author}','${book.price}','${book.image}')">View</button>
          </div>
        `;
      }
    });
}

loadBooks();

window.updateAuthor = function (id) {
  const newAuthor = prompt("Enter new author name:");
  if (!newAuthor) return;

  fetch(`${url}/books/${id}.json`, {
    method: "PATCH",
    body: JSON.stringify({ author: newAuthor }),
  }).then(loadBooks);
};

window.deleteBook = function (id) {
  fetch(`${url}/books/${id}.json`, {
    method: "DELETE",
  }).then(loadBooks);
};

window.viewDetails = function (title, author, price, image) {
  alert(`Title: ${title}\nAuthor: ${author}\nPrice: ₹${price}`);
};
