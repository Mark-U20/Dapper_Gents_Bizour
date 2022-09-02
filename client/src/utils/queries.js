import { gql } from '@apollo/client';

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