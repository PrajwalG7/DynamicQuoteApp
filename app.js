const api = "https://type.fit/api/quotes";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const tweetMe = document.getElementById("tweetMe");

let realData = "";
let unKnown = "unKnown";
let quotesData = "";
let tweetPost = "";

const tweetNow = () => {
  if (quotesData.text == undefined && quotesData.author == undefined) {
    alert("Please select a quote to be tweeted!");
    return false;
  } else {
    tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
  }
  window.open(tweetPost);
};

const getNewQuotes = () => {
  let randomNum = Math.floor(Math.random() * 1644);
  quotesData = realData[randomNum];
  quotes.innerText = `${quotesData.text}`;
  if (quotesData.author == null) {
    author.innerText = unKnown;
  } else {
    author.innerText = `~ ${quotesData.author}`;
  }
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (error) {
    console.log(error);
  }
};
