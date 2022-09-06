import './shoppingCart.css';
import React, {
  useState,
  useEffect,
  createRef,
  useRef,
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import AuthService from '../../utils/auth';
import { UserContext } from '../../utils/UserContext';

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
  const { userContextValue, setUserContextValue } = useContext(UserContext);
  const [activeSticky, setActiveSticky] = useState(false);
  let cartItems = <h1>Cart is empty</h1>;
  const cart = [];
  useEffect(() => {
    setActiveSticky(true);
  }, []);

  useEffect(() => {
    console.log(userContextValue);
    try {
      if (userContextValue.getUser.shoppingCart !== undefined) {
        userContextValue.getUser.shoppingCart.forEach((item) => {
          console.log(`item: ${item}`);
          console.log(item);
          cart.push(item);
        });
        console.log('adding cart items');
        cartItems = cart.map((item) => (
          <CartCard
            title={item.title}
            price={item.price}
            image={item.image}
          ></CartCard>
        ));
        console.log(`cartItems: ${cartItems}`);
        console.log(cart);
      }
    } catch (err) {}
  }, [userContextValue]);

  // const { error, loading, data } = useQuery(GET_USER, {
  //   variables: { userID: AuthService.getProfile().data._id },
  // });
  console.log(userContextValue.getUser);
  console.log('data', cart);

  return (
    <>
      {/* {//loop through cart items and display them} */}
      <Container className="shopping-cart-container" textAlign="center">
        <Grid columns={2}>
          <Grid.Column>
            <Header as="h2">Shopping Cart</Header>
            <Container className="listing-container">
              {cartItems}
            </Container>{' '}
          </Grid.Column>
          <Grid.Column>
            <Rail position="right">
              <CartSummaryCard stick={activeSticky} />
            </Rail>
          </Grid.Column>
        </Grid>
      </Container>{' '}
    </>
  );
};

export default ShoppingCart;
