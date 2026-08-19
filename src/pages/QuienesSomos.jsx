import { useState } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function QuienesSomos() {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="quienes-intro">
          <p>
            "Resistencia Merece Crecer" es una línea interna que nace de las raíces mismas del pueblo.
            Surgimos de la unión de referentes sociales y militantes justicialistas autoconvocados de
            distintos sectores de la ciudad. A partir de diversos encuentros políticos, decidimos conformar
            este espacio, convencidos de que, tanto en la vida como en la política, nadie te regala nada:
            uno mismo debe construir su propio futuro.
          </p>
        </div>

        <div className="mision-section">
          <div className="mision-texto">
            <h2>Nuestra Misión</h2>
            <p>
              Trabajamos para transformar nuestra comunidad. Creemos que la organización popular es una
              herramienta fundamental para construir un futuro con mayor justicia social. Nuestro compromiso
              es representar las necesidades reales de los vecinos, defender sus derechos y trabajar codo a
              codo con cada barrio de Resistencia.
            </p>
            <p>
              Creemos firmemente que cada persona debe ser artífice de su propio destino. Por eso, nadie puede
              quedar afuera de este proyecto. Este es un espacio para aportar tus ideas, experiencia,
              conocimiento y coraje, y para construir colectivamente la Resistencia que queremos.
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

        <div className="quienes-encuentro">
          <p>📍 Te esperamos todos los martes a las 19:00 hs. en nuestra sede: Dodero 21, Resistencia.</p>
        </div>

        
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