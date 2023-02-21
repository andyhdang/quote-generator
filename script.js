//Step 3: get elements by ID
const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')
const newQuoteBtn = document.getElementById('new-quote')
const twitterBtn = document.getElementById('twitter')
const copyBtn = document.getElementById('copy-quote')
const copiedBtn = document.getElementById('copied-quote')


let apiQuotes = [];

//Step 2: show new quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
    copyBtn.style.display = "inline";
    copiedBtn.style.display = "none";
}

// Step 1: get quotes from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        newQuote();

    } catch (error) {

    }

}

//tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}

//copy to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(`${quoteText.textContent} - ${quoteAuthor.textContent}`);
    copyBtn.style.display = "none";
    copiedBtn.style.display = "inline";
    // alert('Quote copied!');
}

//Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
copyBtn.addEventListener('click', copyToClipboard);



getQuotes();
