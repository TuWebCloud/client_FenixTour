import Moneda from '../components/Moneda'

export default function Pagos () {
    return (
        <>
            <section className="section-pagos" id="pagos">
                <h2>Métodos de Pago</h2>
                <h3 className='frase'>Tu viaje, tus reglas</h3>
                {window.innerWidth < 600 &&
                    <>
                    <p>
                    Aceptamos pagos por transferencia bancaria y en efectivo. Siéntete libre de pagarnos de la forma que más te acomode...
                    </p>
                    <h3 className='aceptamos'>Aceptamos:</h3>
                    <div>
                        <Moneda name='CUP' isBpa isBandec isMetropolitano />
                        <Moneda name='MLC' isBpa isBandec />
                        <Moneda name='USD' isZelle noBorder/>
                    </div>
                    </>
                }
                {window.innerWidth >= 600 &&
                    <>
                    <p>
                    Aceptamos pagos por transferencia bancaria y en efectivo.<br/>Siéntete libre de pagarnos de la forma que más te acomode...
                    </p>
                    <div className='aceptamos-container'>
                        <h3 className='aceptamos'>Aceptamos:</h3>
                        <div>
                            <Moneda name='CUP' isBpa isBandec isMetropolitano />
                            <Moneda name='MLC' isBpa isBandec />
                            <Moneda name='USD' isZelle noBorder/>
                        </div>
                    </div>
                    </>
                }
            </section>
            <style jsx>{`
                .section-pagos {
                    height: auto;
                    box-shadow: 0 15px 30px #0000003d;
                    place-items: center;
                    padding: 0 0 40px;
                }
                .section-pagos h2 {
                    position: relative;
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
                .frase {
                    margin-top: -18px;
                    color: #00000077;
                }
                .section-pagos p {
                    margin: 2% 4%;
                    font-size: 24px;
                }
                .aceptamos {
                    display: inline;
                    text-align: left;
                    margin: 20px 4%;
                    font-size: 30px;
                    font-weight: 600;
                }
                .section-pagos div:not(.article-moneda div) {
                    display: flex;
                    flex-direction: column;
                    margin: 0 4%;
                }

                .aceptamos-container {
                    border-radius: 20px;
                    border: 1px solid #00000055;
                    width: 500px;
                    margin-left: 50%;
                }

                @media screen and (max-width: 380px) {
                    .section-pagos p {
                        text-align: center
                    }
                }
            `}</style>
        </>
    )
}