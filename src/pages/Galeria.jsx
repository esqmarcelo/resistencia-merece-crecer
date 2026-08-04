function Galeria() {
  const fotos = Array.from({ length: 9 })

  return (
    <section className="container galeria-section">
      <h1>Galería</h1>
      <div className="galeria-grid">
        {fotos.map((_, index) => (
          <div className="galeria-item" key={index}></div>
        ))}
      </div>
    </section>
  )
}

export default Galeria