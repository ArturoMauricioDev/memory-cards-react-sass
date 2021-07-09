import React from 'react'
//import './styles/_Header.scss'

export default function Header() {
    return (
        <header className="header">
            <div className="header__titulo">Memory Cards</div>
            <div>
                <button className="header__btn-reiniciar">Reiniciar</button>
            </div>
            <div className="header__intentos">
                Intentos:
            </div>
        </header>
    )
}
