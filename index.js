const randomQuote = document.querySelector('.random-quote');
const randomQuoteAuthor = document.querySelector('.random-quote-author');
const randomQuoteButton = document.querySelector('.random-quote-button');

// quoteStorage
const quotes = {
    allQuotes: [],
    addQuote(quote, author) {
        this.allQuotes.push({quote, author});
    },
    getRandomQuote() {
        return this.allQuotes[Math.floor(Math.random() * this.allQuotes.length)];
    },
    deleteQuote(quoteToRemove) {
        this.allQuotes = this.allQuotes.filter(quote => quote.quote !== quoteToRemove);
    }
};


// Populate quotes.
const addDefaultQuotes = () => {
    if (quotes.allQuotes.length < 1 ) {
        quotes.addQuote("The Best Way To Get Started Is To Quit Talking And Begin Doing.", "Walt Disney");
        quotes.addQuote("The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "Winston Churchill");
        quotes.addQuote("Don’t Let Yesterday Take Up Too Much Of Today.", "Will Rogers");
        quotes.addQuote("People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "Rob Siltanen");
        quotes.addQuote("It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.", "Vince Lombardi");
    }
}

const getRandomQuote = () => {
    const newRandomQuote = quotes.getRandomQuote();
    randomQuote.innerHTML = newRandomQuote.quote;
    randomQuoteAuthor.innerHTML = newRandomQuote.author;
}
randomQuoteButton.addEventListener('click', getRandomQuote);


addDefaultQuotes();
getRandomQuote();