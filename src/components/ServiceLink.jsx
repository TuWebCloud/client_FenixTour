import './styles/ServiceLink.css'

export default function ServiceLink ({ icono, text, href }) {
    return (
        <article className='serviceLink'>
            <div className='link'>
                <a href={href ?? "#"}>
                    {text}
                </a>
                <img src={icono} alt="icono" />
            </div>
        </article>
    )
}