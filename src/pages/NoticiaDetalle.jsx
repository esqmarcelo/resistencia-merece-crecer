import { useParams, Link } from 'react-router-dom'
import { noticias } from '../data/noticias'

function NoticiaDetalle() {
  const { id } = useParams()
  const noticia = noticias.find((n) => n.id === parseInt(id))

  if (!noticia) {
    return (
      <section className="container noticia-detalle">
        <h1>Noticia no encontrada</h1>
        <Link to="/" className="ver-mas">Volver a Inicio</Link>
      </section>
    )
  }

  return (
    <section className="container noticia-detalle">
      {noticia.imagen ? (
        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          className="noticia-detalle-imagen"
          style={{
            objectFit: noticia.id === 5 ? 'contain' : 'cover',
            objectPosition: 'center'
          }}
        />
      ) : (
        <div className="noticia-detalle-imagen"></div>
      )}
      <p className="noticia-detalle-fecha">{noticia.fecha}</p>
      <h1>{noticia.titulo}</h1>
      <div className="noticia-detalle-texto">
        {noticia.contenidoCompleto.split('\n\n').map((parrafo, index) => (
          <p key={index} style={{ marginBottom: '16px' }}>{parrafo}</p>
        ))}
      </div>
      {noticia.albumId && (
        <Link to={`/galeria#${noticia.albumId}`} className="ver-mas">
          Ver álbum de fotos completo →
        </Link>
      )}
    </section>
  )
}

export default NoticiaDetalle