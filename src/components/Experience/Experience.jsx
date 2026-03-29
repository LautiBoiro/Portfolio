import './Experience.css'

const WORK_EXPERIENCE = [
  {
    id: 1,
    title: 'Customer Service & Stock Assistant',
    company: "McDonald's · Avellaneda, Buenos Aires",
    period: '2022 – 2023',
    bullets: [
      'Provided direct customer service, developing strong communication and problem-solving skills.',
      'Handled cash register operations, ensuring accuracy and responsibility.',
      'Restocked products and managed inventory control.',
      'Worked in a fast-paced team environment, meeting quality standards and time objectives.'
    ]
  }
]

const EDUCATION = [
  {
    id: 1,
    school: 'Universidad Tecnológica Nacional',
    degree: 'Programming Degree',
    period: '2024 – Present (In progress)'
  },
  {
    id: 2,
    school: 'Instituto de Enseñanza Avanzada (IEA)',
    degree: 'Business Administration Degree',
    period: '2023 – 2024'
  }
]

export function Experience () {
  return (
    <section className='section section--compact experience' id='Experience'>
      <span className='section-tag fade-up'># Experience</span>
      <h2 className='section-title fade-up'>Work Experience</h2>

      <div className='experience-timeline'>
        {WORK_EXPERIENCE.map(({ id, title, company, period, bullets }) => (
          <div className='experience-item fade-up' key={id}>
            <div className='experience-item-header'>
              <div className='experience-item-title'>{title}</div>
              <div className='experience-item-period'>{period}</div>
            </div>
            <div className='experience-item-company'>{company}</div>
            <ul className='experience-item-bullets'>
              {bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className='section-title fade-up' style={{ marginTop: '4rem' }}>Education</h2>

      <div className='education-grid'>
        {EDUCATION.map(({ id, school, degree, period }) => (
          <div className='education-card fade-up' key={id}>
            <div className='education-card-school'>{school}</div>
            <div className='education-card-degree'>{degree}</div>
            <div className='education-card-period'>📅 {period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
