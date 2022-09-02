const { Schema, model, SchemaTypes } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must add an email address'],
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
  },
  password: {
    type: String,
    required: [true, 'You must add a password'],
    minlength: 6,
  },
  profilePic: {
    type: String,
    default: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3d%2F66%2F78%2F3d667893c5788613ff3590ca218a9cb2.jpg&f=1&nofb=1'
  },
  listings: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Listing',
    },
  ],
  shoppingCart: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Cart',
    },
  ],
  reviews: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Review',
    },
  ],
});

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

userSchema.methods.validatePassword = async function (naughtyPass) {
  const isPassValid = await bcrypt.compare(naughtyPass, this.password);
  return isPassValid;
};

const User = model('User', userSchema);

module.exports = User;
