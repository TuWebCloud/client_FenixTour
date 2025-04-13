import { Link } from "react-router-dom";

export default function ViajeProgramado ({ fecha, inicio, destino, hSalida, hRetorno, pasajeros }) {
    return (
        <>
            <article className="article-programa">

            <h3>Viaje Programado <span>{fecha}</span></h3>
            <h4>{inicio} - {destino}</h4>

            <div>
                <small>Salida - {hSalida}</small>
                <small>Retorno - {hRetorno}</small>
            </div>

            <Link to="/register">
                <button>Register</button>
            </Link>

            <small>{pasajeros}/15 Pasajeros</small>

            </article>

            <style jsx>{`
                .article-programa {
                    display: flex;
                    flex-direction: column;
                    place-items: center;
                    margin: 40px 0;
                    width: 100%;
                    gap: 5px;
                    border-top: 1px solid #f4bd0a;
                    border-bottom: 1px solid #f4bd0a;
                    box-shadow: 0 0 30px #f4bd0a88;
                    padding-bottom: 2%;
                    transition: all .2s ease;
                }
                .article-programa:hover {
                    box-shadow: 0 0 30px #f4bd0a;
                }
                .article-programa h3 {
                    color: #f4bd0a;
                    font-size: 30px;
                    font-weight: 600;
                    padding: 2% 0;
                }
                .article-programa h3 span {
                    background-color: #f4bd0a88;
                    border-radius: 20px;
                    color: #151515;
                    font-size: 26px;
                    padding: 0px 8px;
                }
                .article-programa h4 {
                    color: #ddd;
                    font-size: 30px;
                    letter-spacing: 1px;
                    font-weight: 100;
                }
                .article-programa div {
                    display: flex;
                    flex-direction: row;
                    font-size: 22px;
                    gap: 20px;
                }
                .article-programa small {
                    color: #dddddd88;
                    font-size: 19px;
                }
                .article-programa button {
                    margin: 20px 0 5px;
                    width: 75vw;
                    padding: 4px;
                    font-size: 24px;
                    background-color: #f4bd0a;
                    box-shadow: 0 5px 15px #00000088;
                    border: none;
                    border-radius: 20px;
                }
                .article-programa button:hover {
                    cursor: pointer;
                        background-color: #f4bd0add;
                }

                @media screen and (min-width: 600px) {
                    .article-programa {
                        border: 1px solid #f4bd0a;
                        border-radius: 20px;
                    }
                    .article-programa button {
                        width: 400px;
                    }
                    .article-programa h3 {
                        padding: 2% 0 1%;
                    }
                }
            `}</style>
        </>
    )
}