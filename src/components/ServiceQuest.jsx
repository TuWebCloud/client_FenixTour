import './styles/ServiceQuest.css'

export default function ServiceQuest ({ icono, text }) {
    return (
        <article className='serviceQuest'>
            <div className='quest'>
                <p>
                    {text}
                </p>
                <img src={icono} alt="icono" />
            </div>
        </article>
    )
}