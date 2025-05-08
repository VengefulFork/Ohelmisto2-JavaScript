'use strict';

const searchForm = document.getElementById('target');

searchForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const searchParam = document.querySelector('input[name=s]').value;
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchParam}`);
    const json = await response.json();

    // this one logs all the search results to the console
    for (let a of json) {
      console.log(a);
    }
    // This one logs just the names of the shows from the search results not sure what the assignment actually wanted so here's both
    for(let a of json) {
      console.log("Name of show :" + a['show']['name'])}
  } catch (error) {
    console.log(error.message);
  }
});