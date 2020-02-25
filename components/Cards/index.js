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
    const articles = response.data.articles;

    const jsArticles = articles.javascript;
    jsArticles.forEach(item => {
      const card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })

    const bootstrapArticles = articles.bootstrap;
    bootstrapArticles.forEach(item => {
      const card = cardCreator(item.headline, item.authorPhoto, item.authorName)
      cardsContainer.appendChild(card);
    })

    const technologyArticles = articles.technology;
    technologyArticles.forEach(item => {
      const card = cardCreator(item.headline, item.authorPhoto, item.authorName)
      cardsContainer.appendChild(card);
    })

    const jQueryArticles = articles.jquery;
    jQueryArticles.forEach(item => {
      const card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })

    const nodeArticles = articles.node;
    nodeArticles.forEach(item => {
      const card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      cardsContainer.appendChild(card);
    })
    
    console.log(response);
    console.log(jsArticles);
    console.log(articles);
  })
  .catch(err => {
    console.log(err);
  })

  // key,value
  // access object inside of an array






    // let jsArticles = response.data.articles.javascript;
    // jsArticles.forEach(item => {
    //   let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
    //   cardsContainer.appendChild(card);
    // })

    // let bootstrapArticles = response.data.articles.bootstrap;
    // bootstrapArticles.forEach(item => {
    //   let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
    //   // card.setAttribute('data-articletopic', 'bootstrap');
    //   cardsContainer.appendChild(card);
    // })

    // let technologyArticles = response.data.articles.technology;
    // technologyArticles.forEach(item => {
    //   let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
    //   // card.setAttribute('data-articletopic', 'technology');
    //   cardsContainer.appendChild(card);
    // })

    // let jQueryArticles = response.data.articles.jquery;
    // jQueryArticles.forEach(item => {
    //   let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
    //   // card.setAttribute('data-articletopic', 'jquery');
    //   cardsContainer.appendChild(card);
    // })

    // let nodeArticles = response.data.articles.node;
    // nodeArticles.forEach(item => {
    //   let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
    //   // card.setAttribute('data-articletopic', 'node.js');
    //   cardsContainer.appendChild(card);
    // })

    // let arr = response.data.articles[i]
    // for (let i = 0; i < arr.length; i++) {
      // let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
      // card.setAttribute('data-articletopic', 'javascript');
      // cardsContainer.appendChild(card);
    // }
