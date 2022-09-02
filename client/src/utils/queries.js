import { gql } from '@apollo/client';

export const GET_LISTING = gql`
  query getListing($listingID: ID!) {
    getListing(listingID: $listingID) {
      _id
      title
      description
      category
      quantity
      image_url
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
        image_url
        price
    }
}
`;