import React from "react";
import styles from "../styles/FormPokemon.module.css";
import PokemonResult from "./PokemonResult";

function FormPokemon({
  inputPokemon,
  handleInputPokemon,
  setSearchPokemon,
  setSelectLang,
  selectLang,
}) {
  const formSubmit = (e) => {
    e.preventDefault();
    setSearchPokemon(inputPokemon);
  };

  const refLang = React.useRef(null);

  const handleChange = (event) => {
    setSelectLang(event.target.value);
  };

  return (
    <div>
      <h1>Chercher des pokemon par nom</h1>
      <form className={styles.form} onSubmit={formSubmit}>
        <label htmlFor="langSelection">
          Sélection de la langue de recherche
        </label>
        <select name="langSelection" value={selectLang} onChange={handleChange}>
          <option value={"fr"}>français</option>
          <option value={"en"}>anglais</option>
          <option value={"jp"}>japonais</option>
        </select>
        <label htmlFor="pokemon"> Nom du Pokemon</label>
        <input
          placeholder="Saisir le nom d'un pokemon"
          onChange={handleInputPokemon}
          required
        />
        <input type="submit" value={"CHERCHER"} />
      </form>
    </div>
  );
}

export default FormPokemon;
