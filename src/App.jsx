import About from './components/About.jsx'
import CifrasBox from './components/CifrasBox.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Viajes from './components/Viajes.jsx'
import VipSpam from './components/VipSpam.jsx'
import Contact from './components/Contact.jsx'
import './globals.css'

function App() {
  return (
    <>
      <Header logo="/public/logo.png" marca="FénixCar" />
      <main>
        <Hero transporte='../public/microbus.webp' />
        <About />
        <CifrasBox clientesSatisfechos="942" viajes="268" />
        <Viajes />
        <VipSpam />
        <Contact />
      </main>
    </>
  )
}

export default App
