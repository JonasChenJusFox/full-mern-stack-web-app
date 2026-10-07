import { useEffect, useState } from 'react'

const About = () => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const loadAbout = async () => {
      try {
        const url = import.meta.env.VITE_ABOUT_API_URL

        if (!url) {
          throw new Error('Missing VITE_ABOUT_API_URL')
        }

        const response = await fetch(url, {
          signal: controller.signal
        })

        if (!response.ok) {
          throw new Error('Failed to load About Us')
        }

        const data = await response.json()
        setAbout(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      }
    }

    loadAbout()

    return () => controller.abort()
  }, [])

  if (error) {
    return <p role="alert">{error}</p>
  }

  if (!about) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <h1>{about.title}</h1>

      <img
        src={about.imageUrl}
        alt={about.imageAlt}
        style={{
          width: '250px',
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '12px'
        }}
      />

      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  )
}

export default About