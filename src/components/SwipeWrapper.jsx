import { useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

const routes = ['/', '/quienes-somos', '/galeria', '/contacto']

function SwipeWrapper({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const currentIndex = routes.indexOf(location.pathname)
  const safeIndex = currentIndex === -1 ? 0 : currentIndex

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const nextIndex = (safeIndex + 1) % routes.length
      navigate(routes[nextIndex])
    },
    onSwipedRight: () => {
      const previousIndex = (safeIndex - 1 + routes.length) % routes.length
      navigate(routes[previousIndex])
    },
  })

  return (
    <div {...handlers} className="swipe-area">
      {children}
      <div className="swipe-hint">
        <span>‹</span>
        <span>Deslizá para navegar</span>
        <span>›</span>
      </div>
    </div>
  )
}

export default SwipeWrapper