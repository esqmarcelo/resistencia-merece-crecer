import { useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

const rutas = [
  { path: '/', label: 'Inicio' },
  { path: '/quienes-somos', label: 'Quiénes Somos' },
  { path: '/galeria', label: 'Galería' },
  { path: '/contacto', label: 'Contacto' },
]

function SwipeWrapper({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const currentIndex = rutas.findIndex((ruta) => ruta.path === location.pathname)
  const safeIndex = currentIndex === -1 ? 0 : currentIndex

  const irSiguiente = () => {
    const nextIndex = (safeIndex + 1) % rutas.length
    navigate(rutas[nextIndex].path)
  }

  const irAnterior = () => {
    const previousIndex = (safeIndex - 1 + rutas.length) % rutas.length
    navigate(rutas[previousIndex].path)
  }

  const handlers = useSwipeable({
    onSwipedLeft: irSiguiente,
    onSwipedRight: irAnterior,
  })

  return (
    <div {...handlers} className="swipe-area">
      {children}
      <button className="swipe-arrow swipe-arrow-left" onClick={irAnterior}>
        ‹
      </button>
      <button className="swipe-arrow swipe-arrow-right" onClick={irSiguiente}>
        ›
      </button>
      <div className="section-dots">
        {rutas.map((ruta) => (
          <span
            key={ruta.path}
            className={`dot ${location.pathname === ruta.path ? 'dot-active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default SwipeWrapper