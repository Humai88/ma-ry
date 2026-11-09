// Change this to the email address you want rights holders to contact.
const CONTACT_EMAIL = 'ryma232@gmail.com'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer container">
      <img src="/logo.svg" alt="Ma Ry" className="footer-logo" />
      <p>
        © {new Date().getFullYear()} ma-ry.uk · Fan site. Clips from Moon Lovers: Scarlet Heart Ryeo
        belong to their original broadcaster.
      </p>
      <p>
        Rights holder? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and I'll remove it.
      </p>
    </footer>
  )
}
