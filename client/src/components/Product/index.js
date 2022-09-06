import { useState, useEffect, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_LISTING } from '../../utils/queries';
import { ADD_TO_CART } from '../../utils/mutations';
import AuthService from '../../utils/auth';
<<<<<<< HEAD
import { saveItemIds, getCartItemIds } from '../../utils/localStorage';
import { UserContext } from '../../utils/UserContext';
import './style.css';
=======
import {saveItemIds, getCartItemIds} from '../../utils/localStorage';
import {motion} from 'framer-motion';
import './style.css'
>>>>>>> 8107491b8d2259a4102f59d562bca42eb1ca2ac9

const Product = () => {
  const [savedItemIds, setSavedItemIds] = useState(getCartItemIds());
  const { userContextValue, setUserContextValue } = useContext(UserContext);
  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_LISTING, {
    variables: { listingId: id },
  });

  const [saveToCart] = useMutation(ADD_TO_CART);

  useEffect(() => {
    console.log(savedItemIds);
    return () => saveItemIds(savedItemIds);
  });

  const handleCartSave = async (prodID) => {
    console.log('handinlg cart save');
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;

    if (!token) {
      return false;
    }

<<<<<<< HEAD
    console.log(data.getListing.title);
    console.log(prodID);
=======
    return (
        <motion.div className='product'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {error && <p className="error">{error.message}</p>}
>>>>>>> 8107491b8d2259a4102f59d562bca42eb1ca2ac9

    //adds shopping cart item to database
    const shoppingCart = await saveToCart({
      variables: { listingId: data.getListing._id },
    });
    //update the user context with previous shopping cart items and the new one
    console.log('shoppingCart' + shoppingCart);
    setUserContextValue({
      shoppingCart: [shoppingCart.data.addToCart],
    });

    console.log(shoppingCart);
    setSavedItemIds([...savedItemIds, prodID]);
  };

<<<<<<< HEAD
  return (
    <div className="product">
      {error && <p className="error">{error.message}</p>}

      {loading && <p>Loading...</p>}

      {data && (
        <div className="ui card">
          <div className="image">
            <img src={data.getListing.image} alt={data.getListing.title} />
          </div>
          <div className="content">
            <h1 className="header">{data.getListing.title}</h1>
          </div>
          <div className="meta">
            <span className="date">{data.getListing.category}</span>
          </div>
          <div className="description">
            <p>{data.getListing.description}</p>
            <p>Quantity: {data.getListing.quantity}</p>
            <p>Price: ${data.getListing.price}</p>
            <p>Seller: {data.getListing.listing_author.email}</p>
          </div>
          {/* <ProductReviews /> */}
          <button
            className="ui primary button"
            onClick={() => handleCartSave(data.getListing._id)}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};
=======
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
                        <button className="ui primary button" onClick={() => handleCartSave(data.getListing._id)}>Add to Cart</button>
                    </div>
            )}
        </motion.div>
    )
}
>>>>>>> 8107491b8d2259a4102f59d562bca42eb1ca2ac9

export default Product;
