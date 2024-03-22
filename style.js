const url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author  = document.getElementById("author");



const api = async () =>{
    const responce = await fetch(url);
    var data = await responce.json();
    quote.innerText = data.content;
    author.innerText = data.author;
}

api();

const tweet = () =>{
    open("https://twitter.com/intent/tweet?text=" + quote.innerText + "--- by " + author.innerText, "Tweet Window", "width=600, height=300");
}