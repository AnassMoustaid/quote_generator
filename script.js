var quoteP = document.querySelector(".quote");
var authorSpan = document.querySelector(".author");
var button = document.querySelector(".generator");

var quotes = [];

class Quote {
    constructor(quote, author) {
        this.quote = quote;
        this.author = author;
    }

    addQuote() {
        quoteP.textContent = this.quote;
        authorSpan.textContent = this.author;
        if (this.author == null) {
          authorSpan.textContent = "Unknown";
        }
    }
}


function getData () {
   fetch("https://type.fit/api/quotes")
  .then( function (response) {
    return response.json();
  })
  .then((data)=>{
    quotes = data;
     let newQuote=  quotes[Math.floor(Math.random()*quotes.length)]
     new Quote(newQuote.text, newQuote.author).addQuote();
    console.log(newQuote);
  });
  
}
 
getData();



button.addEventListener("click", getData);
