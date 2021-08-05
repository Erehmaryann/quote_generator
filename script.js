const quoteContainer = document.getElementById("quote-generator");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Global variable "apiQuotes"
let apiQuotes = [];

// Show loading animation
function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading animation
function hideLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show New Quote
function newQuote() {
  showLoader();
  //Pick a random quote from apiQuotes array
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Set the quote text, hide loader
  quoteText.textContent = randomQuote.text;
  hideLoader();
  //check if author field is blank and replace with "Unknown"
  if (!randomQuote.author) {
    authorText.textContent = "Unknown";
  } else {
    // Set the author text
    authorText.textContent = randomQuote.author;
  }
  //check quote length to determine styling
  if (randomQuote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
}

// Get Quotes fron API
async function getQuotes() {
  showLoader();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (e) {
    //Catch error here
  }
}
//calling the func on load
getQuotes();

// Tweet Quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweetUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
