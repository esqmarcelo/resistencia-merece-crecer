import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SwipeWrapper from './components/SwipeWrapper'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Header />
      <SwipeWrapper>
        <div className="page-content" key={location.pathname}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </SwipeWrapper>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App