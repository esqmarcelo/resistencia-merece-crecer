import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'

function Contacto() {
  return (
    <>
      <section className="container contacto-redes">
        <h2>Queremos escucharte</h2>
        <p className="contacto-intro">
          Construyamos juntos la ciudad que queremos. Tu voz, tus ideas y tus inquietudes
          son fundamentales para transformar nuestra realidad. Escribinos, sumate a
          nuestras redes y seamos parte del impulso que Resistencia necesita.
        </p>

        <div className="redes-grid">
          <div className="red-card">
            <div className="red-icon-circle red-icon-whatsapp">
              <FaWhatsapp size={32} />
            </div>
            <h3>WhatsApp</h3>
            <p>Escribinos un mensaje directo</p>
            <a href="#" className="red-btn red-btn-whatsapp">
              Enviar mensaje
            </a>
          </div>
          <div className="red-card">
            <div className="red-icon-circle red-icon-instagram">
              <FaInstagram size={32} />
            </div>
            <h3>Instagram</h3>
            <p>Seguí nuestro día a día</p>
            <a
              href="https://instagram.com/resistenciamerececrecer"
              target="_blank"
              rel="noopener noreferrer"
              className="red-btn red-btn-instagram"
            >
              Seguir en Instagram
            </a>
          </div>
          <div className="red-card">
            <div className="red-icon-circle red-icon-facebook">
              <FaFacebookF size={32} />
            </div>
            <h3>Facebook</h3>
            <p>Unite a nuestra comunidad</p>
            <a
              href="https://facebook.com/resistenciamerececrecer"
              target="_blank"
              rel="noopener noreferrer"
              className="red-btn red-btn-facebook"
            >
              Ir a Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto