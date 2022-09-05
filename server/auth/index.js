const jwt = require('jsonwebtoken');
const { ApolloError } = require('apollo-server-express');

const secret = 'super secret but also public';
console.log('SUPER SECRET: ' + secret);

module.exports = {
  authMiddleware({ req }, res) {
    // grabbing defined authorization data
    let token = req.headers.authorization;

    // if no token, just keep goin
    if (!token) return req;

    // if token exists, but doesn't include validation string, throw error

    if (!token.includes('Validate')) {
      throw new ApolloError('invalid token');
    }
    token = token.split(' ').pop().trim();

    // actually grabbing token string

    // try decoding token with max age of 14 days
    try {
      const { data } = jwt.decode(token, secret, {
        maxAge: '14d',
      });

      // pushing token data to req.user and returning
      req.user = data;

      console.log(req.user)
      return req;

      // if it can't decode it with our secret, then the token is invalid
    } catch (err) {
      throw new ApolloError('invalid');
    }
  },

  // method for creating a token on user login / signup
  signToken(user_data) {
    return jwt.sign({ data: user_data }, secret, {
      expiresIn: '14d',
    });
  },
};
