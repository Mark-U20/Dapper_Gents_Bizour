import './cart.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  Card,
  Icon,
  Image,
  Container,
  Sticky,
  Button,
} from 'semantic-ui-react';

function CartSummaryCard(cartInfo) {
  const [activeSticky, setActiveSticky] = useState(false);

  useEffect(() => {
    setActiveSticky(true);
  }, []);
  return (
    <Sticky active={activeSticky}>
      <Container className="cart-summary-container">
        <Container textAlign="center">
          <h2>Cart Summary</h2>
          <h3>Subtotal: $0.00</h3>
          <h3>Shipping: $0.00</h3>
          <h3>Tax: $0.00</h3>
          <h3>Total: $0.00</h3>
          <Button
            as={Link}
            to="/checkout"
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
