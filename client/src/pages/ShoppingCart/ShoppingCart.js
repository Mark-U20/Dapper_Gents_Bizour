import './shoppingCart.css';
import React, { useState, useEffect, createRef } from 'react';
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

//query all shopping cart items
//loop through shopping cart items and display them in cart card

const ShoppingCart = () => {
  const { error, loading, data } = useQuery(GET_USER, {
    variables: { userID: AuthService.getProfile().data._id },
  });
  const cart = data?.getUser?.shoppingCart || [];
  console.log('data', data);
  console.log(cart)
  // set modal display state

  //   const [activeItem, setActiveItem] = useState('');

  //   //contextRef is
  //   const contextRef = createRef();
  //   const [fixed, setFixed] = useState(false);
  //   const [cart, setCart] = useState([]);
  //   const [total, setTotal] = useState(0);
  //   const [quantity, setQuantity] = useState(0);
  //   const [cartItems, setCartItems] = useState(0);
  //   const [cartItemsTotal, setCartItemsTotal] = useState(0);
  //   const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  //   const [cartItemsPrice, setCartItemsPrice] = useState(0);

  return (
    <>
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
                    listingAuth={item.listingAuth}
                  />
                ))
              ) : (
                <h3>No items in your cart</h3>
              )}
            </Container>{' '}
          </Grid.Column>
          <Grid.Column>
            <Rail position="right">
              <CartSummaryCard />
            </Rail>
          </Grid.Column>
        </Grid>
      </Container>{' '}
    </>
  );
};

export default ShoppingCart;
