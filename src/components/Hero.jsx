import ServiceQuest from './ServiceQuest'
import './styles/Hero.css'

export default function Hero ({ transporte }) {
    return (
        <section className='section-hero'>
            <h2 className='subtitulo-hero'>Viaja con <br/><span>nosotros</span></h2>
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
                <ServiceQuest
                    icono="../../public/icons/hiking.svg"
                    text="¿De excursión?" />
                <ServiceQuest
                    icono="../../public/icons/map.svg"
                    text="¿A otra provincia?" />
                <ServiceQuest
                    icono="../../public/icons/plane.svg"
                    text="¿A un aeropuerto?" />
                <h3>¿Algo más en mente? <span>Dínoslo</span></h3>
            </section>
        </section>
    )
}