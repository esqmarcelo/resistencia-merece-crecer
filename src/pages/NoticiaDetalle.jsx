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
      <img src={noticia.imagen} alt={noticia.titulo} className="noticia-detalle-imagen" />
      <p className="noticia-detalle-fecha">{noticia.fecha}</p>
      <h1>{noticia.titulo}</h1>
      <p className="noticia-detalle-texto">{noticia.contenidoCompleto}</p>
      <Link to={`/galeria#${noticia.albumId}`} className="ver-mas">
        Ver álbum de fotos completo →
      </Link>
    </section>
  )
}

export default NoticiaDetalle