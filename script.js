const quoteContainer = document.getElementById("quote-generator");
const quoteText = document.getElementById("quote");
// const quoteContainer = document.getElementById("quote-generator");
// const quoteContainer = document.getElementById("quote-generator");
// const quoteContainer = document.getElementById("quote-generator");
// Global variable "apiQuotes"
let apiQuotes = [];

// Show New Quote
function newQuote() {
  //Pick a random quote from apiQuotes array
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(randomQuote);
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
    // console.log(e, "Error getting quotes");
  }
}
//callin the func on load
getQuotes();
