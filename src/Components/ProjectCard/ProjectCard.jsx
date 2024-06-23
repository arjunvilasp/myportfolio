import './ProjectCard.css'

const ProjectCard = ({item}) => {
  return (
    <div className='project'>
    <div className="img">
      <img src={item.img} alt='project-img'/>
    </div>
    <div className="details">
      <h2 className='project-title'>{item.title}</h2>
      <p className='project-desc'>{item.desc}</p>
      <div className='stack'>
        <h3>Tech stack</h3>
        <ul>
          {
            item.stack.map((data,i)=>{
                return(
                    <li key={i}>{data}</li>
                )
            })
          }
        </ul>
      </div>
      <div className='code'>
        <a href={item.code}>
        <button className='github'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span>
            Code
            </span>
            </button>
        </a>
        <a href={item.demo}>
        <button className='live'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
            <span>Live Demo</span>
        </button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard