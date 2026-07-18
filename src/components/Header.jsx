import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        Resistencia Merece Crecer
      </div>
      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/quienes-somos">Quiénes Somos</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  )
}

export default Header