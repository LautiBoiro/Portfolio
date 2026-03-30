import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SERVICE_ID  = 'portfolio'
const TEMPLATE_ID = 'template_nfwfnvw'
const PUBLIC_KEY  = 'CRkmckjc2XOtZw1cC'

const COOLDOWN_MS = 2 * 60 * 1000  // 2 minutos entre envíos

const CONTACT_LINKS = [
  {
    icon:  '✉️',
    label: 'Email',
    value: 'lauti.boiro11@gmail.com',
    href:  'mailto:lauti.boiro11@gmail.com'
  },
  {
    icon:  '📞',
    label: 'Phone',
    value: '+54 11 6021 9541',
    href:  'tel:+541160219541'
  },
  {
    icon:  '📍',
    label: 'Location',
    value: 'Avellaneda, Sarandí · Buenos Aires, AR',
    href:  null
  }
]

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

export function Contact () {
  const [form,    setForm]    = useState(EMPTY_FORM)
  const [status,  setStatus]  = useState('idle')
  const lastSentRef = useRef(null)
  const formRef     = useRef()

  const handleChange = ({ target }) => {
    const { name, value } = target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const now = Date.now()

    if (lastSentRef.current && now - lastSentRef.current < COOLDOWN_MS) {
      const secsLeft = Math.ceil((COOLDOWN_MS - (now - lastSentRef.current)) / 1000)
      setStatus(`wait:${secsLeft}`)
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('loading')
    lastSentRef.current = now

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setForm(EMPTY_FORM)
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <section className='section section--compact contact' id='Contact'>
      <span className='section-tag fade-up'># Contact</span>
      <h2 className='section-title fade-up'>Let&apos;s Talk</h2>

      <div className='contact-inner'>
        <div className='contact-info fade-up'>
          <p>
            I&apos;m open to opportunities, collaborations, and conversations.
            Feel free to reach out — I&apos;m always happy to connect!
          </p>

          <div className='contact-links'>
            {CONTACT_LINKS.map(({ icon, label, value, href }) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Tag key={label} href={href} className='contact-link'>
                  <div className='contact-link-icon'>{icon}</div>
                  <div>
                    <div className='contact-link-label'>{label}</div>
                    <div className='contact-link-value'>{value}</div>
                  </div>
                </Tag>
              )
            })}
          </div>
        </div>

        <form ref={formRef} className='contact-form fade-up' onSubmit={handleSubmit}>
          <div className='contact-field'>
            <label>Full Name</label>
            <input
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name...'
              required
            />
          </div>

          <div className='contact-field'>
            <label>Email</label>
            <input
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Your email...'
              required
            />
          </div>

        <div className='contact-field'>
          <label>Subject</label>
          <input
            name='subject'
            value={form.subject}
            onChange={handleChange}
            placeholder='What is this about...'
            required
          />
        </div>

          <div className='contact-field'>
            <label>Message</label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message here...'
              required
            />
          </div>

          <button
            type='submit'
            className='btn-primary contact-submit'
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <p className='contact-feedback contact-feedback--success'>
              ✅ Message sent! I&apos;ll get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className='contact-feedback contact-feedback--error'>
              ❌ Something went wrong. Try emailing me directly.
            </p>
          )}

          {status.startsWith('wait:') && (
            <p className='contact-feedback contact-feedback--wait'>
              ⏳ Please wait {status.split(':')[1]} seconds before sending again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}