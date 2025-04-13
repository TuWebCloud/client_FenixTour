import { bancos } from '../const/bancos.js'

export default function Moneda({ name, noBorder, isBpa, isBandec, isMetropolitano, isZelle }) {
    const className = `article-moneda ${!noBorder ? "no-border" : ""}`

    return (
        <>
            <article className={className}>
                <p>{name}</p>
                <div>
                    {isBpa &&
                        <img src={bancos.bpa} alt="bpa" className='bpa' loading="lazy" />
                    }
                    {isBandec &&
                        <img src={bancos.bandec} alt="bandec" className='bandec' loading="lazy" />
                    }
                    {isMetropolitano &&
                        <img src={bancos.metropolitano} alt="metropolitano" className='metropolitano' loading="lazy" />
                    }
                    {isZelle &&
                        <img src={bancos.zelle} alt="zelle" className='zelle' loading="lazy" />
                    }
                </div>
            </article>
            <style jsx>{`
                .article-moneda {
                    display: flex;
                    flex-direction: row;
                    padding: 4% 0;
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
                    gap: 20px;
                }
                .article-moneda div img {
                    height: 28px;
                }

                .no-border{
                    border-bottom: 1px solid #00000055;
                }

                .bpa {
                    height: 24px !important;
                }
                .bandec {
                    height: 30px !important;
                }
                .zelle {
                    height: 34px !important;
                }

                @media screen and (max-width: 380px) {
                    .bpa {
                        height: 20px !important;
                    }
                    .bandec {
                        height: 26px !important;
                    }
                    .zelle {
                        height: 30px !important;
                    }
                }
            `}</style>
        </>
    )
}