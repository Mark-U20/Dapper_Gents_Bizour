const { gql } = require('apollo-server-express');

/* FIXME:
 * do we need to add something to the user
 * for the cart items? do we need a model?
 *
 * we'll need to add queries for the
 *
 * -fixedOtter
 */

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    listings: [Listing]
  }

  type Listing {
    _id: ID!
    item_name: String!
    description: String!
    category: String!
    quantity: Int!
    price: Int!
    listing_author: User
    reviews: [Review]
  }

  type Review {
    _id: ID!
    review_title: String!
    review_rating: Int!
    review_text: String!
    review_author: User
  }

  type Auth {
    userData: User
    tokenData: ID
  }

  type Query {
    getUser: User
    getUsers: [User]
    getListing: Listing
    getListings: [Listing]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addListing(
      item_name: String!
      description: String!
      category: String!
      quantity: Int!
      price: Int!
    ): Listing
    updateListing(
      id: ID!,
      item_name: String!
      description: String!
      category: String!
      quantity: Int!
      price: Int!
    ): Listing
  }
`;

module.exports = typeDefs;
