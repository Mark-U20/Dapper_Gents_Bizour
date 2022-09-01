import { gql } from '@apollo/client';

export const GET_LISTINGS = gql`
    query getListings {
    getListings {
        _id
        item_name
        description
        category
        quantity
        image_url
        price
    }
}
`;