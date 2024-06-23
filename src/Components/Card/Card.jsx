import './Card.css'

const Card = ({title,img}) => {
  return (
    <div className='card-container'>
        <img src={img} alt='logo'/>
        <p>{title}</p>
    </div>
  )
}

export default Card