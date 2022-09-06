import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { GET_LISTINGS } from '../utils/queries';
import { GET_USER_LISTINGS } from '../utils/queries';

function ShowListings() {
    // const { error, loading, data } = useQuery(GET_LISTINGS);
    const { error, loading, data } = useQuery(GET_USER_LISTINGS, {
        // This ID is for justyn@bizour.com
        variables: {userId: "631763fc8735ff3fd5a92422"}
    });
    return (
        <div className='store-list'>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading...</p>}

            {data && (
                <div className='listings'>
                    {data.getUserListings.listings.map((listing) => (
                        <>
                            <NavLink to={`/products/${listing._id}`}>
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