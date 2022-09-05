import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import StoreCard from '../components/StoreCard';
import { UserContext } from './../utils/UserContext';

import {
  pokemonStore,
  computerStore,
  randomStore,
} from '../components/storeInfo';

function Landing() {
  console.log(useContext(UserContext));
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
    </section>
  );
}

export default Landing;
