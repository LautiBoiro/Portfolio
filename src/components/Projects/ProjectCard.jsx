import './ProjectCard.css'

export function ProjectCard ({ project }) {
  const { title, description, tags, github, demo, image } = project

  return (
    <article className='project-card fade-up'>

      {image
        ? (
          <img
            src={image}
            alt={`Preview de ${title}`}
            className='project-card-preview'
          />
        )
        : (
          <div className='project-card-icon'>
            {title.charAt(0).toUpperCase()}
          </div>
        )}

      <h3 className='project-card-title'>{title}</h3>
      <p className='project-card-desc'>{description}</p>

      <div className='project-card-tags'>
        {tags.map(tag => (
          <span className='project-card-tag' key={tag}>{tag}</span>
        ))}
      </div>

      <div className='project-card-links'>
        {github && (
          <a href={github} target='_blank' rel='noreferrer' className='project-card-link'>
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target='_blank' rel='noreferrer' className='project-card-link project-card-link--demo'>
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}