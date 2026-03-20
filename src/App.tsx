import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CadenasTransportadoras from './pages/CadenasTransportadoras'
import CadenasTransmision from './pages/CadenasTransmision'
import CadenasAgricultura from './pages/CadenasAgricultura'
import CadenasBalanza from './pages/CadenasBalanza'
import CadenasEslabonadas from './pages/CadenasEslabonadas'
import Poleas from './pages/Poleas'
import Pinones from './pages/Pinones'
import Acoplamientos from './pages/Acoplamientos'
import OtrosProductos from './pages/OtrosProductos'
import Nosotros from './pages/Nosotros'
import Contactenos from './pages/Contactenos'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadenas/transportadoras" element={<CadenasTransportadoras />} />
          <Route path="/cadenas/transmision" element={<CadenasTransmision />} />
          <Route path="/cadenas/agricultura" element={<CadenasAgricultura />} />
          <Route path="/cadenas/balanza" element={<CadenasBalanza />} />
          <Route path="/cadenas/eslabonadas" element={<CadenasEslabonadas />} />
          <Route path="/poleas" element={<Poleas />} />
          <Route path="/pinones" element={<Pinones />} />
          <Route path="/acoplamientos" element={<Acoplamientos />} />
          <Route path="/otros-productos" element={<OtrosProductos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactenos" element={<Contactenos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
