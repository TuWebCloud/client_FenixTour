export default function Footer () {
    const handleWpp = () => {
        window.location.href = 'https://wa.me/+5352427622?text=Hola'
    }

    return (
        <>
            <footer id="footer">
                {window.innerWidth > 600 &&
                    <>
                    <h2>Contáctanos</h2>
                    <p>Teléfono: +53 54545454</p>
                    <div className="footer-contact">
                        <button onClick={handleWpp}>
                            <div>
                                <img src="/public/icons/whatsapp-black.svg" alt="whatsapp" />
                                <p>Escríbenos ya!</p>
                            </div>
                        </button>
                        <button>
                            <div>
                                <img src="/public/icons/instagram-black.svg" alt="instagram" />
                                <p>Síguenos en Instagram</p>
                            </div>
                        </button>
                        <button>
                            <div>
                                <img src="/public/icons/facebook-black.svg" alt="facebook" />
                                <p>Síguenos en Facebook</p>
                            </div>
                        </button>
                    </div>
                    </>
                }
                {window.innerWidth < 600 &&
                    <div>
                        <img src="/public/icons/instagram.svg" alt="Instagram" />
                        <img src="/public/icons/facebook.svg" alt="Facebook" />
                    </div>
                }
                <p>Holguín, Holguín, Cuba.</p>
                <p className="copyright">2025 &copy; Creado por TuWeb<br/>Todos los derechos reservados.</p>
            </footer>
            <style jsx>{`
                footer {
                    display: grid;
                    place-content: center;
                    border-top: 1px solid #fff;
                    height: auto;
                    width: 100vw;
                    background-color: #151515;
                }
                footer div {
                    display: flex;
                    flex-direction: row;
                    place-content: center;
                    gap: 15px;
                    width: auto;
                    padding: 30px 10px;
                }
                footer img {
                    width: 40px;
                }
                footer p {
                    color: #fff;
                    font-size: 20px;
                    font-weight: 100;
                    text-align: center;
                    padding: 0 4px 4px;
                }
                footer p a {
                    color: #fff;
                }

                footer h2 {
                    position: relative;
                    display: block;
                    text-align: center;
                    padding: 40px 0 12px;
                    font-size: 45px;
                    color: #fff;
                }
                footer h2::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 280px;
                    background-color: #ffffff55;
                    top: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                }

                .copyright {
                    font-family: Jost-Light;
                    font-weight: 100;
                    padding-top: 15px;
                    padding-bottom: 20px;
                }

                .footer-contact {
                    flex-direction: column;
                    padding: 40px calc(50% - 150px) 60px calc(50% - 150px);
                    width: calc(100vw - 10px);
                }
                .footer-contact button {
                    font-size: 22px;
                    width: 300px;
                    border: none;
                    border-radius: 20px;
                    transition: background-color .2s ease;
                }
                .footer-contact button div {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: start;                    
                    padding: 5px;
                }
                .footer-contact button p {
                    color: #151515;
                    padding: 0;
                    font-size: 22px;
                    height: 34px;
                }
                .footer-contact button:hover {
                    cursor: pointer;
                    background-color: #ccc;
                }
            `}</style>
        </>
    )
}