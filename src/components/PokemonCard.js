import React from "react";
import styles from "../styles/PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  return (
    <div className={styles.cardModel}>
      <p>
        N ° Pokedex : <b>{pokemon.pokedexId}</b>
      </p>
      <p>
        Nom du Pokemon : <b>{pokemon.name.fr}</b>
      </p>
      <img src={pokemon.sprites.regular} alt={pokemon.name.fr}></img>
    </div>
  );
}

export default PokemonCard;
