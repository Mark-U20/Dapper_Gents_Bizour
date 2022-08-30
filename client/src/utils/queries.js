import { gql } from "apollo-boost";

const GET_ME = gql`
    me {
      id
      username
      email
      bookCount
      SavedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
  }
`;
