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
                <p>Holguín, Holguín, Cuba.</p>
                <p>2025 &copy; TuWeb</p>
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
            `}</style>
        </>
    )
}