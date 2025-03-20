import { bancos } from '../const/bancos.js'

export default function Moneda({ name, isBpa, isBandec, isMetropolitano, isZelle }) {
    return (
        <>
            <article className="article-moneda">
                <p>{name}</p>
                <div>
                    {isBpa &&
                        <img src={bancos.bpa} alt="bpa" />
                    }
                    {isBandec &&
                        <img src={bancos.bandec} alt="bandec" />
                    }
                    {isMetropolitano &&
                        <img src={bancos.metropolitano} alt="metropolitano" />
                    }
                    {isZelle &&
                        <img src={bancos.zelle} alt="zelle" />
                    }
                </div>
            </article>
            <style jsx>{`
                .article-moneda {
                    display: flex;
                    flex-direction: row;
                    border-bottom: 1px solid #00000088;
                    padding: 4%;
                    width: 100%;
                    gap: 40px;
                }
                .article-moneda p {
                    display: inline;
                    font-size: 30px;
                    font-weight: 100;
                    margin: 0 !important;
                }
                .article-moneda div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    place-items: center;
                    gap: 15px;
                }
                .article-moneda div img {
                    height: 28px;
                }
            `}</style>
        </>
    )
}