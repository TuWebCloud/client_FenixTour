export default function Vehiculo () {
    return (
        <>
            <section className="section-vehiculo">
                <h2>Vehículo</h2>
                <h3>Características</h3>
                <div className="bento">
                    <p>Mercedes Benz 2019 Sprinter</p>
                    <div>
                        <img src="/public/furgoneta-interior.jpg" alt="Interior" />
                    </div>
                    <div>
                        <img src="/public/furgoneta-2.jpg" alt="Furgoneta" />
                    </div>
                    <div>
                        <img src="/public/furgoneta.jpg" alt="Furgoneta" />
                    </div>
                </div>
                <ul>
                    <li>Compartimento para equipaje</li>
                    <li>Kit de primeros auxilios</li>
                    <li>15 capacidades</li>
                    <li>Aire acondicionado</li>
                    <li>Salida de video</li>
                    <li>Salida de música</li>
                    <li>Entrada de puerto C</li>
                </ul>
            </section>
            <style jsx>{`
                .section-vehiculo {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: auto;
                    background-color: #151515;
                    padding-bottom: 80px;
                    gap: 15px;
                }
                .section-vehiculo h2 {
                    display: block;
                    text-align: center;
                    color:  #fff;
                    padding: 40px 0 12px;
                    font-size: 45px;
                }
                .section-vehiculo h2::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 280px;
                    background-color: #ffffff55;
                    top: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                } 
                .section-vehiculo h3 {
                    margin-top: -31px;
                    color: #ffffff77;
                }
                .section-vehiculo li {
                    color: #ffffff99;
                    font-size: 24px;
                    font-weight: 100;
                }

                .bento {
                    display: grid;
                    margin: 4%;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: 130px 70px 120px;
                    gap: 10px;
                }
                .bento p {
                    grid-column: 1 / 2;
                    grid-row: 1 / 3;
                    color: #fff;
                    font-size: 40px;
                }
                .bento div:nth-child(3) {
                    grid-column: 2 / 3;
                    grid-row: 2 / 4;
                }
                .bento div {
                    background-color: #fff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px #00000099;
                }
                .bento div img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </>
    )
}