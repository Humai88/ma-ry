export default function Hero({ children }) {
  return (
    <section className="hero">
      {children}
      <div className="container hero-body">
        <div className="hero-panel">
          <span className="eyebrow">A fan collection</span>
          <h1>Moon Lovers: Scarlet Heart Ryeo</h1>
          <p>My favourite moments from the drama, scene by scene.</p>
          <a href="#videos" className="btn">Watch the videos</a>
        </div>
      </div>
    </section>
  )
}
