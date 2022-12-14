import ShowPokemonListings from '../../components/ShowPokemonListings'
import pageLogo from '../../images/justynsPokemonCards.png'
import { Routes, Route } from 'react-router-dom';
import './style.css';
function Pokemon() {


    return (
        <div>
            <div className='pokemon-header'>
                <img src={pageLogo} className="page-logo" />
                <p>A curated shop of all the raddest of Pokemon cards? Gotta catch em' all? Then start here!</p>
            </div>

            <ShowPokemonListings />

        </div>
    )
}

export default Pokemon;