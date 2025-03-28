import About from './components/About.jsx'
import CifrasBox from './components/CifrasBox.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Viajes from './components/Viajes.jsx'
import Contact from './components/Contact.jsx'
import './globals.css'
import Vehiculo from './components/Vehiculo.jsx'
import Footer from './components/Footer.jsx'
import Pagos from './components/Pagos.jsx'

function App() {
  return (
    <>
      <div className="full-container">
        <Header logo="/public/logo.png" marca="FénixCar" />
        <main>
          <Hero transporte='../public/furgoneta-hero.png' />
          <About />
          <Vehiculo />
          <CifrasBox clientesSatisfechos="942" viajes="268" />
          <Viajes />
          <Pagos />
          {window.innerWidth < 600 &&
            <Contact />
          }
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
