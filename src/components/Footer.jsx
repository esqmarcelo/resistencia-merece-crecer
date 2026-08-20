import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" className="footer-logo-img" />
            Resistencia Merece Crecer
          </div>
          <p>Una organización política por y para nuestra gente, trabajando por un Chaco más justo.</p>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <p>📍 Dodero 21 - Resistencia, Chaco</p>
          <p>📞 +54 362 492-1548</p>
          <p>✉️ resistenciamerececrecer@gmail.com</p>
        </div>

        <div className="footer-col">
          <h3>Enlaces Rápidos</h3>
          <Link to="/quienes-somos">Quiénes Somos</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </div>

      <p className="footer-copy">© 2026 Resistencia Merece Crecer. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer