import InfoBox from "./InfoBox";
import ViajePil from "./ViajePil";
import ViajeProgramado from "./ViajeProgramado";

export default function Viajes () {
    return ( // TODO - destinos frecuentes debajo de cada viaje
        <>
            <section className="section-viajes" id="viajes">
                <h2>Ofertas de Viaje</h2>
                <h3>Tu destino lo eliges tú</h3>
                {window.innerWidth < 600 &&
                    <>
                    <ViajeProgramado 
                        fecha="9/4"
                        inicio="Holguín"
                        destino="Las Tunas"
                        hSalida="2:00pm"
                        hRetorno="6:00pm"
                        pasajeros="4" />
                    <InfoBox titulo="Locales" bg="/public/la-periquera.webp">
                    <p>Coordina viajes a múltiples lugares de la provincia, ya sea <br/>a playas, restaurantes o aeropuertos.</p>
                    </InfoBox>
                    <div className="pil-container">
                        <ViajePil>Banes</ViajePil>
                        <ViajePil>Moa</ViajePil>
                        <ViajePil>Gibara</ViajePil>
                        <ViajePil>...</ViajePil>
                    </div>
                    <InfoBox titulo="Interprovinciales" bg="/public/la-habana-info.webp">
                        <p>Si necesitas viajar hacia otra provincia no es un problema, con nosotros puedes trasladarte de 
                        un extremo a otro del país.</p>
                    </InfoBox>
                    <div className="pil-container">
                        <ViajePil>La Habana</ViajePil>
                        <ViajePil>Santiago de Cuba</ViajePil>
                        <ViajePil>Las Tunas</ViajePil>
                        <ViajePil>...</ViajePil>
                    </div>
                    <InfoBox titulo="Turísticos" bg="/public/playa-info.webp">
                        <p>Te llevaremos a cualquier punto de interés turístico que desees, desde hoteles y campismos 
                        hasta recorridos históricos.</p>
                    </InfoBox>
                    <div className="pil-container">
                        <ViajePil>Guardalavaca</ViajePil>
                        <ViajePil>Cayo Bariay</ViajePil>
                        <ViajePil>...</ViajePil>
                    </div>
                    </>
                }
                {window.innerWidth >= 600 &&
                    <>
                    <ViajeProgramado 
                        fecha="9/4"
                        inicio="Holguín"
                        destino="Las Tunas"
                        hSalida="2:00pm"
                        hRetorno="6:00pm"
                        pasajeros="4" />
                    <div className="infoBox-container">                      
                        <InfoBox titulo="Locales" bg="/public/la-periquera.webp" loading="lazy">
                            <p>Coordina viajes a múltiples lugares de la provincia, ya sea <br/>a playas, restaurantes o aeropuertos.</p>
                            <div className="pil-container">
                                <ViajePil>Banes</ViajePil>
                                <ViajePil>Moa</ViajePil>
                                <ViajePil>Gibara</ViajePil>
                                <ViajePil>...</ViajePil>
                            </div>
                        </InfoBox>
                        <InfoBox titulo="Interprovinciales" bg="/public/la-habana-info.webp" loading="lazy">
                            <p>Si necesitas viajar hacia otra provincia no es un problema, con nosotros puedes trasladarte de 
                            un extremo a otro del país.</p>
                            <div className="pil-container">
                                <ViajePil>La Habana</ViajePil>
                                <ViajePil>Las Tunas</ViajePil>
                                <ViajePil>Santiago de Cuba</ViajePil>
                                <ViajePil>...</ViajePil>
                            </div>
                        </InfoBox>
                        <InfoBox titulo="Turísticos" bg="/public/playa-info.webp" loading="lazy">
                            <p>Te llevaremos a cualquier punto de interés turístico que desees, desde hoteles y campismos 
                            hasta recorridos históricos.</p>
                            <div className="pil-container">
                                <ViajePil>Guardalavaca</ViajePil>
                                <ViajePil>Cayo Bariay</ViajePil>
                                <ViajePil>...</ViajePil>
                            </div>
                        </InfoBox>
                    </div>
                    </>
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
                    gap: 20px;
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
                .section-viajes h3:not(.infoBox h3, .article-programa h3) {
                    margin-top: -31px;
                    color: #ffffff77;
                }

                .pil-container {
                    margin-top: -16px;
                    width: calc(100% - 16%);
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 8px;
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
