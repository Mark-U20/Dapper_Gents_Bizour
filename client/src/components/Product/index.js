import { useState, useEffect, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_LISTING } from '../../utils/queries';
import { ADD_TO_CART } from '../../utils/mutations';
import AuthService from '../../utils/auth';
import { UserContext } from '../../utils/UserContext';
import { saveItemIds, getCartItemIds } from '../../utils/localStorage';
import { motion } from 'framer-motion';
import './style.css';

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
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;

    if (!token) {
      return false;
    }

    console.log(data.getListing.title);
    console.log(prodID);

    const shoppingCart = await saveToCart({
      variables: { listingId: data.getListing._id },
    });

    setUserContextValue(shoppingCart.data.addToCart);
    console.log(shoppingCart.data.addToCart);
    console.log(userContextValue);
    setSavedItemIds([...savedItemIds, prodID]);
  };
  return (
    <motion.div
      className="product"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default Product;
