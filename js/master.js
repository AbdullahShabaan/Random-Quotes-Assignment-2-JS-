const quoteBtn = document.getElementById("quote-btn");
const quoteContent = document.querySelector(".quote-content");
const quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself everyone else is already taken.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Stephen Chbosky,",
    quote: "We accept the love we think we deserve.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "C.S. Lewis",
    quote:
      "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself",
  },
];

let lastNumber;

function getRandomNumber(max) {
  let number;
  do {
    number = Math.floor(Math.random() * max);
  } while (number === lastNumber);
  lastNumber = number;
  return number;
}
quoteBtn.addEventListener("click", function () {
  let result = quotes[getRandomNumber(quotes.length)];
  let quote = `
  <p>"${result.quote}"<p>
  <p>--${result.author}<p>
  `;
  quoteContent.innerHTML = quote;
});

//  For Test

// setInterval(() => {
//   quoteBtn.click();
//   console.log(quoteContent.innerText);
// }, 400);
