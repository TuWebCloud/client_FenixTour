export default function Pagos () {
    return (
        <>
            <section className="section-pagos" id="pagos">
                <h2>Métodos de Pago</h2>
                <h3>Tu viaje, tus reglas</h3>
                <p>
                    El precio variará en dependencia de la distancia y el tiempo que tome el viaje, y será acordado 
                    con la persona a cargo. Aceptamos transferencia y efectivo, siéntete libre de pagarnos de la forma que más te acomode...
                </p>
                <div>
                    <img src="/public/bpa.png" alt="" />
                    <img src="/public/bandec.jpg" alt="" />
                    <img src="/public/metropolitano.jpg" alt="" />
                    <img src="/public/zelle.png" alt="" />
                </div>
                <h3>Aceptamos: </h3>
                <div>
                    <div>CUP</div>
                    <div>USD</div>
                    <div>MLC</div>
                </div>
            </section>
            <style jsx>{`
                .section-pagos {
                    height: auto;
                    box-shadow: 0 8px 20px #00000055;
                }
                .section-pagos h2 {
                    display: block;
                    text-align: center;
                    padding: 20px 0 12px;
                    font-size: 45px;
                }
                .section-pagos h2::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 280px;
                    background-color: #00000055;
                    top: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .section-pagos h3:nth-child(2) {
                    margin-top: -18px;
                    color: #00000077;
                }
                .section-pagos p {
                    margin: 4%;
                    font-size: 24px;
                }
                .section-pagos h3:nth-child(5) {
                    display: inline;
                    text-align: left;
                    margin: 0 4%;
                    font-size: 30px;
                    font-weight: 600;
                }
                .section-pagos div:not(.section-pagos div div) {
                    display: flex;
                    flex-wrap: wrap;        
                    padding: 4px 4% 20px;
                    gap: 15px;
                }
                .section-pagos div div {
                    font-size: 20px;
                    font-weight: 900;
                    color: #fff;
                    vertical-align: middle;
                    letter-spacing: 2px;
                    border-radius: 10px;
                    padding: 2px 8px;
                    background-color: rgb(232, 114, 40);
                }
                .section-pagos div:nth-child(4) {
                    justify-content: center;
                    margin: 15px 0;
                }
                .section-pagos div img {
                    height: 28px;
                }
            `}</style>
        </>
    )
}