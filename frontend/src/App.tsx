import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonDetail } from './pokemons';
import { PokemonList } from './pokemons';
import { PokemonCreate } from './pokemons';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/create" element={<PokemonCreate />} />
        <Route path="/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
