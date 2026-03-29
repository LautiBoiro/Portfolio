import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#Home',       label: 'Home'       },
  { href: '#About',      label: 'About'      },
  { href: '#Skills',     label: 'Skills'     },
  { href: '#Projects',   label: 'Projects'   },
  { href: '#Experience', label: 'Experience' },
  { href: '#Contact',    label: 'Contact'    }
]

export function Navbar () {
  const [isOpen,   setIsOpen]   = useState(false)
  const [active,   setActive]   = useState('Home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const onScroll = () => {
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id')
      })
      if (current) setActive(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav className='navbar'>
      <a href='#Home' className='navbar-logo'>
        LB<span>.</span>
      </a>

      <ul className={`navbar-links ${isOpen ? 'navbar-links--open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`navbar-link ${active === label ? 'navbar-link--active' : ''}`}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`navbar-hamburger ${isOpen ? 'navbar-hamburger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
