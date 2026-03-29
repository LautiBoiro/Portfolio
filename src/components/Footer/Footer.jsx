import './Footer.css'

export function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p>
        Designed &amp; Built by <span className='footer-highlight'>Lautaro Boiro</span>
        {' '}· {year}
      </p>
    </footer>
  )
}
