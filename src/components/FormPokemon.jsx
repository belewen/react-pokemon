import React from "react";
import styles from "../styles/FormPokemon.module.css";
import PokemonResult from "./PokemonResult";

function FormPokemon({ inputPokemon, handleInputPokemon }) {
  const [searchPokemon, setSearchPokemon] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPokemon(inputPokemon);
  };

  return (
    <div>
      <h1>Chercher des pokemon par nom</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="pokemon"> Nom du Pokemon</label>
        <input
          placeholder="Saisir le nom d'un pokemon"
          onChange={handleInputPokemon}
          required
        />
        <input type="submit" value={"CHERCHER"} />
      </form>

      <PokemonResult searchPokemon={searchPokemon}></PokemonResult>
    </div>
  );
}

export default FormPokemon;