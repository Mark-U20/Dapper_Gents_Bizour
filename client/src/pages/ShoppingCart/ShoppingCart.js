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
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  useEffect(() => {
    setActiveSticky(true);
  }, []);

  useEffect(() => {
    console.log(userContextValue);
    try {
      if (userContextValue.getUser.shoppingCart !== undefined) {
        let subTotal = 0;
        let shipping = 3.99;
        let tax = 0;
        userContextValue.getUser.shoppingCart.forEach((item) => {
          //set cartItems items to all previous cart items and add new cart item
          setCartItems((cartItems) => [
            ...cartItems,
            <CartCard
              title={item.title}
              price={item.price}
              image={item.image}
            />,
          ]);
          subTotal += item.price;
        });
        tax = subTotal * 0.065;
        setCartTotal(
          <CartSummaryCard
            stick={activeSticky}
            subtotal={subTotal}
            shipping={shipping}
            tax={tax}
            total={subTotal + shipping + tax}
          />
        );
        //set cartTotal to the total of all cart items
      }
    } catch (err) {}
  }, [userContextValue]);
  // const { error, loading, data } = useQuery(GET_USER, {
  //   variables: { userID: AuthService.getProfile().data._id },
  // });
  console.log(userContextValue.getUser);

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
              {/* <CartSummaryCard stick={activeSticky} /> */}
              {cartTotal}
            </Rail>
          </Grid.Column>
        </Grid>
      </Container>{' '}
    </>
  );
};

export default ShoppingCart;
