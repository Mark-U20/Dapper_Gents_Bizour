import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {

    return (
        <header>
        
            <Navbar />

            <NavLink to='/cart'>Cart</NavLink>
            {/* Search Bar */}
            {/* Home link */}
            {/* Wishlist */}


            {/* IDEA: Currency conversion */}
        </header>
    )

}

export default Header;
