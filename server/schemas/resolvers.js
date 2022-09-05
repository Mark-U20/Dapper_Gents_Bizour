require('dotenv').config();
const { Cart, Listing, Review, User } = require('../models');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const { ApolloError } = require('apollo-server-express');
const { signToken } = require('../auth');

const resolvers = {
  Query: {
    async getUser(_, { userID }) {
      return await User.findOne({ _id: userID })
        .populate('listings')
        .populate('shoppingCart')
        .populate('reviews');
    },
    async getUsers() {
      return await User.find()
        .populate('listings')
        .populate('shoppingCart')
        .populate('reviews');
    },
    async getListing(_, { listingID }, context) {
      console.log(context.user);
      return await Listing.findOne({ _id: listingID }).populate(
        'listing_author'
      );
      // .populate('reviews');
    },
    async getListings() {
      return await Listing.find()
        .populate('listing_author')
        .populate('reviews');
    },
  },
  Mutation: {
    // mutation called when registering a new user account
    async addUser(_, { email, profilePic, password }, context) {
      // console.log(context.user)
      try {
        // try to create user
        const userData = await User.create({ email, profilePic, password });
        // create token based on user data
        const tokenData = signToken(userData);
        // return userdata and token
        return { userData, tokenData };
        // otherwise, error and break out
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    // mutation called when logging into an existing account
    async loginUser(_, { email, password }, context) {
      // finds user by email and populates child data
      const userData = await User.findOne({ email })
        .populate('listings')
        .populate('shoppingCart');
      // .populate('reviews');
      // no user found? throw error
      if (!userData)
        throw new ApolloError(`There isn't a user with that email`);
      // incorrect password? throw error
      if (!userData.validatePassword(password))
        throw new ApolloError(`Your password wrong. Think harder.`);
      // if user exists && has correct pass,,,
      try {
        // try signing token!
        const tokenData = signToken(userData);
        // return token and user
        return { userData, tokenData };
        // otherwise, throw error and break out
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async addListing(
      _,
      { title, description, category, quantity, image, price }
    ) {
      return Listing.create({
        title,
        description,
        category,
        quantity,
        image,
        price,
      });
    },
    async updateListing(
      _,
      { id, title, description, category, quantity, image, price }
    ) {
      return Listing.findOneAndUpdate(
        { _id: id },
        {
          title,
          description,
          category,
          quantity,
          image,
          price,
        }
      );
    },
    async updateQuantity(_, { id, quantity }) {
      return Listing.findOneAndUpdate({ _id: id }, { quantity });
    },
    
    async deleteListing(_, { id, title }) {
      return await Listing.findOneAndDelete({ _id: id }, { title });
    },

    async createCheckoutSession(_, { userID }) {
      console.log('test 2');
      const user = await User.findOne({ _id: userID });
      const cart = user.shoppingCart;
      console.log('cart ', cart);
      const line_items = cart.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }));
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${process.env.SERVER_URL}/success.html`,
        cancel_url: `${process.env.SERVER_URL}/cancel.html`,
      });
      return 'session.url';
    },

    async addToCart(_, { listingID }, context) {
      console.log(context.user);

      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              shoppingCart: {
                _id: listingID,
                title,
                quantity,
                description,
                image,
                price,
              }
            }
          },
          {
            new: true,
          }
        );
      }

    }

  }


module.exports = resolvers;
