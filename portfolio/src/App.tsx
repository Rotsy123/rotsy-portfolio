import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'

export default function App() {
  const [ready, setReady] = useState(false)

  const onLoaderDone = useCallback(() => setReady(true), [])

  useEffect(() => {
    document.body.classList.toggle('loading', !ready)
  }, [ready])

  return (
    <>
      {!ready && <Loader onDone={onLoaderDone} />}
      <div className="page" style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.45s ease' }}>
        <div className="bg-atmosphere" aria-hidden="true" />
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
