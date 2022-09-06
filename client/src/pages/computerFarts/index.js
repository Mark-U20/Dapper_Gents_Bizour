import { ShowListings } from '../../components';
import {motion} from 'framer-motion';
import './style.css';

export default function ComputerFarts() {



  return (
    <motion.div
      initial={{opacity: 0, transition: {duration: 1}}}
      animate={{opacity: 1}}
      exit={{opacity: 0, transition: {duration: .5}}}
    >
      <h1>Yes this is text</h1>
      <ShowListings />
    </motion.div>
  );
}