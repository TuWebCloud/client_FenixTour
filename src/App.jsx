import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import CifrasBox from './components/CifrasBox.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Viajes from './components/Viajes.jsx';
import Contact from './components/Contact.jsx';
import './globals.css';
import Vehiculo from './components/Vehiculo.jsx';
import Footer from './components/Footer.jsx';
import Pagos from './components/Pagos.jsx';
import Register from './Register.jsx';

function App() {
  return (
    <Router>
      <div className="full-container">
        <Header logo="/public/logo.webp" marca="FenixTour" />
        <main>
          <Routes>
            {/* Página principal */}
            <Route exact path="/" element={
              <>
              <Hero transporte="/public/furgoneta-hero.webp" />
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