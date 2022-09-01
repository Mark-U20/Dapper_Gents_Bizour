import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Search from './SearchBar'

function Header() {

    return (
        <header>
        
            <Navbar />
            <Search />

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            {/* Search Bar */}
            {/* Home link */}
            {/* Wishlist */}


            {/* IDEA: Currency conversion */}
        </header>
    )

}

export default Header;
