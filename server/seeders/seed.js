const db = require('../config/connection');
const { Cart, Listing, Review, User } = require('../models');
const userSeeds = require('./userSeeds.json');
const listingSeeds = require('./listingSeeds.json')
const { faker } = require('@faker-js/faker');

console.log(`<====== generating data ======>`);

db.once('open', async() => {
    try {
        await Cart.deleteMany({});
        await Listing.deleteMany({});
        await Review.deleteMany({});
        await User.deleteMany({});

        const user = await User.create(userSeeds);
        console.log(`<====== user data generated ======>`);

        for (let i = 0; i < listingSeeds.length; i++) {
            const {_id, listing_author} = await Listing.create(listingSeeds[i]);
            console.log(listing_author)
            console.log(_id)
            const updateUser =  await User.findOneAndUpdate(
                {email: listing_author},
                { $addToSet: {
                    listings: _id,
                }
            }
            )
        }

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`<====== listing data generated ======>`);
    console.log('all done!');
    process.exit(0);
});