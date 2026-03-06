import PokemonCard from './components/PokemonCard';
import { Pokemon } from './types';

interface AppProps {
    pokemonData: Pokemon;
}

export default function App({ pokemonData }: AppProps) {
    return (
        <div className="app-container">
            <h1>PokéAPI Prop Demo</h1>
            <PokemonCard pokemon={pokemonData} />
        </div>
    );
}
