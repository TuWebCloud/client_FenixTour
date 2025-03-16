import './styles/Header.css'

export default function Header({ logo, marca }) {
    return (
        <header>
            <img src={logo} alt="Logo"/>
            <h1>{marca}</h1>
            <button>
                <img src="../../public/icons/menu.svg" alt="toggle"/>
            </button>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </header>
    )
}