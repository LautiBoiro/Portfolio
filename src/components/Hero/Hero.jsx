import './Hero.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Hero () {
  return (
    <section className='section hero' id='Home'>
      <div className='hero-glow' />

      <p className='hero-greeting'>👋 Hello, world!</p>

      <h1 className='hero-name'>
        I&apos;m <span className='hero-name--highlight'>Lautaro</span>
        <br />
        Boiro
      </h1>

      <p className='hero-role'>
        <strong>Programming Student</strong> &amp; Aspiring Software Developer
      </p>

      <p className='hero-desc'>
        Studying at UTN with a passion for problem-solving through code.
        Skilled in Python, Java, SQL and JavaScript — always learning, always building.
      </p>

      <div className='hero-ctas'>
        <a href='#Contact' className='btn-primary'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            <path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' />
          </svg>
          Contact Me
        </a>

        <a href='#About' className='btn-outline'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            <circle cx='12' cy='8' r='4' />
            <path d='M20 21a8 8 0 10-16 0' />
          </svg>
          About Me
        </a>
      </div>

      <div className='hero-socials'>
        <a href='https://github.com/LautiBoiro' target='_blank' rel='noreferrer' className='hero-social-link' aria-label='GitHub'>
          <FaGithub />
        </a>
        <a href='https://linkedin.com/in/lautaroboiro' target='_blank' rel='noreferrer' className='hero-social-link' aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
      </div>

      <div className='hero-cv'>
        <span className='hero-cv-label'>Download CV</span>
        <div className='hero-cv-buttons'>
          <a href='/CV-LautaroBoiro-en.pdf' download='CV-LautaroBoiro-EN.pdf' className='btn-cv'>
            English
          </a>
          <a href='/CV-LautaroBoiro-es.pdf' download='CV-LautaroBoiro-ES.pdf' className='btn-cv'>
            Español
          </a>
        </div>
      </div>

      <div className='hero-scroll'>
        <div className='hero-scroll-line' />
        <span>Scroll</span>
      </div>
    </section>
  )
}