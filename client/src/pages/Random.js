import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { random_inventory } from "../store_inventory/random_inventory";




function Random() {
    const [inventory, setInventory] = useState(random_inventory);


    return (
        <section>
            <h1>Random Stuff</h1>
            <p>Your home for random crap</p>
            {inventory.map((item, i) => {
                return <ProductCard key={i} />
            })}


        
        </section>
    )
}

export default Random;