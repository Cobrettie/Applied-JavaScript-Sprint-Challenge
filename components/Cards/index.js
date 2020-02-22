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
const tabs = document.querySelectorAll('.tabs .topic .tab');

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    let jsArticles = response.data.articles.javascript;
    jsArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      card.setAttribute('data-articletopic', 'javascript');
      cardsContainer.appendChild(card);
    })

    let bootstrapArticles = response.data.articles.bootstrap;
    bootstrapArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      card.setAttribute('data-articletopic', 'bootstrap');
      cardsContainer.appendChild(card);
    })

    let technologyArticles = response.data.articles.technology;
    technologyArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      card.setAttribute('data-articletopic', 'technology');
      cardsContainer.appendChild(card);
    })

    let jQueryArticles = response.data.articles.jquery;
    jQueryArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      card.setAttribute('data-articletopic', 'jquery');
      cardsContainer.appendChild(card);
    })

    let nodeArticles = response.data.articles.node;
    nodeArticles.forEach(item => {
      let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      card.setAttribute('data-articletopic', 'node.js');
      cardsContainer.appendChild(card);
    })

    console.log(jsArticles);
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })
