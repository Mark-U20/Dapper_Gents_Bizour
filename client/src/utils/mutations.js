import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      userData {
        email
      }
      tokenData
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      userData {
        email
      }
      tokenData
    }
  }
`;
export const ADD_LISTING = gql`
  mutation AddListing(
    $title: String!
    $category: String!
    $quantity: Int!
    $image: String!
    $price: Int!
    $description: String!
  ) {
    addListing(
      title: $title
      category: $category
      quantity: $quantity
      image: $image
      price: $price
      description: $description
    ) {
      _id
      title
      description
      category
      quantity
      image
      price
      listing_author {
        _id
        email
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($listingID: ID!) {
    addToCart(listingID: $listingID) {
      _id
      email
      shoppingCart {
        _id
        title
        quantity
        description
        image
        price
      }
    }
  }
`;
export const DELETE_LISTING = gql`
  mutation deleteListing($deleteListingId: ID!) {
    deleteListing(id: $deleteListingId) {
      _id
      title
      description
      category
      quantity
      image
      price
      listing_author {
        _id
        email
      }
    }
  }
`;
export const UPDATE_QUANTITY = gql`
  mutation updateQuantity($updateQuantityId: ID!, $quantity: Int!) {
    updateQuantity(id: $updateQuantityId, quantity: $quantity) {
      _id
      title
      description
      category
      quantity
      image
      price
    }
  }
`;

export const CREATE_CHECKOUT_SESSION = gql`
  mutation createCheckoutSession($userID: ID!) {
    createCheckoutSession(userID: $userID) {
      session
    }
  }
`;
