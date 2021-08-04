const quoteContainer = document.getElementById("quote-generator");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
// Global variable "apiQuotes"
let apiQuotes = [];

// Show New Quote
function newQuote() {
  //Pick a random quote from apiQuotes array
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Set the quote text
  quoteText.textContent = randomQuote.text;
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
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (e) {
    //Catch error here
  }
}
//callin the func on load
getQuotes();

// Tweet Quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweetUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
// twitterBtn.addEventListener("click", tweetQuote);
