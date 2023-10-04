import React from "react";
import styles from "../styles/PokemonCard.module.css";

function PokemonCard({ pokemon, selectLang = "fr" }) {
  return (
    <div className={styles.cardModel}>
      <p>
        N ° Pokedex : <b>{pokemon.pokedexId}</b>
      </p>
      <p></p>
      <p>
        Nom du Pokemon avec la langue {selectLang} :{" "}
        <b>{pokemon.name[selectLang]}</b>
      </p>
      <img src={pokemon.sprites.regular} alt={pokemon.name.fr}></img>
    </div>
  );
}

export default PokemonCard;
