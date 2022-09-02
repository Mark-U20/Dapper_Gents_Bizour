import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
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

// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
// import Auth from '../utils/auth';

const ShoppingCart = () => {
  // set modal display state

  //   const [activeItem, setActiveItem] = useState('');
  const [activeSticky, setActiveSticky] = useState(false);

  useEffect(() => {
    setActiveSticky(true);
  }, []);
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
      <Container textAlign="center">
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4">Item</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Quantity</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Price</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4">Item</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Quantity</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Price</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4">Item</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Quantity</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Price</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container textAlign="center">
          <Sticky active={activeSticky}>
            <Button as={Link} to="/checkout" color="teal" size="large">
              Checkout
            </Button>
          </Sticky>
        </Container>
      </Container>{' '}
    </>
  );
};

export default ShoppingCart;
