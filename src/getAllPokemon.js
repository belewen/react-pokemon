async function getAllPokemon() {
  const response = await fetch(
    "https://api-pokemon-fr.vercel.app/api/v1/pokemon"
  ).then((response) => response.json());
  return response;
}

export { getAllPokemon };
