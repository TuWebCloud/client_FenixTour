export default function Contact () {
    return (
        <>
            <section className="section-contact">
                <h2>Contáctanos</h2>
                <h3>Con un solo click</h3>
                <div>
                    <button>
                        <img src="/public/icons/call.svg" alt="Teléfono" />
                        Llamar
                    </button>
                    <button>
                        <img src="/public/icons/whatsapp.svg" alt="Whatsapp" />
                        Escribir
                    </button>
                </div>
                <p>
                    <img src="/public/icons/location-pin.svg" alt="Ubicación" />
                    Calle, No.#, Reparto, Holguín, Holguín.
                </p>
                <p>
                    <img src="/public/icons/tag.svg" alt="Teléfono" />
                    +53 42424242
                </p>
            </section>
            <style jsx>{`
                .section-contact {
                    height: auto;
                    padding-bottom: 40px;
                }
                .section-contact h2 {
                    display: block;
                    text-align: center;
                    padding: 40px 0 12px;
                    font-size: 45px;
                }
                .section-contact h2::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 280px;
                    background-color: #00000055;
                    top: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .section-contact h3 {
                    margin-top: -18px;
                    color: #00000077;
                }
                .section-contact p {
                    display: flex;
                    margin: 10px 5% 0;
                    font-size: 20px;
                }
                .section-contact p img {
                    width: 30px;
                    margin-right: 8px;
                }
                .section-contact div {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    gap: 20px;
                }
                .section-contact div button {
                    display: flex;
                    place-content: center;
                    margin-top: 20px;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 20px;
                    background-color: rgb(232, 114, 40);
                    color: #fff;
                    font-size: 30px;
                    gap: 10px;
                    transition: all .2s ease;
                }
                .section-contact div button:hover {
                    background-color: rgb(203, 100, 36);
                }
                .section-contact div button img {
                    width: 40px;
                }
            `}</style>
        </>
    )
}