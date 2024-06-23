import skills from '../../skills'
import Card from '../Card/Card'
import './SkillsSection.css'
import {motion} from 'framer-motion' 

const SkillsSection = () => {

  return (
    <div className='skills-container'>
        <motion.h1
        initial={{y:-30,opacity:0.2}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        >Skills Set</motion.h1>
        <motion.div 
        initial={{x:-200,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1}}
        className="skills">
            {
                skills.map((item,i)=>{
                    return(<Card title={item.title} img={item.img} key={i}/>)
                })
            }
        </motion.div>
    </div>
  )
}

export default SkillsSection