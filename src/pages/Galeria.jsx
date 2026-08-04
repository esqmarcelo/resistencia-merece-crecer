function Galeria() {
  const imagenes = Array.from({ length: 9 })
  const videos = Array.from({ length: 9 })

  return (
    <section className="container galeria-section">
      <h2 className="galeria-subtitulo">Imágenes</h2>
      <div className="galeria-grid">
        {imagenes.map((_, index) => (
          <div className="galeria-item" key={index}></div>
        ))}
      </div>

      <h2 className="galeria-subtitulo">Videos</h2>
      <div className="galeria-grid">
        {videos.map((_, index) => (
          <div className="galeria-item" key={index}></div>
        ))}
      </div>
    </section>
  )
}

export default Galeria