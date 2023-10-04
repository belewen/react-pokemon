import { getAllPokemon } from "../getAllPokemon";
import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../styles/PokemonResult.module.css";

function PokemonResult({ pokemonName, setPokemonName, selectLang }) {
  const [results, setResult] = React.useState([]);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getAllPokemon().then((pokemons) => {
      const pokemonsList = pokemons.filter((pokemon) =>
        pokemon.name[selectLang]
          .toLowerCase()
          .includes(pokemonName?.toLowerCase())
      );
      if (pokemonsList.length === 0 && pokemonName !== null) {
        setError(() => true);
      }
      if (pokemonsList.length > 0) {
        setResult([...pokemonsList]);
      }
    });
  }, [pokemonName, selectLang]);

  React.useEffect(() => {
    if (error) {
      throw new Error("Pas de pokemon trouvé");
    }
  }, [error]);

  return (
    <div>
      {pokemonName ? <h2>Les résultats</h2> : null}
      <div id={styles.listResult}>
        {results.map((pokemon) => (
          <PokemonCard
            key={pokemon.pokedexId}
            pokemon={pokemon}
            selectLang={selectLang}
          ></PokemonCard>
        ))}
      </div>
    </div>
  );
}

export default PokemonResult;
