export const fakeQuoteFetch = () => {
    const quotes = [
      { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { content: "Two things are infinite: the universe and human stupidity; and I'm not sure about", author: "Albert Einstein" },
      { content: "So many books, so little time.", author: "Frank Zappa" },
      { content: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
      { content: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" }
    ];
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(quotes); // Returning the entire array
      }, 1000);
    });
  };
  