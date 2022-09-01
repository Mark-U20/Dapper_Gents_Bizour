import {NavLink} from 'react-router-dom';
import StoreCard from '../components/StoreCard';
import {pokemonStore, computerStore, randomStore} from '../components/storeInfo';

function Landing () {
    return (
        <section>
            <div className='store-front'>
            <NavLink to="/pokemon"><StoreCard image_url={pokemonStore.image_url} placeholder={pokemonStore.placeholder} store_title={pokemonStore.name} synopsis={pokemonStore.synopsis} /></NavLink>
            </div>
            <div className='store-front'>
            <NavLink to="/computer"><StoreCard image_url={computerStore.image_url} placeholder={computerStore.placeholder} store_title={computerStore.name} synopsis={computerStore.synopsis} /></NavLink>
            </div>
            <div className='store-front'>
            <NavLink to="/random"><StoreCard image_url={randomStore.image_url} placeholder={randomStore.placeholder} store_title={randomStore.name} synopsis={randomStore.synopsis} /></NavLink>
            </div>
        </section>
    )
}

export default Landing;

