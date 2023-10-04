function getAllPokemon() {
  const response = fetch(
    "https://api-pokemon-fr.vercel.app/api/v1/pokemon"
  ).then((response) => response.json());
  return response;
}

export { getAllPokemon };
