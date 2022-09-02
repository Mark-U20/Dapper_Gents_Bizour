import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Container } from 'semantic-ui-react';

// import { Menu } from 'semantic-ui-react';
// import { Dropdown } from 'semantic-ui-react';

// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
// import Auth from '../utils/auth';

const ShoppingCart = () => {
  // set modal display state

  const [activeItem, setActiveItem] = useState('');

  return (
    <>
      <div className="checkout-container">
        <Container>
          <Button attached="top">Top</Button>
        </Container>
      </div>
      <Button attached="bottom">Bottom</Button>
    </>
  );
};

export default ShoppingCart;
