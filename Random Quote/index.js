var fQuotes = ["Happiness is when what you think, what you say, and what you do are in harmony. @- Mahatma Gandhi",
 "The only way to get rid of a temptation is to yield to it. @- Oscar Wilde",
"Gentlemen, you can't fight in here! This is the War Room! @- Dr. Strangelove",
"All right, Mr. DeMille, I'm ready for my close-up. @- Sunset Blvd.",
"We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further. @- Richard Dawkins",
"The artist is nothing without the gift, but the gift is nothing without work. @- Emile Zola",
"I think 'Hail to the Chief' has a nice ring to it. @- John F. Kennedy",
"There are no facts, only interpretations. @- Friedrich Nietzsche",
"I find that the harder I work, the more luck I seem to have. @- Thomas Jefferson",
"Human history becomes more and more a race between education and catastrophe. @- H. G. Wells",
"Everybody pities the weak; jealousy you have to earn. @- Arnold Schwarzenegger",
"If you are going through hell, keep going. @- Sir Winston Churchill",
"Problems worthy of attack prove their worth by fighting back. @- Paul Erdos",
"You can't blame gravity for falling in love. @- Albert Einstein",
"Be nice to people on your way up because you meet them on your way down. @- Jimmy Durante",
"I never think of the future - it comes soon enough. @- Albert Einstein",
"We didn't lose the game; we just ran out of time. @- Vince Lombardi",
"Peace cannot be kept by force; it can only be achieved by understanding. @- Albert Einstein",
"We cannot solve our problems with the same thinking we used when we created them. @- Albert Einstein",
"It has become appallingly obvious that our technology has exceeded our humanity. @- Albert Einstein",
"The difference between stupidity and genius is that genius has its limits. @- Albert Einstein",
"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former. @- Albert Einstein",
"There are no facts, only interpretations. @- Friedrich Nietzsche",
"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. @- Buddha",
"Three things cannot be long hidden: the sun, the moon, and the truth. @- Buddha",
"Oh, no, it wasn't the airplanes. It was Beauty killed the Beast. @- King Kong",
"The mind is everything. What you think you become. @- Buddha",
"You will not be punished for your anger, you will be punished by your anger. @- Buddha",
"Of all the gin joints in all the towns in all the world, she walks into mine. @- Casablanca",
"I shall not waste my days in trying to prolong them. @- Ian L. Fleming",
"What we think, we become. @- Buddha",
"Even death is not to be feared by one who has lived wisely. @- Buddha"]; 

function george() {
var georgeString = "";
var fQuote = "";
var georgeAuthor = "";  
var quoteIndex = Math.floor(Math.random() * (quotes.length + 1));
var georgeQuote = quotes[quoteIndex].split('@')[0];
georgeAuthor = quotes[quoteIndex].split('@')[1];
document.getElementById('quote').innerHTML = georgeQuote;
document.getElementById('quote2').innerHTML = georgeAuthor;  
georgeString = [georgeQuote, georgeAuthor];
return georgeString;
}

function updateGeorge() {
var tweetString = "";
var tweetGeorge = "";
var tweetGeorgeAuthor = "";  
var tweetContainer = document.getElementById("tweet-container");
var tweetGeorge = dilbert()[0];
var tweetGeorgeAuthor = george()[1];  
document.getElementById('quote').innerHTML = tweetGeorge;  
tweetContainer.innerHTML = "";
twttr.widgets.createShareButton(
  "https:\/\/dev.twitter.com\/web\/tweet-button",
  tweetContainer,
  {
    size: "large",
    via: "georgemegawe",
    text: tweetDilbert + " ( " + tweetGeorgeAuthor + " )"
  }
);
}

function favourite() {
  var favouriteString = "";
  var Quote = "";
  var favouriteAuthor = "";
  var quoteIndex = Math.floor(Math.random() * (fQuotes.length + 1));
  favouriteQuote = fQuotes[quoteIndex].split('@')[0];
  favouriteAuthor = fQuotes[quoteIndex].split('@')[1];
  document.getElementById('quote').innerHTML = favouriteQuote;
  document.getElementById('quote2').innerHTML = favouriteAuthor;
  favouriteString = [favouriteQuote, favouriteAuthor];
  return favouriteString;
};

function updateFavourite() {
var tweetString = "";
var tweetfavourite = ""; 
var tweetfavouriteAuthor = "";  
var tweetContainer = document.getElementById("tweet-container");
var tweetfavourite = favourite()[0];
var tweetfavouriteAuthor = favourite()[1];   
document.getElementById('quote').innerHTML = tweetfavourite;
tweetContainer.innerHTML = "";
twttr.widgets.createShareButton(
  "https:\/\/dev.twitter.com\/web\/tweet-button",
  tweetContainer,
  {
      size: "large",
      via: "georgemegawe",
      text: tweetfavourite + " (" + tweetfavouriteAuthor + " )"
  }
);
}

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
updateGeorge();
updateFavourite();
    return t;
}(document, "script", "twitter-wjs"));