export default function Footer () {
    return (
        <>
            <footer>
                <div>
                    <img src="/public/icons/whatsapp.svg" alt="Whatsapp" />
                    <img src="/public/icons/instagram.svg" alt="Instagram" />
                    <img src="/public/icons/telegram.svg" alt="Telegram" />
                    <img src="/public/icons/facebook.svg" alt="Facebook" />
                </div>
                <p>&copy; 2025 <a href="https://tuweb.cu" target="_blank">TuWeb</a></p>
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
                    gap: 15px;
                    width: auto;
                    padding: 30px 10px 10px;
                }
                footer img {
                    width: 40px;
                }
                footer p {
                    color: #fff;
                    font-size: 20px;
                    text-align: center;
                    padding: 10px;
                }
                footer p a {
                    color: #fff;
                }
            `}</style>
        </>
    )
}