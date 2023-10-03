import { getAllPokemon } from "../getAllPokemon";
import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../styles/PokemonResult.module.css";

function PokemonResult({ searchPokemon, setSearchPokemon }) {
  const [results, setResult] = React.useState([]);

  React.useEffect(() => {
    getAllPokemon().then((pokemons) =>
      setResult(
        pokemons.filter((pokemon) =>
          pokemon?.name?.fr
            ?.toLowerCase()
            ?.includes(searchPokemon?.toLowerCase())
        )
      )
    );
  }, [searchPokemon]);

  const noResult = searchPokemon ? (
    <p style={{ color: "red" }}>Aucun résultat</p>
  ) : null;

  return (
    <div>
      {searchPokemon ? <h2>Les résultats</h2> : null}
      <div id={styles.listResult}>
        {results.length
          ? results.map((pokemon) => (
              <PokemonCard key={pokemon} pokemon={pokemon}></PokemonCard>
            ))
          : noResult}
      </div>
    </div>
  );
}

export default PokemonResult;
