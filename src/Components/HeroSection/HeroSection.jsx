import './HeroSection.css'
import {motion} from 'framer-motion'


const HeroSection = () => {
  return (
    <div className='hero-container'>
        <motion.div 
         initial={{ opacity: 0, x: -150 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
        className="details">
            <h1 className='name'>ARJUN VILAS P</h1>
            <p className='desc'>software developer</p>
        </motion.div>
        <motion.div
        initial={{ opacity : 0, y : -100}}
        animate={{ opacity : 1, y : 0}}
        transition={{duration:1}}
        className="avatar">
            <img src='/avatar2.webp' alt='avatar'/>
        </motion.div>
    </div>
  )
}

export default HeroSection