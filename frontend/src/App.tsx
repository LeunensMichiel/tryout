import "antd/dist/antd.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonDetail } from "./pokemons/pokemon.detail";
import { PokemonList } from "./pokemons/pokemon.list";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                    <Route path="/:id" element={<PokemonDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
