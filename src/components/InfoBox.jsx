import './styles/InfoBox.css'
import ViajePil from './ViajePil'

export default function InfoBox ({ children, titulo, bg }) {
    return (
        <>
            <article className='infoBox'>
                <div>
                    <h3>{titulo}</h3>
                    <span>&gt; </span>
                    {children}
                    <img src={bg} alt="background" />
                </div>
            </article>
            <style jsx>{`
                .infoBox {
                    position: relative;
                    height: auto;
                    width: calc(100vw - 16%);
                    padding: 10px;
                }

                .infoBox div:not(.pil-container) {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 5px 20px #00000099;
                    border-radius: 20px;
                    overflow: hidden;
                    padding: 4%;
                    gap: 10px;
                    transition: all .2s ease;
                }
                .infoBox div:hover > img {
                    transform: scale(1.1);
                }
                .infoBox h3 {
                    text-align: left;
                    display: block;
                    font-size: 35px;
                    font-weight: 600;
                    color: #fff;
                    position: relative;
                    z-index: 2;
                }
                .infoBox p {
                    font-size: 24px;
                    color: #fff;
                    position: relative;
                    z-index: 2;
                }
                .infoBox img {
                    position: absolute;
                    object-fit: cover;
                    top: -40px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    filter: brightness(30%);
                    transition: all .3s ease;
                }
            `}</style>
        </>
    )
}