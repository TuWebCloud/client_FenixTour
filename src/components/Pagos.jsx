import Moneda from './Moneda'

export default function Pagos () {
    return (
        <>
            <section className="section-pagos" id="pagos">
                <h2>Métodos de Pago</h2>
                <h3 className='frase'>Tu viaje, tus reglas</h3>
                <p>
                    El precio variará en dependencia de la distancia y el tiempo que tome el viaje, y será acordado 
                    con la persona a cargo. Aceptamos transferencia y efectivo, siéntete libre de pagarnos de la forma que más te acomode...
                </p>
                <h3 className='aceptamos'>Aceptamos:</h3>
                <div>
                    <Moneda name='CUP' isBpa isBandec isMetropolitano />
                    <Moneda name='MLC' isBpa isBandec />
                    <Moneda name='USD' isZelle />
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
                .frase {
                    margin-top: -18px;
                    color: #00000077;
                }
                .section-pagos p {
                    margin: 4%;
                    font-size: 24px;
                }
                .aceptamos {
                    display: inline;
                    text-align: left;
                    margin: 20px 4%;
                    font-size: 30px;
                    font-weight: 600;
                }
                .section-pages div {
                    display: flex;
                    flex-direction: column;
                    margin: 0 4%;
                    gap: 10px;
                }
            `}</style>
        </>
    )
}