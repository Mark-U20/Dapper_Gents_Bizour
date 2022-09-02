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
    profilePic: String
    listings: [Listing]
  }

  type Listing {
    _id: ID!
    title: String!
    description: String!
    category: String!
    quantity: Int!
    image: String!
    price: Float!
    listing_author: User
    # reviews: [Review]
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
    getUser(userID: ID!): User
    getUsers: [User]
    getListing(listingID: ID!): Listing
    getListings: [Listing]
  }

  type Mutation {
    addUser(email: String!, profilePic: String, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addListing(
      title: String!
      description: String!
      category: String!
      quantity: Int!
      image: String!
      price: Int!
    ): Listing
    updateListing(
      id: ID!,
      title: String!
      description: String!
      category: String!
      quantity: Int!
      image: String!
      price: Int!
    ): Listing
    deleteListing(id: ID!): Listing
  }
`;

module.exports = typeDefs;
