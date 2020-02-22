// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(headline, authorPhoto, authorName) {
  const mainCardDiv = document.createElement('div');
  mainCardDiv.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = `${headline}`;

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');

  const authorImgContainDiv = document.createElement('div');
  authorImgContainDiv.classList.add('img-container');

  const authorImg = document.createElement('img');
  authorImg.src = `${authorPhoto}`;

  const authorNameSpan = document.createElement('span');
  authorNameSpan.textContent = `${authorName}`;

  // append children :)
  mainCardDiv.appendChild(headlineDiv);
  mainCardDiv.appendChild(authorDiv);
  authorDiv.appendChild(authorImgContainDiv);
  authorImgContainDiv.appendChild(authorImg);
  authorDiv.appendChild(authorNameSpan);

  return mainCardDiv;
}

const cardsContainer = document.querySelector('.cards-container');

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    let jsArticles = response.data.articles.javascript;
    jsArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })

    let bootstrapArticles = response.data.articles.bootstrap;
    bootstrapArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })

    let technologyArticles = response.data.articles.technology;
    technologyArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })

    let jQueryArticles = response.data.articles.jquery;
    jQueryArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })

    let nodeArticles = response.data.articles.node;
    nodeArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })

    console.log(jsArticles);
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })