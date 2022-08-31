const { Cart, Listing, Review, User } = require('../models');

const resolvers = {
  Query: {
    async getUser(_, { userId }) {
      return await User.findOne({ _id: userId });
    },
    async getUsers() {
      return await User.find();
    },
    async getListing(_, { listingId }) {
      return await Listing.findOne({ _id: listingId });
    },
    async getListings() {
      return await Listing.find();
    },
  },
  Mutation: {
    // async addUser(_, { email, password }) {
    //   return User.create({ email, password });
    // },
    // async loginUser(_, { email, password }){

    // },
    async addListing(_, {
      item_name,
      description,
      category,
      quantity,
      price,
    }) {
      return Listing.create({
        item_name,
        description,
        category,
        quantity,
        price,
      })
    }
  },
};

module.exports = resolvers;
