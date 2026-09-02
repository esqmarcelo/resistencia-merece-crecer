import { Link } from 'react-router-dom'
import { noticias } from '../data/noticias'

const eventos = []

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
          {noticias.length === 0
            ? Array.from({ length: 3 }, (_, index) => <div key={index} className="card card-placeholder"></div>)
            : noticias.map((noticia) => (
                <Link key={noticia.id} to={`/noticias/${noticia.id}`} className="card">
                  {noticia.imagen ? (
                    <img src={noticia.imagen} alt={noticia.titulo} className="card-imagen" />
                  ) : (
                    <div className="card-imagen"></div>
                  )}
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
          {eventos.length === 0
            ? Array.from({ length: 2 }, (_, index) => (
                <div key={index} className="evento-card evento-placeholder">
                  <div className="evento-fecha"></div>
                  <div className="evento-info"></div>
                </div>
              ))
            : eventos.map((evento) => (
                <div key={evento.id} className="evento-card">
                  <div className="evento-fecha">
                    <span className="evento-mes">{evento.mes}</span>
                    <span className="evento-dia">{evento.dia}</span>
                  </div>
                  <div className="evento-info">
                    <span className={`evento-categoria ${evento.categoriaClase}`}>{evento.categoria}</span>
                    <h3>{evento.titulo}</h3>
                    <p>{evento.hora}</p>
                    <p>{evento.ubicacion}</p>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </>
  )
}

export default Inicio