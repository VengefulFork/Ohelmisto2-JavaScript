'use strict';

const searchForm = document.getElementById('target');
const div = document.getElementById('results');

searchForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const searchParam = document.querySelector('input[name=s]').value;
  div.innerHTML = '';
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchParam}`);
    const json = await response.json();
    for (let a of json) {
      console.log('Name of show :' + a['show']['name']);
    }
    for (let b of json) {
      const article = document.createElement('article');
      const title = document.createElement('h2');
      title.textContent = b['show']['name'];
      article.appendChild(title);
      const link = document.createElement('a');
      link.text = b['show']['name'];
      link.href = b['show']['url'];
      link.setAttribute('target', '_blank');
      article.appendChild(link);
      const img = document.createElement('img');
      img.src = b.show.image?.medium;
      img.alt = b['show']['name'];
      article.appendChild(img);
      const summary = document.createElement('div');
      summary.innerHTML = b['show']['summary'];
      article.appendChild(summary);

      div.appendChild(article);
    }

  } catch (error) {
    console.log(error.message);
  }
});
