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

export const DELETE_LISTING = gql`
mutation deleteListing($id: Int!) {
  deleteListings(where: {id: $id}) {
    _id
    title
    description
    category
    quantity
    image_url
    price
    reviews {
      _id
      review_title
      review_rating
      review_text
      review_author
    }  
  }
}
`;
