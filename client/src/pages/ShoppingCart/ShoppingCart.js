import './shoppingCart.css';
import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
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
import { from } from '@apollo/client';

// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
// import Auth from '../utils/auth';

//query all shopping cart items
//loop through shopping cart items and display them in cart card

const ShoppingCart = () => {
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
              <CartCard
                image={''}
                title={''}
                description={''}
                price={''}
                listingAuth={{}}
              />
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
