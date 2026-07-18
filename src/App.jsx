import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App