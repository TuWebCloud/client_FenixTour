'use client'

export default function CifrasBox ({ clientesSatisfechos, viajes }) {
    return (
        <>
            <section className="section-cifras">
                <div>
                    <div>
                        <img src="/public/icons/happy-face.svg" alt="Cara Feliz" />
                        <p>+&nbsp;{clientesSatisfechos}</p>
                    </div>
                    <p>Clientes Satisfechos</p>
                </div>
                <div>
                    <div>
                        <img src="/public/icons/car.svg" alt="viajes" />
                        <p>+&nbsp;{viajes}</p>
                    </div>
                    <p>Total de Viajes</p>
                </div>
            </section>
            <style jsx>{`
                .section-cifras {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    background-color: #fff;
                    width: calc(100vw - 16%);
                    padding: 8%;
                    gap: 20px;
                    height: auto;
                }
                .section-cifras div {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: center;
                }
                .section-cifras div div {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .section-cifras div div p {
                    color: #f4bd0a;
                    font-size: 30px;
                    font-weight: 600;
                }
                .section-cifras div p {
                    font-size: 20px;
                    font-weight: 600;
                    text-align: center;
                    color: #00000099;
                }
                .section-cifras img {
                    height: 60px;
                }
            `}</style>
        </>
    )
}