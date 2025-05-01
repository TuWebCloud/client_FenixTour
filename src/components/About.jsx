export default function About () {
    return (
        <>
            <section className="section-about" id="about">
                {window.innerWidth < 600 &&
                    <>
                    <h2><span>¿</span>Quiénes Somos<span>?</span></h2>
                    <h3>Alquiler de microbus</h3>
                    <p>
                        <span>&gt; </span>Somos una empresa dedicada al transporte de personas radicada en Holguín, 
                        puedes contar con nosotros para cualquier viaje dentro del país, los límites los pones tú! 
                        Disponemos de un microbus de 14 plazas, que cuenta con un chofer experimentado y un servicio de mecánico 
                        para garantizar la seguridad y el confort del recorrido. Olvídate de depender del transporte público, 
                        es hora de que te relajes y disfrutes del trayecto.
                    </p>
                    </>
                }
                {window.innerWidth >= 600 &&
                    <>
                    <div className="about-text">
                        <h2><span>¿</span>Quiénes Somos<span>?</span></h2>
                        <h3>Alquiler de microbus</h3>
                        <p>
                            <span>&gt; </span>Somos una empresa dedicada al transporte de personas radicada en Holguín, 
                            puedes contar con nosotros para cualquier viaje dentro del país, los límites los pones tú! 
                            Disponemos de un microbus de 15 plazas, que cuenta con un chofer experimentado y un servicio de mecánico 
                            para garantizar la seguridad y el confort del recorrido. Olvídate de depender del transporte público, 
                            es hora de que te relajes y disfrutes del trayecto.
                        </p>
                    </div>
                    <div className="about-img">
                        <img src="/public/furgoneta.webp" alt="furgoneta" loading="lazy" />
                    </div>
                    </>
                }
            </section>
            <style jsx>{`
                .section-about {
                    background-color: #151515;
                    height: auto;
                    padding-bottom: 40px;
                    gap: 20px;
                }
                .section-about h2 {
                    position: relative;
                    display: block;
                    text-align: center;
                    color:  #fff;
                    padding: 40px 0 12px;
                    font-size: 45px;
                }
                .section-about h2::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 280px;
                    background-color: #ffffff55;
                    top: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .section-about h3 {
                    margin-top: -36px;
                    color: #ffffff77;
                }
                .section-about p {
                    margin: 4%;
                    color:  #fff;
                    font-size: 24px;
                }
            `}</style>
        </>
    )
}