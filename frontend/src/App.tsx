import 'antd/dist/antd.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonDetail } from './pokemons';
import { PokemonList } from './pokemons';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
