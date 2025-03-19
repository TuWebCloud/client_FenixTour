import ServiceLink from './ServiceLink'
import './styles/Hero.css'

export default function Hero ({ transporte }) {
    return (
        <section className='section-hero'>
            <h2 className='subtitulo-hero'>Elige tu <br/><span>destino</span></h2>
            <img src={transporte} alt="Microbus" className='microbus-img' />
            <img src='../../public/cuba.svg' alt="Mapa de Cuba" className='cuba-img' />

            <div className="layer-1"></div>
            <div className="layer-2"></div>
            <div className="layer-3"></div>
            <div className="layer-4">
                <div className="color-1 color"></div>
                <div className="color-2 color"></div>
                <div className="color-3 color"></div>
                <div className="color-4 color"></div>
            </div>

            <section>
                <div>
                    <h2>Viajes a todo el país</h2>
                    <h3>¿A dónde quieres ir?</h3>
                </div>
                <ServiceLink
                    image="../../public/playa.webp"
                    icono="../../public/icons/hiking.svg"
                    text="De excursión?" />
                <ServiceLink
                    image="../../public/la-habana.webp"
                    icono="../../public/icons/map.svg"
                    text="A otra provincia?" />
                <ServiceLink
                    image="../../public/aeropuerto.webp"
                    icono="../../public/icons/plane.svg"
                    text="A un aeropuerto?" />
                <h3>¿Algo más en mente? <span>Dínoslo</span></h3>
            </section>
        </section>
    )
}