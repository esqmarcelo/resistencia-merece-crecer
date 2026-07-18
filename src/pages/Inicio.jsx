function Inicio() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'linear-gradient(rgba(10, 37, 64, 0.75), rgba(10, 37, 64, 0.85)), url("/fondo.png")'
      }}
    >
      <div className="hero-overlay">
          <img src="/logo.png" alt="Logo Resistencia Merece Crecer" className="hero-logo" />
        <h1 className="hero-title">Resistencia Merece Crecer</h1>
        <p className="hero-subtitle">Un movimiento por y para nuestra gente</p>
        <a href="/quienes-somos" className="hero-btn">Conocenos</a>
      </div>
    </section>
  )
}

export default Inicio