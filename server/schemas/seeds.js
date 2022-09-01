const db = require('../config/connection');
const { Cart, Listing, Review, User } = require('../models');
const { faker } = require('@faker-js/faker');

/* ********************** */
/* defining the seed data */
/* ********************** */
let cartList = [];
let listingList = [];
let userList = [];
let reviewList = [];

console.log(`<====== generating data ======>`);
// declaring a known user for logging in
userList.push({ email: 'bryan@test.io', password: 'password'});
// pushing random users
for (let i = 0; i < 69; i++) {
  userList.push({ 
    email: faker.internet.email(), 
    password: faker.word.adjective(8) 
  });
}
// pushing random listings
for (let i = 0; i < 69; i++) {
  listingList.push({
    item_name: faker.animal.type(),
    description: faker.internet.domainWord(),
    category: faker.system.commonFileExt(),
    quantity: faker.mersenne.rand(1, 42),
    image_url: faker.image.cats(640, 640, true),
    price: faker.finance.amount(1, 69, 2)
  });
}
// pushing random reviews
for (let i = 0; i < 69; i++) {
  reviewList.push({
    review_rating: faker.mersenne.rand(1, 10),
    review_title: faker.company.bs(),
    review_text: faker.company.catchPhrase()
  });
}
// pushing random cart quantities (will tie to listing)
for (let i = 0; i < 69; i++) {
  cartList.push({ quantity: faker.mersenne.rand(1,4) });
}


db.once('open', async () => {
  console.log(`<====== done generating, now cleaning database ======>`);
  // first clean what is there
  await Cart.deleteMany({});
  await Listing.deleteMany({});
  await Review.deleteMany({});
  await User.deleteMany({});

  console.log(`<====== inserting into database ======>`);
  // bulk create 
  const users = await User.insertMany(userList);
  const reviews = await Review.insertMany(reviewList);
  const listings = await Listing.insertMany(listingList);
  const cartItems = await Cart.insertMany(cartList);

  console.log(`<====== associating listings and owners (this could take a second) ======>`);
  // setting owner for each listing
  for (newListing of listings) {
    // first pushing the listing to the owner 
    const owner = users[Math.floor(Math.random() * users.length)];
    owner.listings.push(newListing._id);
    await owner.save();
    // then adding the owner id to the listing
    newListing.listing_author = owner._id;
    await newListing.save();
  }

  console.log(`<====== associating reviews and authors (this could take a second) ======>`);
  // setting each review to a listing, and defining an author
  for (newReview of reviews) {
    // first finding an author
    const author = users[Math.floor(Math.random() * users.length)];
    author.reviews.push(newReview._id);
    await author.save();

    // then setting author on review
    newReview.review_author = author._id;
    await newReview.save();
  }

  console.log(`<====== associating list items to users carts (this could take a second) ======>`);
  // set each cart item to a listing id and push to some user
  for (newCartItem of cartItems) {
    // first grab an item
    const listingItem = listings[Math.floor(Math.random() * listings.length)];
    newCartItem.item_name = listingItem._id;
    await newCartItem.save();

    // push this cart item to a user
    const buyer = users[Math.floor(Math.random() * users.length)];
    buyer.shoppingCart.push(newCartItem._id);
    await buyer.save();
  }

  console.log(`<====== DONE ======>`);
  process.exit(0);
})