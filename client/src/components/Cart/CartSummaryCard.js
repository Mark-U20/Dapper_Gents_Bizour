import './cart.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CHECKOUT_SESSION } from '../../utils/mutations';
import {
  Card,
  Icon,
  Image,
  Container,
  Sticky,
  Button,
} from 'semantic-ui-react';
import AuthService from '../../utils/auth';

//checkout button handler will send all the user cart info to the server and redirect the user to the stripe checkout page

function CartSummaryCard(props) {
  const [session, { data, loading, error }] = useMutation(
    CREATE_CHECKOUT_SESSION,
    {
      variables: { userID: AuthService.getProfile().data._id },
    }
  );

  async function getStripeUrl() {
    const url = await session();
    console.log(url);
  }

  if (loading) return console.log('Submitting...');
  if (error) return `Submission error! ${error.message}`;

  return (
    <Sticky active={props.stick}>
      <Container className="cart-summary-container">
        <Container textAlign="center">
          <h2>Cart Summary</h2>
          <h3>Subtotal: $0.00</h3>
          <h3>Shipping: $0.00</h3>
          <h3>Tax: $0.00</h3>
          <h3>Total: $0.00</h3>
          <Button
            onClick={(e) => {
              getStripeUrl();
            }}
            color="teal"
            size="large"
            attached="bottom"
          >
            Checkout
          </Button>
        </Container>
      </Container>
    </Sticky>
  );
}

export default CartSummaryCard;
