import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { GET_LISTINGS } from '../utils/queries';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';

function ShowListings() {
    const { error, loading, data } = useQuery(GET_LISTINGS);
    return (
        <div className='store-list'>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading...</p>}

            {data && ( 
                <div className='listings'>
                {data.getListings.map((listing) => (
                <>
                <Routes>
                <Route path={`/${listing._id}`} component={<Product id={listing._id} image={listing.image} title={listing.title} category={listing.category} description={listing.description} quantity={listing.quantity} price={listing.price} />} />
                </Routes>
                    <NavLink to={`/${listing._id}`}>
                <div className="ui card" key={listing._id}>
                    <div className="image">
                        <img src={listing.image} alt={listing.title}></img>
                    </div>
                    <div className="content">
                        <p className="header">{listing.title}</p>
                        <div className="meta">
                            <span className="date">{listing.category}</span>
                        </div>
                        <div className="description">
                            <p>{listing.description}</p>
                            <p>Quantity: {listing.quantity}</p>
                            <p>Price: ${listing.price}</p>
                        </div>
                    </div>
                </div>
                </NavLink>
                </>
            ))}
            </div>
            )}
        </div>
    )
};

export default ShowListings;