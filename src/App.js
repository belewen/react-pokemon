import React, { useState } from "react";
import "./App.css";

import FirstPokemonsDisplay from "./components/FirstPokemonsDisplay";
import FormPokemon from "./components/FormPokemon";
import PokemonResult from "./components/PokemonResult";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const [inputPokemon, setInputPokemon] = React.useState(null);
  const [searchPokemon, setSearchPokemon] = React.useState(null);
  const [selectLang, setSelectLang] = useState("fr");

  const handleInputPokemon = (e) => {
    e.preventDefault();
    setInputPokemon(() => e.target.value);
    console.log("inputPokemon", inputPokemon);
  };

  return (
    <div className="App">
      <FormPokemon
        inputPokemon={inputPokemon}
        handleInputPokemon={handleInputPokemon}
        setSearchPokemon={setSearchPokemon}
        setSelectLang={setSelectLang}
        selectLang={selectLang}
      ></FormPokemon>
      <ErrorBoundary ErrorDisplay={ErrorDisplay}>
        <PokemonResult
          searchPokemon={searchPokemon}
          setSearchPokemon={setSearchPokemon}
          selectLang={selectLang}
        ></PokemonResult>
      </ErrorBoundary>
      <FirstPokemonsDisplay></FirstPokemonsDisplay>
    </div>
  );
}

export default App;
