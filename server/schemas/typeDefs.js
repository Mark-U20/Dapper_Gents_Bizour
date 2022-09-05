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
    shoppingCart: [Listing]
  }

  type Cart {
    _id: ID!
    title: String
    quantity: Int
    description: String
    image: String
    price: Float
  }

  type Url {
    session: String
  }

  type Listing {
    _id: ID!
    title: String
    description: String
    category: String
    quantity: Int
    image: String
    price: Float
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
      id: ID!
      title: String!
      description: String!
      category: String!
      quantity: Int!
      image: String!
      price: Int!
    ): Listing
    updateQuantity(id: ID!, quantity: Int!): Listing
    deleteListing(id: ID!): Listing
    createCheckoutSession(userID: ID!): Url
    addToCart(listingId: ID!): User
  }
`;

module.exports = typeDefs;
