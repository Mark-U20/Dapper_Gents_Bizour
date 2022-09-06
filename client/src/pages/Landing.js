import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import StoreCard from '../components/StoreCard';
import { UserContext } from './../utils/UserContext';

import {
  pokemonStore,
  computerStore,
  randomStore,
  constrStores
} from '../components/storeInfo';

function Landing() {
  console.log(useContext(UserContext).userContextValue.getUser);

  return (
    <section className="stores">
      <div className="store-front">
        <NavLink to="/pokemon">
          <StoreCard
            image={pokemonStore.image}
            placeholder={pokemonStore.placeholder}
            store_title={pokemonStore.name}
            synopsis={pokemonStore.synopsis}
          />
        </NavLink>
      </div>
      <div className="store-front">
        <NavLink to="/computer">
          <StoreCard
            image={computerStore.image}
            placeholder={computerStore.placeholder}
            store_title={computerStore.name}
            synopsis={computerStore.synopsis}
          />
        </NavLink>
      </div>
      <div className="store-front">
        <NavLink to="/random">
          <StoreCard
            image={randomStore.image}
            placeholder={randomStore.placeholder}
            store_title={randomStore.name}
            synopsis={randomStore.synopsis}
          />
        </NavLink>
      </div>
      {constrStores.map((store) => {
        return (
          <div className='store-front'>
            <NavLink to='/'>
            <StoreCard 
              image={store.image}
              placeholder={store.placeholder}
              store_title={store.name}
              synopsis={store.synopsis}
            />
            </NavLink>
          </div>
        )
      })}
    </section>
  );
}

export default Landing;
