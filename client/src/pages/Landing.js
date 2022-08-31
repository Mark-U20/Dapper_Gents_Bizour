import StoreCard from '../components/StoreCard';
import {pokemonStore, computerStore, randomStore} from '../components/storeInfo';




function Landing () {
    return (
        <main>
            <div>
                <StoreCard image_url={pokemonStore.image_url} placeholder={pokemonStore.placeholder} store_title={pokemonStore.name} synopsis={pokemonStore.synopsis} link={<NavLink />}/>
            </div>
            <div>
                <StoreCard image_url={computerStore.image_url} placeholder={computerStore.placeholder} store_title={computerStore.name} synopsis={computerStore.synopsis} link={<NavLink />}/>
            </div>
            <div>
                <StoreCard image_url={randomStore.image_url} placeholder={randomStore.placeholder} store_title={randomStore.name} synopsis={randomStore.synopsis} link={<NavLink />}/>
            </div>
        </main>
    )
}

export default Landing;