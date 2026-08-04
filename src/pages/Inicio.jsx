function Inicio() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 37, 64, 0.75), rgba(10, 37, 64, 0.85)), url("/fondo.png")'
        }}
      >
        <div className="hero-overlay">
          <img src="/logo.png" alt="Logo Resistencia Merece Crecer" className="hero-logo" />
          <h1 className="hero-title">Resistencia Merece Crecer</h1>
          <p className="hero-subtitle">Una organización política por y para nuestra gente</p>
          <a href="/quienes-somos" className="hero-btn">Conócenos</a>
        </div>
      </section>

      

      <section className="container inicio-preview">
        <h2>Últimas Noticias</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Recorrida por el barrio Villa Río Negro</h3>
            <p>El equipo visitó vecinos para escuchar sus reclamos sobre el estado de las calles.</p>
          </div>
          <div className="card">
            <h3>Charla abierta sobre acceso a la vivienda</h3>
            <p>Se realizó un encuentro comunitario para debatir propuestas habitacionales.</p>
          </div>
          <div className="card">
            <h3>Jornada solidaria en el centro comunitario</h3>
            <p>Voluntarios del movimiento organizaron una entrega de mercadería a familias del barrio.</p>
          </div>
        </div>
      </section>

      <section className="container inicio-preview">
        <h2>Próximos Eventos</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Asamblea Vecinal</h3>
            <p>Sábado 15 de agosto, 17hs — Plaza 25 de Mayo</p>
          </div>
          <div className="card">
            <h3>Jornada de Militancia</h3>
            <p>Domingo 23 de agosto, 10hs — Sede de la organización política</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio