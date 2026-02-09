const form = document.getElementById("feedback-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    messageBox.textContent = "Please fill in all fields.";
    messageBox.style.color = "red";
    return;
  }

  const feedback = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
  feedbackList.push(feedback);
  localStorage.setItem("feedback", JSON.stringify(feedbackList));

  messageBox.textContent = "Thank you for your feedback!";
  messageBox.style.color = "green";

  form.reset();
});

// FAQ accordion
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("show");
  });
});

