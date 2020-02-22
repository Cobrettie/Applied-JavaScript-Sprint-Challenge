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

function cardCreator() {
  const mainCardDiv = document.createElement('div');
  mainCardDiv.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = 'headline of article';

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');

  const authorImgContainDiv = document.createElement('div');
  authorImgContainDiv.classList.add('img-container');

  const authorImg = document.createElement('img');
  authorImg.alt = 'url of authors image'; // change to src, then fill in 'url of authors img'

  const authorNameSpan = document.createElement('span');
  authorNameSpan.textContent = 'authors name';

  // append children :)
  mainCardDiv.appendChild(headlineDiv);
  mainCardDiv.appendChild(authorDiv);
  authorDiv.appendChild(authorImgContainDiv);
  authorImgContainDiv.appendChild(authorImg);
  authorDiv.appendChild(authorNameSpan);
}

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })