function Header() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const headSpan1 = document.createElement('span');
  headSpan1.classList.add('date');
  headSpan1.textContent = 'March 28, 2019';

  const headH1 = document.createElement('h1');
  headH1.textContent = 'Lambda Times';

  const headSpan2 = document.createElement('span');
  headSpan2.classList.add('temp');
  headSpan2.textContent = '98'; // '&#8457' 

  headerDiv.appendChild(headSpan1);
  headerDiv.appendChild(headH1);
  headerDiv.appendChild(headSpan2);

  return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

// console.log(Header());
