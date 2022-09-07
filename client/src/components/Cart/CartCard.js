import './cart.css';

import React from 'react';
// import { faker } from '@faker-js/faker';
import { Card, Icon, Image } from 'semantic-ui-react';
function CartCard(product) {
  return (
    <Card className="cart-card">
      <Image src={product.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product.title}</Card.Header>
        <Card.Description>
          <p>{product.price}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CartCard;
