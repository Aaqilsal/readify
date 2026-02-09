const quotes = [
  "Reading is dreaming with open eyes.",
  "A room without books is like a body without a soul.",
  "So many books, so little time."
];

const quoteText = document.getElementById("quote-text");

let currentIndex = 0;

function showNextQuote() {
  //  Hide current quote
  quoteText.classList.remove("visible");
  quoteText.classList.add("fade");

  //  Wait for the fade-out (500ms) before changing text
  setTimeout(() => {
    quoteText.textContent = quotes[currentIndex];

    // show quote with fade-in
    quoteText.classList.remove("fade");
    quoteText.classList.add("visible");

    // move to next quote
    currentIndex++;
    if (currentIndex >= quotes.length) currentIndex = 0;
  }, 500);
}

// run this every 4 seconds (4000ms)
setInterval(showNextQuote, 4000);




const authors = [
  {
     name: "J.K. Rowling", 
     description: "Author of the Harry Potter series." 
    },
  {
     name: "George Orwell", 
     description: "Author of 1984 and Animal Farm." 
    },
  {
     name: "Jane Austen",
      description: "Famous for Pride and Prejudice." 
    },
  { 
    name: "J.R.R. Tolkien", 
    description: "Author of The Hobbit and The Lord of the Rings." 
  },
  { 
    name: "Suzanne Collins", 
    description: "Author of The Hunger Games series." 
  },
  { 
    name: "Harper Lee", 
    description: "Author of the classic novel To Kill a Mockingbird." 
  },
  { 
    name: "Rick Riordan", 
    description: "Known for the Percy Jackson fantasy series." 
  },
  { 
    name: "John Green", 
    description: "Writes emotional young adult novels." 
  },
  { 
    name: "Frank Herbert", 
    description: "Famous for the science fiction novel Dune." 
  }

];

const authorName = document.getElementById("author-name");
const authorDescription = document.getElementById("author-description");

// get today's day number
const today = new Date();
const dayNumber = today.getDate(); // 1–31

// pick an author using modulo
const authorIndex = dayNumber % authors.length;
const todayAuthor = authors[authorIndex];

// display on page
authorName.textContent = todayAuthor.name;
authorDescription.textContent = todayAuthor.description;


const newsletterInput = document.getElementById("newsletter-email");
const subscribeBtn = document.getElementById("subscribe-btn");
const newsletterMessage = document.getElementById("newsletter-message");

subscribeBtn.addEventListener("click", function() {
  const email = newsletterInput.value.trim();

  // simple validation
  if (email === "") {
    newsletterMessage.textContent = "Please enter your email.";
    newsletterMessage.style.color = "red";
    return;
  }

  // save to localStorage
  localStorage.setItem("newsletterEmail", email);

  // show confirmation
  newsletterMessage.textContent = "Thank you for subscribing!";
  newsletterMessage.style.color = "green";

  // clear input
  newsletterInput.value = "";
});
