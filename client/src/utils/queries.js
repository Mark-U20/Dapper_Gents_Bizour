import { gql } from '@apollo/client';

export const GET_LISTING = gql`
  query getListing($listingID: ID!) {
    getListing(listingID: $listingID) {
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
        # listings {
        #   _id
        #   title
        #   description
        #   quantity
        #   image_url
        #   price
        # }
      }
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
