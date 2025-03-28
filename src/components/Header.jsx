import React, { useEffect, useState, useRef } from "react"
import "./styles/Header.css"

export default function Header({ logo, marca }) {
    const [toggle, setToggle] = useState("/public/icons/menu.svg")
    const [logoTemp, setLogoTemp] = useState('/public/logo.png')
    const listaRef = useRef(null);

    useEffect(() => {
        const lista = listaRef.current;
        if (lista) {
          const enlaces = lista.querySelectorAll("a");
          enlaces.forEach((enlace) => {
            enlace.addEventListener("click", () => {
              lista.style.height = "0px"
              lista.style.top = "28px"
              if (window.scrollY > 50)
                setToggle('/public/icons/menu-black.svg')
              else setToggle('/public/icons/menu-black.svg')
            });
          });
      
          return () => {
            enlaces.forEach((enlace) => {
              enlace.removeEventListener("click", () => {
                lista.style.height = "0px"
                lista.style.top = "28px"
                if (window.scrollY > 50)
                    setToggle('/public/icons/menu-black.svg')
                else setToggle('/public/icons/menu-black.svg')
              });
            });
          };
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar")
            const links = document.querySelectorAll("header .nav-div a")
            const marca = document.querySelector("header h1")

            if (window.scrollY > 50) {
                navbar.style.backgroundColor = "#fff"
                marca.style.color = "#151515"
                if (links) {
                    links.forEach(link => {
                        link.style.color = "#151515"
                    })
                }
                setLogoTemp('/public/logo-white.jpg')
                if (toggle === '/public/icons/menu.svg' || toggle === '/public/icons/menu-black.svg')
                    setToggle('/public/icons/menu-black.svg')
                else setToggle('/public/icons/close-black.svg')
            } else {
                navbar.style.backgroundColor = "#151515"
                marca.style.color = "#fff"
                if (links) {
                    links.forEach(link => {
                        link.style.color = "#fff"
                    })
                }
                setLogoTemp('/public/logo.png')
                if (toggle === '/public/icons/menu.svg' || toggle === '/public/icons/menu-black.svg')
                    setToggle('/public/icons/menu.svg')
                else setToggle('/public/icons/close.svg')
            }
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [toggle])

    const handleClick = () => {
        if (window.scrollY <= 50) {
            if (toggle === "/public/icons/menu.svg") {
                setToggle("/public/icons/close.svg")
            } else {
                setToggle("/public/icons/menu.svg")
            }
        }
        else {
            if (toggle === "/public/icons/menu-black.svg") {
                setToggle("/public/icons/close-black.svg")
            } else {
                setToggle("/public/icons/menu-black.svg")
            }
        }

        const lista = listaRef.current
       if (lista) {
            const currentHeight = parseInt(window.getComputedStyle(lista).height, 10);
            if (currentHeight > 0) {
                lista.style.height = "0px"
                lista.style.top = "28px"
            } else {
                lista.style.height = "192px"
                lista.style.top = "60px"
            }
       }
    }

    return (
        <header>
            <nav id="navbar">
            {window.innerWidth < 600 &&
                <>
                <img src={logoTemp} alt="Logo" />
                <h1>{marca}</h1>
                </>
            }
            {window.innerWidth >= 600 &&
                <div className="nav-div">
                    <img src={logoTemp} alt="Logo" />
                    <h1>{marca}</h1>
                </div>
            }
            {window.innerWidth < 600 &&
                <button onClick={handleClick}>
                    <img src={toggle} alt="toggle" />
                </button>
            }
            {window.innerWidth >= 600 &&
                <div className="nav-div">
                    <a href="#about">¿Quiénes Somos?</a>
                    <a href="#vehiculo">Vehículo</a>
                    <a href="#viajes">Ofertas de Viaje</a>
                    <a href="#pagos">Métodos de Pago</a>
                    <a href="#footer">Contáctanos</a>
                </div>
            }
            </nav>
            {window.innerWidth < 600 &&
                <ul ref={listaRef}>
                    <li><a href="#about">¿Quiénes Somos?</a></li>
                    <li><a href="#vehiculo">Acerca del Vehículo</a></li>
                    <li><a href="#viajes">Ofertas de Viaje</a></li>
                    <li><a href="#pagos">Métodos de Pago</a></li>
                    <li><a href="#contact">Contáctanos</a></li>
                </ul>
            }            
        </header>
    );
}
