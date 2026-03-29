import { useEffect } from 'react'
import { Navbar }     from './components/Navbar/Navbar.jsx'
import { Hero }       from './components/Hero/Hero.jsx'
import { About }      from './components/About/About.jsx'
import { Skills }     from './components/Skills/Skills.jsx'
import { Projects }   from './components/Projects/Projects.jsx'
import { Experience } from './components/Experience/Experience.jsx'
import { Contact }    from './components/Contact/Contact.jsx'
import { Footer }     from './components/Footer/Footer.jsx'

export function App () {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
