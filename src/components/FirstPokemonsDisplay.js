import React, { useEffect } from "react";
import { getAllPokemon } from "../getAllPokemon";
import PokemonCard from "./PokemonCard";

function FirstPokemonsDisplay() {
  const [firstPokemons, setFirstPokemons] = React.useState([]);
  const MAX_POKEMONS_DISPLAY = 5;

  useEffect(() => {
    getAllPokemon().then((pokemons) => setFirstPokemons(pokemons));
    console.dir(firstPokemons);
  }, []);
  return (
    <div>
      <h1>Liste des {MAX_POKEMONS_DISPLAY - 1} premiers pokemon</h1>
      {firstPokemons
        ? firstPokemons
            .filter(
              (pokemon) =>
                pokemon.pokedexId < MAX_POKEMONS_DISPLAY &&
                pokemon.pokedexId !== 0
            )
            .map((pokemon) => (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.pokedexId}
              ></PokemonCard>
            ))
        : null}
    </div>
  );
}

export default FirstPokemonsDisplay;
