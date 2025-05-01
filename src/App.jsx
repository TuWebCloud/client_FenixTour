import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './layouts/About.jsx';
import CifrasBox from './components/CifrasBox.jsx';
import Header from './layouts/Header.jsx';
import Hero from './layouts/Hero.jsx';
import Viajes from './layouts/Viajes.jsx';
import Contact from './layouts/Contact.jsx';
import './globals.css';
import Vehiculo from './layouts/Vehiculo.jsx';
import Footer from './layouts/Footer.jsx';
import Pagos from './layouts/Pagos.jsx';
import Register from './Register.jsx';

function App() {
  return (
    <Router>
      <div className="full-container">
        <Header logo="/logo.webp" marca="FenixTour" />
        <main>
          <Routes>
            {/* Página principal */}
            <Route exact path="/" element={
              <>
              <Hero transporte="/furgoneta-hero.webp" />
              <About />
              <Vehiculo />
              <CifrasBox clientesSatisfechos="83" viajes="12" />
              <Viajes />
              <Pagos />
              {window.innerWidth < 600 && <Contact />}  
              </>            
            } />

            {/* Página de gestión de registros */}
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;