import { gql } from '@apollo/client';

export const GET_LISTING = gql`
  query getListing($listingId: ID!) {
    getListing(listingId: $listingId) {
      _id
      title
      description
      category
      quantity
      image
      price
      listing_author
      # reviews {
      #   _id
      #   review_rating
      #   review_title
      #   review_text
      #   review_author {
      #     _id
      #     email
      #   }
      # }
    }
  }
`;

export const GET_LISTINGS = gql`
  query getListings {
    getListings {
      _id
      title
      description
      category
      quantity
      image
      price
      listing_author
    }
  }
`;

export const GET_USER = gql`
  query getUser($userID: ID!) {
    getUser(userID: $userID) {
      _id
      email
      listings {
        _id
        title
        description
        quantity
        image
        price
      }
      shoppingCart {
        _id
        title
        description
        quantity
        image
        price
      }
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      _id
      email
      listings {
        _id
        title
        description
        quantity
        image
        price
      }
      shoppingCart {
        _id
        title
        description
        quantity
        image
        price
      }
    }
  }
`;
