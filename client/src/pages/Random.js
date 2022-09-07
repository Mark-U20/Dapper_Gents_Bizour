import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { ShowRandomListings } from '../components';
import {motion} from 'framer-motion';




function Random() {

    return (
        <motion.section
            initial={{opacity: 0, transition: {duration: 0.5}}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: .5}}}
            className="store-section"
        >
            <div className="heading">
                <h1>Random Stuff</h1>
                <p>Your home for random crap</p>
            </div>
            <ShowRandomListings />
        </motion.section>
    )
}

export default Random;