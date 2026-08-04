import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-logo">
          <img src="/logo.png" alt="Logo Resistencia Merece Crecer" className="header-logo-img" />
          Resistencia Merece Crecer
        </div>
        <nav className={`header-nav ${menuAbierto ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Inicio
          </NavLink>
          <NavLink
            to="/quienes-somos"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Quiénes Somos
          </NavLink>
          <NavLink
            to="/galeria"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Galería
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contacto
          </NavLink>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header