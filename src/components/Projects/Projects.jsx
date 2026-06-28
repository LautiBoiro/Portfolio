import { ProjectCard } from './ProjectCard.jsx'
import './Projects.css'

const PROJECTS = [ // para agregar más simplemente coma luego del } y repetir el proceso
  {
    id:1,
    title: 'Who wants to be a millionaire Pygame',
    description: 'This was a project from my university that replicates the game Who wants to be a millionaire',
    tags: ['Python'],
    github: 'https://github.com/LautiBoiro/Who-wants-to-be-a-millionaire-Pygame',
    demo: null,
    image: '/projects/millionaire.png'
  },
  {
    id: 1,
    title: 'Burger ecommerce',
    description: 'React-based e-commerce web application that simulates an online burger shop with shopping cart functionality, product management, and responsive UI design.',
    tags: ['React', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/LautiBoiro/burger-ecommerce.git',
    demo: null,
    image: '/projects/burger.png'
  }
]

export function Projects () {
  return (
    <section className='section section--compact projects' id='Projects'>
      <span className='section-tag fade-up'># Projects</span>
      <h2 className='section-title fade-up'>My Projects</h2>

      <div className='projects-grid'>
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}