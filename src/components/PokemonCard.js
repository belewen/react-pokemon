import React from "react";
import styles from "../styles/PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  return (
    <div className={styles.cardModel}>
      <p>
        N ° Pokedex : <span>{pokemon.pokedexId}</span>
      </p>
      <p>
        Nom du Pokemon : <span>{pokemon.name.fr}</span>
      </p>
      <img src={pokemon.sprites.regular} alt={pokemon.name.fr}></img>
    </div>
  );
}

export default PokemonCard;
