import './shoppingCart.css';
import React, { useState, useEffect, createRef, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import AuthService from '../../utils/auth';

import { CartCard, CartSummaryCard } from '../../components';
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Button,
  Container,
  Sticky,
} from 'semantic-ui-react';
import {motion} from 'framer-motion';

//query all shopping cart items
//loop through shopping cart items and display them in cart card

const ShoppingCart = () => {
  const [activeSticky, setActiveSticky] = useState(false);
  useEffect(() => {
    setActiveSticky(true);
  }, []);

  const { error, loading, data } = useQuery(GET_USER, {
    variables: { userID: AuthService.getProfile().data._id },
  });
  const cart = [];
  console.log('data', cart);

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0, transition: {duration: 0.5}} }
    >
      {/* {//loop through cart items and display them} */}
      <Container className="shopping-cart-container" textAlign="center">
        <Grid columns={2}>
          <Grid.Column>
            <Header as="h2">Shopping Cart</Header>
            <Container className="listing-container">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <CartCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                ))
              ) : (
                <h3>No items in your cart</h3>
              )}
            </Container>{' '}
          </Grid.Column>
          <Grid.Column>
            <Rail position="right">
              <CartSummaryCard stick={activeSticky} />
            </Rail>
          </Grid.Column>
        </Grid>
      </Container>{' '}
    </motion.section>
  );
};

export default ShoppingCart;
