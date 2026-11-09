import { useEffect, useState } from 'react'
import { videos } from './videos.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import VideoCard from './components/VideoCard.jsx'
import VideoModal from './components/VideoModal.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

// Each video gets a shareable link: ma-ry.uk/#video-3
const indexFromHash = () => {
  const m = window.location.hash.match(/^#video-(\d+)$/)
  const i = m ? Number(m[1]) - 1 : -1
  return i >= 0 && i < videos.length ? i : null
}

export default function App() {
  const [current, setCurrent] = useState(indexFromHash)

  useEffect(() => {
    const onHash = () => setCurrent(indexFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const open = (i) => {
    history.replaceState(null, '', `#video-${i + 1}`)
    setCurrent(i)
  }
  const close = () => {
    history.replaceState(null, '', window.location.pathname)
    setCurrent(null)
  }
  const step = (d) => open((current + d + videos.length) % videos.length)

  return (
    <>
      <Hero>
        <Header />
      </Hero>

      <main>
        <section id="videos" className="section">
          <div className="section-title">
            <span aria-hidden="true" />
            <h2>Videos</h2>
            <span aria-hidden="true" />
          </div>
          <ul className="video-grid">
            {videos.map((v, i) => (
              <li key={v.file}>
                <VideoCard video={v} onPlay={() => open(i)} />
              </li>
            ))}
          </ul>
        </section>

        <About />
      </main>

      <Footer />

      {current !== null && (
        <VideoModal
          video={videos[current]}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          hasMany={videos.length > 1}
        />
      )}
    </>
  )
}
