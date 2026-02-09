// Target elements
const totalPagesInput = document.getElementById("total-pages");
const pagesReadInput = document.getElementById("pages-read");
const readingSpeedInput = document.getElementById("reading-speed");
const calculateBtn = document.getElementById("calculate-btn");
const percentCompleted = document.getElementById("percent-completed");
const estimatedFinish = document.getElementById("estimated-finish");
const progressBar = document.getElementById("progress-bar");

// Load saved progress if exists
window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("readingProgress"));
  if (saved) {
    totalPagesInput.value = saved.totalPages;
    pagesReadInput.value = saved.pagesRead;
    readingSpeedInput.value = saved.speed;
    updateProgress(saved.totalPages, saved.pagesRead, saved.speed);
  }
});

// Update progress function
function updateProgress(total, read, speed) {
  if (!total || !read || !speed) return;

  const percent = Math.min(Math.round((read / total) * 100), 100);
  const daysLeft = Math.ceil((total - read) / speed);

  percentCompleted.textContent = `Progress: ${percent}%`;
  estimatedFinish.textContent = `Estimated finish: ${daysLeft} day(s)`;

  progressBar.style.width = percent + "%";

  // Save to localStorage
  localStorage.setItem(
    "readingProgress",
    JSON.stringify({ totalPages: total, pagesRead: read, speed })
  );
}

// Event listener for button
calculateBtn.addEventListener("click", () => {
  const total = Number(totalPagesInput.value);
  const read = Number(pagesReadInput.value);
  const speed = Number(readingSpeedInput.value);

  if (!total || !read || !speed || read > total) {
    alert("Please enter valid numbers (Pages read cannot exceed total pages).");
    return;
  }

  updateProgress(total, read, speed);
});
