import InfoBox from "./InfoBox";

export default function Viajes () {
    return (
        <>
            <section className="section-viajes" id="viajes">
                <h2>Ofertas de Viaje</h2>
                <h3>Tu destino lo eliges tú</h3>
                {window.innerWidth < 600 &&
                    <>
                    <InfoBox titulo="Locales" bg="/public/la-periquera.webp">
                    Coordina viajes a múltiples lugares de la provincia, ya sea <br/>a playas, restaurantes o aeropuertos.
                    </InfoBox>
                    <InfoBox titulo="Interprovinciales" bg="/public/la-habana-info.webp">
                        Si necesitas viajar hacia otra provincia no es un problema, con nosotros puedes trasladarte de 
                        un extremo a otro del país.
                    </InfoBox>
                    <InfoBox titulo="Turísticos" bg="/public/playa-info.webp">
                        Te llevaremos a cualquier punto de interés turístico que desees, desde hoteles y campismos 
                        hasta recorridos históricos.
                    </InfoBox>
                    </>
                }
                {window.innerWidth >= 600 &&
                    <div className="infoBox-container">
                        <InfoBox titulo="Locales" bg="/public/la-periquera.webp">
                        Coordina viajes a múltiples lugares de la provincia, ya sea <br/>a playas, restaurantes o aeropuertos.
                        </InfoBox>
                        <InfoBox titulo="Interprovinciales" bg="/public/la-habana-info.webp">
                            Si necesitas viajar hacia otra provincia no es un problema, con nosotros puedes trasladarte de 
                            un extremo a otro del país.
                        </InfoBox>
                        <InfoBox titulo="Turísticos" bg="/public/playa-info.webp">
                            Te llevaremos a cualquier punto de interés turístico que desees, desde hoteles y campismos 
                            hasta recorridos históricos.
                        </InfoBox>
                    </div>
                }
            </section>
            <style jsx>{`
                .section-viajes {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: auto;
                    background-color: #151515;
                    padding-bottom: 40px;
                    gap: 15px;
                }
                .section-viajes h2 {
                    position: relative;
                    display: block;
                    text-align: center;
                    color:  #fff;
                    padding: 40px 0 12px;
                    font-size: 45px;
                }
                .section-viajes h2::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 280px;
                    background-color: #ffffff55;
                    top: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .section-viajes h3:not(.infoBox h3) {
                    margin-top: -31px;
                    color: #ffffff77;
                }

                .infoBox-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                    gap: 40px;
                }
                .infoBox-container div {
                    height: 220px;
                }
            `}</style>
        </>
    )
}