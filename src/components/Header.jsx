export default function Header() {
  return (
    <header className="site-header container">
      <a href="#" className="logo" aria-label="Ma Ry — home">
        <img src="/logo.svg" alt="Ma Ry" />
      </a>
      <nav aria-label="Main">
        <a href="#videos">Videos</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
