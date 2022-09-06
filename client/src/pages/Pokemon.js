import ShowListings from '../components/ShowListings'
import pageLogo from '/images/justynsPokemonCards.png'
import {motion} from 'framer-motion';

function Pokemon() {


    return (
        <motion.div 
        initial={{opacity: 0, transition: {duration: 0.5}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: .5}}}
        >
            <img src={pageLogo} className="page-logo"/>
            <ShowListings />
        </motion.div>
    )
}

export default Pokemon;