import { useQuery } from '@apollo/client';
import { GET_LISTINGS } from '../utils/queries';

function ShowListings() {
    const { error, loading, data } = useQuery(GET_LISTINGS);
    return (
        <div>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading...</p>}

            {data && ( 
                <div className='listings'>
                {data.getListings.map((listing) => (
                <div className="ui card" key={listing._id}>
                    <div className="image">
                        <img src={listing.image_url}></img>
                    </div>
                    <div className="content">
                        <a className="header">{listing.item_name}</a>
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
            ))}
            </div>
            )}
        </div>
    )
};

export default ShowListings;