import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { ShowRandomListings } from '../components';
// import { random_inventory } from "../store_inventory/random_inventory";
import {motion} from 'framer-motion';




function Random() {
    // const [inventory, setInventory] = useState(random_inventory);


    return (
        <motion.section
            initial={{opacity: 0, transition: {duration: 0.5}}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: .5}}}
        >
            <h1>Random Stuff</h1>
            <p>Your home for random crap</p>
            {/* {inventory.map((item, i) => {
                return <ProductCard key={i} name={item.name} price={item.price} image={item.image} placeholder={item.placeholder} rating={item.rating} />
            })} */}
        </motion.section>
    )
}

export default Random;