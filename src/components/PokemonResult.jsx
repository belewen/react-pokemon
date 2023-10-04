import { getAllPokemon } from "../getAllPokemon";
import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../styles/PokemonResult.module.css";

function PokemonResult({ searchPokemon, setSearchPokemon, selectLang }) {
  const [results, setResult] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getAllPokemon().then((pokemons) => {
      setResult(
        pokemons.filter((pokemon) =>
          pokemon.name[selectLang]
            .toLowerCase()
            .includes(searchPokemon?.toLowerCase())
        )
      );
    });
  }, [searchPokemon]);

  //Lève une erreur  si aucun pokemon n'est trouvé après recherche
  React.useEffect(() => {
    if (searchPokemon !== null && results.length === 0) {
      setError(true);
    }
  });

  return (
    <div>
      {searchPokemon ? <h2>Les résultats</h2> : null}
      <div id={styles.listResult}>
        {results.map((pokemon) => (
          <PokemonCard
            key={pokemon}
            pokemon={pokemon}
            selectLang={selectLang}
          ></PokemonCard>
        ))}
      </div>
    </div>
  );
}

export default PokemonResult;
