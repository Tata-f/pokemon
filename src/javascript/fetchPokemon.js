import pokemonCard from '../templates/pokemon.hbs';

const $cardContainer = document.querySelector('.js-card-container');
const $searchForm = document.querySelector('.js-search-form');

$searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const searchQuery = form.elements.query.value

  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(error => {
      console.log(error);
    }).finally(() => form.reset())
}

function fetchPokemon(pokemonId) {
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

  return fetch(url).then(response => {
    return response.json();
  });
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCard(pokemon);
  $cardContainer.innerHTML = markup;
}