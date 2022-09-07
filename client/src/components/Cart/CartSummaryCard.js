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
  Divider,
  Header,
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
          <h3>Subtotal: ${props.subtotal}</h3>
          <h3>Shipping: ${props.shipping}</h3>
          <h3>Tax: ${props.tax}</h3>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="dollar sign" />
              Total amount:
            </Header>
          </Divider>
          <h3>{props.total}</h3>
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
