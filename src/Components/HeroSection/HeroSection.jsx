import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className="avatar">
            <img src='/avatar2.webp' alt='avatar'/>
        </div>
        <div className="details">
            <h1 className='name'>ARJUN VILAS P</h1>
            <p className='desc'>software developer</p>
        </div>
    </div>
  )
}

export default HeroSection