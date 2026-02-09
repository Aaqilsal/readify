// Sample book data
const books = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    image: "images/harrypotter.jpg",
    synopsis: "A young wizard begins his journey at Hogwarts School of Witchcraft and Wizardry.",
    sequels: ["Chamber of Secrets", "Prisoner of Azkaban"],
    reviews: [
      { rating: 5, review: "Magical and fun!" },
      { rating: 4, review: "Great start to the series." }
    ]
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    image:"images/1984GO.jpg",
    synopsis: "A dystopian story about surveillance and totalitarianism.",
    sequels: [],
    reviews: [
      { rating: 5, review: "Very thought-provoking." },
      { rating: 4, review: "A classic." }
    ]
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    image: "images/PandP.jpeg",
    synopsis: "A story about love and society in 19th century England.",
    sequels: [],
    reviews: [
      { rating: 5, review: "Timeless romance." },
      { rating: 4, review: "Very well written." }
    ]
  } ,
{
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  genre: "Fantasy",
  image: "images/hobbit.jpg",
  synopsis: "A hobbit named Bilbo goes on an unexpected adventure with dwarves to reclaim a treasure.",
  sequels: ["The Lord of the Rings"],
  reviews: [
    { rating: 5, review: "A fun and adventurous story." },
    { rating: 4, review: "Great world building." }
  ]
},
{
  title: "The Hunger Games",
  author: "Suzanne Collins",
  genre: "Sci-Fi",
  image: "images/Hunger.jpg",
  synopsis: "A girl is forced to compete in a deadly televised competition in a dystopian future.",
  sequels: ["Catching Fire", "Mockingjay"],
  reviews: [
    { rating: 5, review: "Very exciting and intense." },
    { rating: 4, review: "Hard to put down." }
  ]
},
{
  title: "Dune",
  author: "Frank Herbert",
  genre: "Sci-Fi",
  image: "images/Dune.webp",
  synopsis: "A noble family becomes involved in a dangerous struggle over a desert planet.",
  sequels: ["Dune Messiah", "Children of Dune"],
  reviews: [
    { rating: 5, review: "Deep and complex." },
    { rating: 4, review: "Classic sci-fi." }
  ]
}

];



const bookCardsContainer = document.getElementById("book-cards");

function displayBooks(bookList) {
  // clear container
  bookCardsContainer.innerHTML = "";

  // create card for each book
  bookList.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

   card.innerHTML = `
  <img src="${book.image}" alt="${book.title} cover">
  <h3>${book.title}</h3>
  <p><em>${book.author}</em></p>
`;


    // open modal on click
    card.addEventListener("click", () => showModal(book));

    bookCardsContainer.appendChild(card);
  });
}

// show all books initially
displayBooks(books);


const modalImage = document.getElementById("modal-image")
const modal = document.getElementById("book-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalSequels = document.getElementById("modal-sequels");
const modalReviews = document.getElementById("modal-reviews");

function showModal(book) {
  modalImage.src = book.image;
  modalTitle.textContent = book.title;
  modalSynopsis.textContent = book.synopsis;

  // sequels
  modalSequels.innerHTML = "";
  book.sequels.forEach(seq => {
    const li = document.createElement("li");
    li.textContent = seq;
    modalSequels.appendChild(li);
  });

  // reviews
  modalReviews.innerHTML = "<tr><th>Rating</th><th>Review</th></tr>";
  book.reviews.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.rating}</td><td>${r.review}</td>`;
    modalReviews.appendChild(tr);
  });

  modal.style.display = "block";
}

// close modal
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// close modal if click outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});




const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");

searchInput.addEventListener("input", filterBooks);
genreFilter.addEventListener("change", filterBooks);


function filterBooks() {
  const searchText = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  const filtered = books.filter(book => {
    const matchesTitle = book.title.toLowerCase().includes(searchText);
    const matchesAuthor = book.author.toLowerCase().includes(searchText);
    const matchesGenre = selectedGenre === "" || book.genre === selectedGenre;

    return (matchesTitle || matchesAuthor) && matchesGenre;
  });

  displayBooks(filtered);
}
