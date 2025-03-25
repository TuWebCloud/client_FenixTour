import { useEffect, useState } from 'react'
import ServiceQuest from './ServiceQuest'
import './styles/Hero.css'

export default function Hero ({ transporte }) {
    const [vehiculo, setVehiculo] = useState('./public/furgoneta-hero.png')
    
    useEffect(() => {
        if (window.innerWidth >= 600) {
            setVehiculo('/public/microbus-pc2.png')
        }
    }, [])

    return (
        <section className='section-hero'>
            <h2 className='subtitulo-hero'>Viaja con <br/>
            {window.innerWidth >= 600 &&
                <>nosotros</>
            }
            {window.innerWidth < 600 &&
                <span>nosotros</span>
            }
            </h2>
            {window.innerWidth >= 600 &&
                <h3 className='subtitulo-pc'>Hasta cualquier <br/>rincón de Cuba</h3>
            }
            <img src={vehiculo} alt="Microbus" className='microbus-img' />
            <img src='../../public/cuba.svg' alt="Mapa de Cuba" className='cuba-img' />

            {window.innerWidth < 600 &&
                <>
                    <div className="layer-1"></div>
                    <div className="layer-2"></div>
                    <div className="layer-3"></div>
                    <div className="layer-4">
                        <div className="color-1 color"></div>
                        <div className="color-2 color"></div>
                        <div className="color-3 color"></div>
                        <div className="color-4 color"></div>
                    </div>
                </>
            }

            <section>
                <div>
                    {window.innerWidth < 600 &&
                        <>
                        <h2>Viajes a todo el país</h2>
                        <h3>¿A dónde quieres ir?</h3>
                        </>
                    }
                    {window.innerWidth >= 600 &&
                        <>
                        <h2>¿A dónde quieres ir?</h2>
                        </>
                    }
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