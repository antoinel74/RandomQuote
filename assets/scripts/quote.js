const container = document.getElementById("quote-container");
const quote = document.createElement("h1");
const imgContainer = document.createElement("figure");
const authorImg = document.createElement("img");
const authorName = document.createElement("figcaption");
const authorTotalQuotes = document.createElement("p");
authorTotalQuotes.classList.add("total-quotes");
const loadBtn = document.createElement("button");
loadBtn.textContent = "randomize quote";

let fetchQuote = async () => {
  try {
    const response = await fetch("https://thatsthespir.it/api");
    if (!response.ok) {
      throw new Error("Network connection failed, try again ?!");
    }
    const data = await response.json();

    quote.innerHTML = "";
    authorImg.src = "";
    authorName.textContent = "";
    authorTotalQuotes.textContent = "";

    quote.innerHTML += data.quote;
    authorImg.src = data.photo;
    authorName.textContent += data.author;
    authorTotalQuotes.textContent += "Famous quotes : " + data.total_quotes;

    container.appendChild(quote);
    imgContainer.appendChild(authorImg);
    container.appendChild(imgContainer);
    container.appendChild(authorName);
    container.appendChild(authorTotalQuotes);
    container.appendChild(loadBtn);
  } catch (error) {
    console.log("Sorry, an error has occured !", error);
  }
};
fetchQuote();

let loadOtherQuote = () => {
  loadBtn.addEventListener("click", fetchQuote);
};

loadOtherQuote();
