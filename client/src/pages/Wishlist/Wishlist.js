import {motion} from 'framer-motion';

function Wishlist() {
  return (
  <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <h1>Wishlist</h1>;
  </motion.div>
  )
  
}

export default Wishlist;
