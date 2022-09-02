import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_LISTING } from "../../utils/queries";
import './style.css'

const Product = () => {

    const { id } = useParams();
    const { error, loading, data } = useQuery(GET_LISTING, { variables: { listingID: id } });

    return (
        <div className='product'>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading...</p>}

            {data && (

                    <div className='ui card'>
                        <div className='image'>
                            <img src={data.getListing.image} alt={data.getListing.title} />
                        </div>
                        <div className='content'>
                            <h1 className='header'>{data.getListing.title}</h1>
                        </div>
                        <div className="meta">
                            <span className="date">{data.getListing.category}</span>
                        </div>
                        <div className='description'>
                            <p>{data.getListing.description}</p>
                            <p>Quantity: {data.getListing.quantity}</p>
                            <p>Price: ${data.getListing.price}</p>
                            <p>Seller: {data.getListing.listing_author.email}</p>
                        </div>
                        {/* <ProductReviews /> */}
                        <button className="ui primary button">Add to Cart</button>
                    </div>
            )}
        </div>
    )
}

export default Product;