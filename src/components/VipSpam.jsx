export default function VipSpam () {
    return (
        <>
            <section className="section-vip">
                <h2>Servicio <span>VIP</span></h2>
                <h3>Mejora tu Experiencia</h3>
                <p>
                    Disfruta de refrigerios, un traductor y guía turístico en nuestros traslados. Comodidad y 
                    asistencia asegurada en cada viaje.
                </p>
            </section>
            <style jsx>{`
                .section-vip {
                    height: auto;
                    box-shadow: 0 5px 15px #00000055;
                }
                .section-vip h2 {
                    display: block;
                    text-align: center;
                    padding: 20px 0 12px;
                    font-size: 45px;
                }
                .section-vip h2::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 280px;
                    background-color: #00000055;
                    top: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .section-vip h3 {
                    margin-top: -18px;
                    color: #00000077;
                }
                .section-vip p {
                    margin: 4%;
                    font-size: 24px;
                }
            `}</style>
        </>
    )
}