import { Link } from 'react-router-dom'
import { noticias } from '../data/noticias'

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
          <a href="/quienes-somos" className="hero-btn">Conocenos</a>
        </div>
      </section>

      

      <section className="container inicio-preview">
        <h2>Últimas Noticias</h2>
        <div className="cards-grid">
          {noticias.map((noticia) => (
            <Link key={noticia.id} to={`/noticias/${noticia.id}`} className="card">
              <div className="card-imagen" style={{ backgroundImage: `url(${noticia.imagen})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="card-contenido">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.resumen}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container inicio-preview">
        <h2>Próximos Eventos</h2>
        <div className="eventos-grid">
          <div className="evento-card">
            <div className="evento-fecha">
              <span className="evento-mes">AGO</span>
              <span className="evento-dia">15</span>
            </div>
            <div className="evento-info">
              <span className="evento-categoria categoria-comunidad">Comunidad</span>
              <h3>Asamblea Vecinal</h3>
              <p>🕐 17:00 hs</p>
              <p>📍 Plaza 25 de Mayo</p>
            </div>
          </div>
          <div className="evento-card">
            <div className="evento-fecha">
              <span className="evento-mes">AGO</span>
              <span className="evento-dia">23</span>
            </div>
            <div className="evento-info">
              <span className="evento-categoria categoria-militancia">Militancia</span>
              <h3>Jornada de Militancia</h3>
              <p>🕐 10:00 hs</p>
              <p>📍 Sede de la organización política</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio