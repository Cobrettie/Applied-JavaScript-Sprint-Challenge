function tabCreator(topic) {
  const tabDiv = document.createElement('div');
  tabDiv.classList.add('tab');
  tabDiv.textContent = `${topic}`;

  return tabDiv;
}

const topicsElement = document.querySelector('.topics');

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    response.data.topics.forEach(item => {
      let tab = tabCreator(item);
      tab.addEventListener('click', event => {
        tab.setAttribute('data-articletopic', `${item}`);
      })
      topicsElement.appendChild(tab);
    })
    // console.log(response);
  }) 
  .catch(err => {
    console.log(err);
  })