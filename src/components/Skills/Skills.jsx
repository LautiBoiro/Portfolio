import { SkillTag } from './SkillTag.jsx'
import './Skills.css'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    tags: [
      { label: 'Python',     img: `${DEVICON}/python/python-original.svg`         },
      { label: 'Java',       img: `${DEVICON}/java/java-original.svg`             },
      { label: 'JavaScript', img: `${DEVICON}/javascript/javascript-original.svg` },
      { label: 'MySQL',      img: `${DEVICON}/mysql/mysql-original.svg`           }
    ]
  },
  {
    title: 'Frontend',
    tags: [
      { label: 'HTML',  img: `${DEVICON}/html5/html5-original.svg`},
      { label: 'CSS',   img: `${DEVICON}/css3/css3-original.svg`},
      { label: 'React', img: `${DEVICON}/react/react-original.svg`},
    ]
  },
  {
    title: 'Tools',
    tags: [
      { label: 'VS Code',   img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'},
      { label: 'Git',        img: `${DEVICON}/git/git-original.svg`},
      { label: 'GitHub',     img: `/skills/github.svg`},
      { label: 'Photoshop',  img: '/skills/photoshop.svg'}
    ]
  },
  {
    title: 'Languages Spoken',
    tags: [
      { label: 'Spanish', img: '/skills/arg.svg' },
      { label: 'English', img: '/skills/usa.svg' }
    ]
  }
]

export function Skills () {
  return (
    <section className='section section--compact skills' id='Skills'>
      <span className='section-tag fade-up'># Skills</span>
      <h2 className='section-title fade-up'>Technical Skills</h2>

      <div className='skills-grid'>
        {SKILL_CATEGORIES.map(({ title, tags }) => (
          <div className='skills-card fade-up' key={title}>
            <div className='skills-card-title'>{title}</div>
            <div className='skills-tags'>
              {tags.map(tag => (
                <SkillTag key={tag.label} label={tag.label} img={tag.img} emoji={tag.emoji} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}