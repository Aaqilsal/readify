// Cozy sounds
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const audio = document.getElementById("sound-audio");

// Function to safely play audio
function safePlay() {
  audio.play().catch(err => {
    // Ignore AbortError caused by rapid clicks
    if (err.name !== "AbortError") {
      console.error("Audio play failed:", err);
    }
  });
}

// Play button
playBtn.addEventListener("click", () => {
  safePlay();
});

// Pause button
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// Completed books
const addBookBtn = document.getElementById("add-book-btn");
const bookInput = document.getElementById("book-name");
const booksList = document.getElementById("books-list");

// Load saved books
window.addEventListener("load", () => {
  const savedBooks = JSON.parse(localStorage.getItem("completedBooks")) || [];
  savedBooks.forEach(book => addBookToDOM(book));
});

// Add book
addBookBtn.addEventListener("click", () => {
  const bookName = bookInput.value.trim();
  if (!bookName) return;

  addBookToDOM(bookName);

  // Save to localStorage
  const savedBooks = JSON.parse(localStorage.getItem("completedBooks")) || [];
  savedBooks.push(bookName);
  localStorage.setItem("completedBooks", JSON.stringify(savedBooks));

  bookInput.value = "";
});

// Helper: add book to DOM
function addBookToDOM(name) {
  const li = document.createElement("li");
  li.textContent = name;
  booksList.appendChild(li);
}
