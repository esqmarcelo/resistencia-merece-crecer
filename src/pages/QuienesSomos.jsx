import { useState } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function QuienesSomos() {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  return (
    <section>
      <div className="container">
        

        <div className="mision-section">
          <div className="mision-texto">
            <h2>Nuestra Misión</h2>
            <p>
              En Resistencia Merece Crecer trabajamos para transformar nuestra comunidad. Creemos que la
              organización popular es la herramienta más poderosa para construir un futuro con más justicia
              social.
            </p>
            <p>
              Nuestro compromiso es representar las necesidades reales de los vecinos, defendiendo sus
              derechos y trabajando codo a codo con cada barrio de Chaco.
            </p>
          </div>
          <div className="mision-imagen">
            <img
              src="/quienesomos.jpg"
              alt="Resistencia Merece Crecer"
              onClick={() => setImagenAmpliada(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer' }}
            />
          </div>
        </div>

        <h2>Nuestras Propuestas</h2>
        {imagenAmpliada && (
          <div className="imagen-modal" onClick={() => setImagenAmpliada(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <button
                className="imagen-modal-cerrar"
                onClick={(e) => {
                  e.stopPropagation()
                  setImagenAmpliada(false)
                }}
              >
                ✕
              </button>
              <Zoom>
                <img src="/quienesomos.jpg" alt="Resistencia Merece Crecer" className="imagen-modal-img" />
              </Zoom>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default QuienesSomos