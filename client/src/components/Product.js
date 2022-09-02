import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_LISTING } from "../utils/queries";

const Product = () => {
   
    const { id } = useParams();
    const {error, loading, data} = useQuery(GET_LISTING, {variables: { listingID: id}});

    return (
        <>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading...</p>}

            {data && (
                <div>
                    {   
                            ( 
                            <>
                                <h2>{data.getListing.title}</h2>
                                <img src={data.getListing.image} alt={data.getListing.title} />
                                <p>{data.getListing.description}</p>
                                <p>{data.getListing.quantity}</p>
                                <p>{data.getListing.price}</p>
                                <p>{data.getListing.listing_author.email}</p>
                                {/* <ProductReviews /> */}
                            </>
                            
                            )
                        
                    }
                </div>
            )}

        </>
    )
}

export default Product;