// Sample book data (can reuse from explorer.js)
const books = [
  { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", length: "Long" },
  { title: "1984", author: "George Orwell", genre: "Fiction", length: "Medium" },
  { title: "Short Sci-Fi Story", author: "Author X", genre: "Sci-Fi", length: "Short" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", length: "Long" }
];

// Elements
const genreSelect = document.getElementById("genre-select");
const lengthSelect = document.getElementById("length-select");
const pickBtn = document.getElementById("pick-btn");
const saveBtn = document.getElementById("save-btn");
const recTitle = document.getElementById("rec-title");
const recAuthor = document.getElementById("rec-author");

let currentBook = null;

// Pick random book
pickBtn.addEventListener("click", () => {
  const genre = genreSelect.value;
  const length = lengthSelect.value;

  // filter books
  let filtered = books.filter(b => 
    (genre === "" || b.genre === genre) &&
    (length === "" || b.length === length)
  );

  if (filtered.length === 0) {
    recTitle.textContent = "No books found for selected options";
    recAuthor.textContent = "";
    currentBook = null;
    return;
  }

  // pick random
  const randomIndex = Math.floor(Math.random() * filtered.length);
  currentBook = filtered[randomIndex];

  // animation: simple fade
  recTitle.style.opacity = 0;
  recAuthor.style.opacity = 0;

  setTimeout(() => {
    recTitle.textContent = currentBook.title;
    recAuthor.textContent = currentBook.author;
    recTitle.style.opacity = 1;
    recAuthor.style.opacity = 1;
  }, 200);
});

// Save to reading list (localStorage)
saveBtn.addEventListener("click", () => {
  if (!currentBook) return;

  let readingList = JSON.parse(localStorage.getItem("readingList")) || [];
  readingList.push(currentBook);
  localStorage.setItem("readingList", JSON.stringify(readingList));

  alert(`${currentBook.title} saved to your reading list!`);
});
