let quoteText = document.getElementsByTagName('h1')[0];
let author = document.getElementsByTagName('p')[0];
let next = document.getElementsByTagName('button')[1];
let previous = document.getElementsByTagName('button')[0];

// let savedQuote = '';


window.onload = randomQuote();

async function randomQuote(){

    //Save the previous quote in a local storage
    sessionStorage.setItem('quote', quoteText.textContent);
    sessionStorage.setItem('author',author.textContent);


    //Query the API for a new quote
    let url = 'https://api.quotable.io/random';
    let response = await fetch(url);
    let quoteContent = await response.json();
   
   //Write the new quote to Html
    quoteText.textContent = quoteContent.content;
    author.innerHTML = '-' + quoteContent.author;
    
}

function getQuote(){
    //Write the previous quote to HTML
    quoteText.innerHTML = sessionStorage.getItem('quote');
    author.innerHTML = sessionStorage.getItem('author');
}

next.addEventListener('click', randomQuote);
previous.addEventListener('click', getQuote);