import './About.css'

const STATS = [
  { num: '4', label: 'Languages Known'      },
  { num: '2',  label: 'Degrees (in progress)' },
  { num: '2',  label: 'Languages Spoken'     },
  { num: '∞',  label: 'Passion for Code'     }
]

export function About () {
  return (
    <section className='section about' id='About'>
      <div className='about-text fade-up'>
        <span className='section-tag'># About</span>
        <h2 className='section-title'>Who am I?</h2>

        <p>
          Hey! I&apos;m <strong>Lautaro Boiro</strong>, a programming student at{' '}
          <strong>Universidad Tecnológica Nacional (UTN)</strong>, based in
          Avellaneda, Sarandí, Buenos Aires.
        </p>
        <p>
          I have a strong passion for software development and I&apos;m constantly
          working to grow my skills in multiple programming languages and technologies.
        </p>
        <p>
          I stand out for my <strong>analytical mindset</strong>, attention to detail,
          and ability to quickly adapt to new technologies and work environments.
          I&apos;m fluent in both Spanish and English.
        </p>

        <div className='about-stats'>
          {STATS.map(({ num, label }) => (
            <div className='about-stat-card' key={label}>
              <div className='about-stat-num'>{num}</div>
              <div className='about-stat-label'>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='about-image-wrap fade-up'>
        <div className='about-avatar-ring' />
        <img
          src='/foto-perfil.png'
          alt='Lautaro Boiro'
          className='about-photo'
        />
      </div>
    </section>
  )
}