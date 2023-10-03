import React from "react";
import "./App.css";

import FirstPokemonsDisplay from "./components/FirstPokemonsDisplay";
import FormPokemon from "./components/FormPokemon";
import PokemonResult from "./components/PokemonResult";

function App() {
  const [inputPokemon, setInputPokemon] = React.useState(null);
  const [searchPokemon, setSearchPokemon] = React.useState(null);

  const handleInputPokemon = (e) => {
    e.preventDefault();
    setInputPokemon(() => e.target.value);
    console.log("inputPokemon", inputPokemon);
  };

  return (
    <div className="App">
      <FirstPokemonsDisplay></FirstPokemonsDisplay>
      <FormPokemon
        inputPokemon={inputPokemon}
        handleInputPokemon={handleInputPokemon}
        setSearchPokemon={setSearchPokemon}
      ></FormPokemon>
      <PokemonResult
        searchPokemon={searchPokemon}
        setSearchPokemon={setSearchPokemon}
      ></PokemonResult>
    </div>
  );
}

export default App;
